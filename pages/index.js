import Head from 'next/head'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Especialidades from '../components/sections/especialidades/Especialidades'
import SobreMim from '../components/sections/sobre-mim/SobreMim'

export default function Page() {
  return (
    <>
      <Head>
        <title>Drª Luciele Cristofari</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Home />
      <Especialidades />
      <SobreMim />
    </>
  )
}
