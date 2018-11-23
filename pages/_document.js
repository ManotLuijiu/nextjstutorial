import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  state = {};
  render() {
    return (
      <html>
        <Head>
          <title>Build up digital world</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
