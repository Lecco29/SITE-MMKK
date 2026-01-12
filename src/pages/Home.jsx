import React from 'react'
import Hero from '../components/Hero'
import Destaques from '../components/Destaques'
import Estatisticas from '../components/Estatisticas'
import Sobre from '../components/Sobre'
import Servicos from '../components/Servicos'
import ClientesCarousel from '../components/ClientesCarousel'
import ObrasCarousel from '../components/ObrasCarousel'
import Contato from '../components/Contato'

function Home() {
  return (
    <>
      <Hero />
      <Destaques />
      <Sobre />
      <Servicos />
      <ClientesCarousel />
      <Estatisticas />
      <ObrasCarousel />
      <Contato />
    </>
  )
}

export default Home

