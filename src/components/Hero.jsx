import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    '/fotos em geral/626aa8ee285b367586fbdc7a20.jpeg',
    '/fotos em geral/engenharia-800x563.jpg',
    '/fotos em geral/engenharia-civil-min.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero-section relative isolate min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="relative h-full"
          style={{
            display: 'flex',
            width: `${slides.length * 100}%`,
            height: '100%',
            minHeight: '100vh',
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Construção civil MMKK ${index + 1}`}
              className="h-full w-full object-cover"
              style={{
                width: `${100 / slides.length}%`,
                minWidth: `${100 / slides.length}%`,
                flexShrink: 0,
                height: '100%',
                minHeight: '100vh'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>MMKK Engenharia</span>
          </div>

          {/* Main Headline - Following reference style */}
          <h1 className="mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-white" style={{letterSpacing: '-0.02em', lineHeight: 1, textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
              CONSTRUÇÃO
            </span>
            <span className="inline-block mt-2 px-4 py-1 text-5xl sm:text-6xl lg:text-8xl font-bold uppercase bg-orange-500 text-white" style={{letterSpacing: '-0.02em', lineHeight: 1.2, boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
              CIVIL
            </span>
            <span className="block mt-4 text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-[0.15em] text-white/90" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>
              Qualidade e agilidade na execução de obras
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 max-w-xl mb-10 leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
            11 anos de experiência em execução de obras hospitalares e industriais com transparência e compromisso.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contato"
              className="group inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 bg-orange-500 text-white"
            >
              Solicitar orçamento
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
            <Link
              to="/obras"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 bg-white text-gray-900"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-orange-500' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
