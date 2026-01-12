import React, { useState, useEffect } from 'react'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    './fotos em geral/626aa8ee285b367586fbdc7a20.jpeg',
    './fotos em geral/engenharia-800x563.jpg',
    './fotos em geral/engenharia-civil-min.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero-section relative isolate min-h-screen flex items-center overflow-hidden" style={{marginTop: 0, paddingTop: 0}} aria-label="Hero section">
      <div className="hero-bg absolute inset-0 z-0 overflow-hidden">
        <div className="hero-slideshow relative h-full" style={{display: 'flex', width: `${slides.length * 100}%`, height: '100%', minHeight: '100vh', transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'}}>
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide} 
              alt={`Construção civil MMKK ${index + 1}`} 
              className="hero-slide h-full w-full object-cover"
              style={{
                width: `${100 / slides.length}%`,
                minWidth: `${100 / slides.length}%`,
                flexShrink: 0,
                display: 'block',
                height: '100%',
                minHeight: '100vh'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-40 lg:px-8 lg:pt-28 lg:pb-56">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-lg" style={{color: '#FFFFFF'}}>
              <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse"></span>
              Engenharia & Construções
            </div>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6 sm:text-6xl lg:text-7xl scroll-reveal" data-scroll-reveal style={{color: '#FFFFFF', letterSpacing: '-0.03em', fontWeight: 700, lineHeight: '1.1', textShadow: '0 2px 6px rgba(0,0,0,0.6)'}}>
            Obras bem planejadas, entregues no prazo e com <span className="text-[#F28C28]">transparência total</span>.
          </h1>
          
          <p className="text-xl max-w-2xl leading-relaxed mb-8 sm:text-2xl" style={{color: '#FFFFFF', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: '1.6', textShadow: '0 2px 6px rgba(0,0,0,0.6)'}}>
            Hospitalares, corporativas, industriais e residenciais — a MMKK coordena projetos ponta a ponta, com equipes especializadas e comunicação clara.
          </p>
          
          <div className="flex flex-wrap gap-2.5 mb-10" role="list" aria-label="Segmentos de atuação">
            <span className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium shadow-md transition-all hover:bg-white/20 hover:scale-105" style={{color: '#FFFFFF'}} role="listitem">Hospitalar</span>
            <span className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium shadow-md transition-all hover:bg-white/20 hover:scale-105" style={{color: '#FFFFFF'}} role="listitem">Corporativo</span>
            <span className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium shadow-md transition-all hover:bg-white/20 hover:scale-105" style={{color: '#FFFFFF'}} role="listitem">Industrial</span>
            <span className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium shadow-md transition-all hover:bg-white/20 hover:scale-105" style={{color: '#FFFFFF'}} role="listitem">Residencial</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="/contato" 
              className="group inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:ring-offset-2 focus:ring-offset-black/50 active:scale-100" 
              style={{background: 'linear-gradient(135deg, #F28C28 0%, #FF6B00 100%)', letterSpacing: '0.01em', boxShadow: '0 8px 24px rgba(242, 140, 40, 0.4), 0 4px 12px rgba(242, 140, 40, 0.3)'}}
              aria-label="Fale com especialistas da MMKK"
            >
              <span>Fale com especialistas</span>
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a 
              href="/obras" 
              className="inline-flex items-center justify-center rounded-xl border-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 active:scale-100 backdrop-blur-sm" 
              style={{borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.1)', letterSpacing: '0.01em', boxShadow: '0 4px 16px rgba(0,0,0,0.2)'}}
            >
              Ver obras
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
