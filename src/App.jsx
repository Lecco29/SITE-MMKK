import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ServicosPage from './pages/Servicos'
import ObrasPage from './pages/Obras'
import ObraGaleriaPage from './pages/ObraGaleria'
import ContatoPage from './pages/Contato'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servicos" element={<ServicosPage />} />
        <Route path="obras" element={<ObrasPage />} />
        <Route path="obras/:id" element={<ObraGaleriaPage />} />
        <Route path="contato" element={<ContatoPage />} />
      </Route>
    </Routes>
  )
}

export default App
