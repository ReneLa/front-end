import React from "react";
import App from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "@material-ui/core/styles";
import withData from "../lib/withData";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    //this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
