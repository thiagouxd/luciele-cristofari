import Head from 'next/head'
import Header from '../components/header/Header'
import Home from '../components/home/Home'

export default function Page() {
  return (
    <>
      <Head>
        <title>Drª Luciele Cristofari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
    </>
  )
}
