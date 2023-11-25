import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <link rel="icon" href="/home/sideImage.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nanda Docs</title>
      </Head>
    <Component {...pageProps} />
    <Script src='https://accounts.google.com/gsi/client'/>
    </>
}

export default MyApp
