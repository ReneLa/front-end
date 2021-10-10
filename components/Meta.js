import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/public/fav.png" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    {/*<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />*/}
    <title>House Assist Space</title>
  </Head>
);

export default Meta;
