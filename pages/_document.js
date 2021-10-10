import React from "react";
import NextDocument from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/styles";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            materialUiSheets.collect(
              styledComponentSheet.collectStyles(<App {...props} />)
            )
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>
        ]
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
}

// import Document, { Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
// import { Stylesheet, InjectionMode, resetIds } from "office-ui-fabric-react";

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     const sheet = new ServerStyleSheet();
//     const stylesheet = Stylesheet.getInstance();
//     stylesheet.setConfig({
//       injectionMode: InjectionMode.none,
//       namespace: "server"
//     });
//     stylesheet.reset();
//     resetIds();
//     const page = renderPage(App => props =>
//       sheet.collectStyles(<App {...props} />)
//     );
//     const styleTags = sheet.getStyleElement();
//     const style_tags = stylesheet.getRules(true);
//     return { ...page, styleTags, style_tags };
//   }

//   render() {
//     return (
//       <html>
//         <Head>
//           <style
//             type="text/css"
//             dangerouslySetInnerHTML={{ __html: this.props.style_tags }}
//           />
//           {this.props.styleTags}
//         </Head>

//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }
