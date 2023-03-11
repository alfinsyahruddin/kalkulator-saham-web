import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Kalkulator Saham</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/images/icons/favicon.ico" />
          <link
            href="/images/icons/icon.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/images/icons/icon.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/images/icons/icon.png" />

          <link rel="stylesheet" type="text/css" href="/css/global.css" />
          {/* PWA primary color */}
          <meta name="theme-color" content="#C07F00" />

          {/* META TAGS FOR SEO PURPOSE */}
          <meta name="title" content="Kalkulator Saham" />
          <meta
            name="description"
            content="Stock Calculator app on Indonesia Stock Exchange (IDX)."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://kalkulator-saham.alfin.dev/"
          />
          <meta property="og:title" content="Kalkulator Saham" />
          <meta
            property="og:description"
            content="Stock Calculator app on Indonesia Stock Exchange (IDX)."
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/XY1FNyp1/Frame-1-1.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://kalkulator-saham.alfin.dev/"
          />
          <meta property="twitter:title" content="Kalkulator Saham" />
          <meta
            property="twitter:description"
            content="Stock Calculator app on Indonesia Stock Exchange (IDX)."
          />
          <meta
            property="twitter:image"
            content="https://i.postimg.cc/XY1FNyp1/Frame-1-1.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
