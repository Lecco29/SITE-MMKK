import React, { memo, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const Header = memo(() => {
  const { isMenuOpen, toggleMenu, closeMenu } = useApp()
  const location = useLocation()
  const isScrolled = false // Será gerenciado pelo useScripts
  
  const handleCTAClick = useCallback(() => {
    window.location.href = '/contato'
  }, [])
  
  const handleMobileCTAClick = useCallback(() => {
    window.location.href = '/contato'
    closeMenu()
  }, [closeMenu])

  return (
    <header 
      id="main-header" 
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 header-transparent ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-all duration-200 hover:opacity-80 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded-lg p-1" 
          aria-label="MMKK Engenharia - Página inicial"
        >
          <img 
            src="./fotos%20em%20geral/Logo.jpeg" 
            alt="Logo MMKK Engenharia e Construções" 
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 header-logo-img" 
            loading="eager"
            width="48"
            height="48"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold header-logo-text">MMKK</p>
            <p className="text-xs header-logo-subtext">Engenharia & Construções</p>
          </div>
        </Link>
        
        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Navegação principal">
          <Link 
            to="/"
            className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 header-nav-link ${location.pathname === '/' ? 'header-nav-active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            <span className="relative z-10 block text-center">Início</span>
          </Link>
          <Link 
            to="/servicos"
            className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 header-nav-link ${location.pathname === '/servicos' ? 'header-nav-active' : ''}`}
            aria-current={location.pathname === '/servicos' ? 'page' : undefined}
          >
            <span className="relative z-10 block text-center">Nossos Serviços</span>
          </Link>
          <Link 
            to="/obras"
            className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 header-nav-link ${location.pathname === '/obras' ? 'header-nav-active' : ''}`}
            aria-current={location.pathname === '/obras' ? 'page' : undefined}
          >
            <span className="relative z-10 block text-center">Obras Realizadas</span>
          </Link>
          <Link 
            to="/contato"
            className={`relative px-4 py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 header-nav-link ${location.pathname === '/contato' ? 'header-nav-active' : ''}`}
            aria-current={location.pathname === '/contato' ? 'page' : undefined}
          >
            <span className="relative z-10 block text-center">Fale Conosco</span>
          </Link>
        </nav>
        
        <div className="hidden items-center gap-4 lg:flex">
          <button 
            id="cta-top" 
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" 
            style={{backgroundColor: '#F28C28', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
            aria-label="Solicitar proposta de orçamento"
            onClick={handleCTAClick}
          >
            Solicitar proposta
          </button>
        </div>
        
        <button 
          id="menu-btn" 
          className="rounded-lg p-2 ring-1 transition-all hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 lg:hidden header-menu-btn"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Abrir menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div 
        id="mobile-menu" 
        className={`${isMenuOpen ? '' : 'hidden'} border-t backdrop-blur-lg lg:hidden header-mobile-menu ${location.pathname === '/contato' ? 'no-animation' : ''}`}
        role="navigation"
        aria-label="Menu mobile"
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 gap-2">
          <Link 
            to="/"
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${location.pathname === '/' ? 'text-brand-600 bg-brand-50' : ''}`}
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link 
            to="/servicos"
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${location.pathname === '/servicos' ? 'text-brand-600 bg-brand-50' : ''}`}
            onClick={closeMenu}
          >
            Nossos Serviços
          </Link>
          <Link 
            to="/obras"
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${location.pathname === '/obras' ? 'text-brand-600 bg-brand-50' : ''}`}
            onClick={closeMenu}
          >
            Obras Realizadas
          </Link>
          <Link 
            to="/contato"
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${location.pathname === '/contato' ? 'text-brand-600 bg-brand-50' : ''}`}
            onClick={closeMenu}
          >
            Fale Conosco
          </Link>
          <button 
            className="mt-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" 
            style={{backgroundColor: '#F28C28', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
            onClick={handleMobileCTAClick}
          >
            Solicitar proposta
          </button>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header

