import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <title>Chibi-Verse NFT</title>
          <meta property="og:site_name" content="Chibi-Verse" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:url" content="https://www.chibiverse.fun/" />
          {/* <meta name="theme-color" content="#47F066" /> */}
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="153" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/icons/924866972989136906/3d4d444bf68f748b9285f52bf401e6fa.jpg?size=256"
          />
          <meta
            property="description"
            content="Chibiverse is a play-to-earn on-chain game and eco-system, 10,000 randomly generated NFTs characters on Ethereum blockchain as ERC-721 tokens."
          />
          <meta
            property="og:description"
            content="Chibiverse is a play-to-earn on-chain game and eco-system, 10,000 randomly generated NFTs characters on Ethereum blockchain as ERC-721 tokens."
          />
          <meta property="og:title" content="Chibi-Verse" />
          <meta
            name="twitter:image"
            content="https://cdn.discordapp.com/icons/924866972989136906/3d4d444bf68f748b9285f52bf401e6fa.jpg?size=256"
          />
          <meta name="twitter:title" content="Chibi-Verse" />
          <meta
            property="twitter:description"
            content="Chibiverse is a play-to-earn on-chain game and eco-system, 10,000 randomly generated NFTs characters on Ethereum blockchain as ERC-721 tokens."
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={'true'}
          />
          <link rel="shortcut icon" href="/template_data/favicon.ico" />
          <link rel="stylesheet" href="/template_data/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/script/demo.js" />
        </body>
      </Html>
    );
  }
}
