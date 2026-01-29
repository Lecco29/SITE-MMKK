import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path) => location.pathname === path

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/obras', label: 'Obras' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img
            src="/fotos em geral/Logo.jpeg"
            alt="Logo MMKK"
            className="h-10 w-auto object-contain"
          />
          <div>
            <p className="text-base sm:text-lg font-bold tracking-tight text-gray-900" style={{letterSpacing: '-0.01em'}}>
              MMKK <span className="text-orange-500">Engenharia</span>
            </p>
            <p className="text-[10px] sm:text-[11px] font-medium text-gray-500 -mt-0.5">Construções & Projetos</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                isActive(link.path)
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contato"
            className="rounded-lg px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-orange-500 transition-all hover:bg-orange-600 hover:shadow-lg"
          >
            Orçamento
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 lg:hidden hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => { closeMenu(); handleNavClick(link.path); }}
                className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={closeMenu}
              className="mt-2 rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wider text-white text-center bg-orange-500"
            >
              Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
