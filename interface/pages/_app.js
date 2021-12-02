import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="description" content="Aplicação para gerenciamento do equilíbrio e correção de solo." />
      <link rel="icon" href="/projeto_graos_logo.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
