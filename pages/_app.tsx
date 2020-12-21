import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { I18nProvider } from "next-rosetta";

import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Studio axl - Axelle Malard</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <I18nProvider table={pageProps.table /* From getStaticProps */}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;
