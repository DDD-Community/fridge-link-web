import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <title>Fridge Link</title>
        <meta name="author" content="DDD 10th WEB 1 team" />
        <meta name="description" content="식자재를 관리하고, 지인들과 나눔하는, 냉장고 관리 서비스" />
        <meta property="og:title" content="Fridge Link" />
        <meta
          property="og:description"
          content="냉장고 속 식자재를 관리하고, 식자재를 지인들과 나눔하는 냉장고 관리 서비스"
        />
        <meta property="og:image" content="https://fridgelink.site/favicon.ico" />
        <meta property="og:url" content="https://fridgelink.site" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
