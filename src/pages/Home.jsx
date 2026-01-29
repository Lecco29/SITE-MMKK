import React from 'react'
import Hero from '../components/Hero'
import Estatisticas from '../components/Estatisticas'
import Sobre from '../components/Sobre'
import ObrasCarousel from '../components/ObrasCarousel'
import Servicos from '../components/Servicos'
import Contato from '../components/Contato'

function Home() {
  return (
    <>
      <Hero />
      <Estatisticas />
      <Sobre />
      <ObrasCarousel />
      <Servicos />
      <Contato />
    </>
  )
}

export default Home
