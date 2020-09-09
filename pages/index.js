import Head from 'next/head'
import Html from 'next/document'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Especialidades from '../components/sections/especialidades/Especialidades'
import SobreMim from '../components/sections/sobre-mim/SobreMim'
import { Depoimentos } from '../components/sections/depoimentos/Depoimentos'
import { Contato } from '../components/sections/contato/Contato'
import { descricao } from '../components/sections/sobre-mim/data.json'

export default function Page() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Drª Luciele Cristofari</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta charset="UTF-8" />
        <meta name="title" content="Drª Luciele Critofari - Endocrinologista Pediátrica" />
        <meta name="description" content={descricao} />
        <meta name="keywords" content="Luciele Cristofari, Endocrinologia Pediatra, Pediatria, Endocrinologia" />
      </Head>

      <Header />
      <Home />
      <Especialidades />
      <SobreMim />
      <Depoimentos />
      <Contato />
    </Html>
  )
}
