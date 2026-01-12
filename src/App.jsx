import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/ui/ErrorBoundary'
import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useScripts } from './utils/useScripts'

// Lazy loading para melhor performance
const Home = lazy(() => import('./pages/Home'))
const Servicos = lazy(() => import('./pages/Servicos'))
const Obras = lazy(() => import('./pages/Obras'))
const Contato = lazy(() => import('./pages/Contato'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FFFFFF'}}>
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{borderColor: '#F28C28'}}></div>
        <p className="mt-4 text-lg" style={{color: '#4A4A4A'}}>Carregando...</p>
      </div>
    </div>
  )
}

function AppContentInner() {
  const location = useLocation()
  const isContatoPage = location.pathname === '/contato'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

function AppContent() {
  useScripts()

  return (
    <Router>
      <AppContentInner />
    </Router>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg">
          Pular para o conteúdo principal
        </a>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  )
}

export default App
