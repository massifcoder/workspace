import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <link rel="icon" href="/home/sideImage.png" />
        <title>Nanda Docs</title>
      </Head>
    <Component {...pageProps} />
    <Script src='https://accounts.google.com/gsi/client'/>
    </>
}

export default MyApp
