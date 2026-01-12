import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function ObrasCarousel() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const obras = [
    {
      id: 'maternidade',
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      image: './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
      category: 'hospitalar',
      badge: 'Hospitalar'
    },
    {
      id: 'uti',
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados.',
      image: './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
      category: 'hospitalar',
      badge: 'Hospitalar'
    },
    {
      id: 'banco',
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      description: 'Construção completa do banco de sangue com todas as normas técnicas e de biossegurança.',
      image: './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
      category: 'hospitalar',
      badge: 'Hospitalar'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % obras.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + obras.length) % obras.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const currentObra = obras[currentIndex]

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{backgroundColor: '#FFFFFF'}} aria-label="Carrossel de obras realizadas">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] mb-6" style={{color: '#F28C28', letterSpacing: '0.05em'}}>
            Obras Realizadas
          </p>
          <h2 className="text-3xl font-semibold mb-4 leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#1C1C1C', letterSpacing: '-0.02em'}}>
            Portfólio de obras
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-[1.6] sm:text-lg" style={{color: '#4A4A4A', letterSpacing: 0}}>
            Algumas das obras que refletem a qualidade do nosso trabalho.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-xl shadow-lg" style={{minHeight: '450px', position: 'relative', border: '1px solid #E0E0E0'}}>
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${obras.length * 100}%`
              }}
            >
              {obras.map((obra, index) => (
                <div
                  key={obra.id}
                  className="flex-shrink-0 relative"
                  style={{
                    minHeight: '450px',
                    width: `${100 / obras.length}%`
                  }}
                >
                  <div className="grid lg:grid-cols-2 gap-0 h-full" style={{minHeight: '450px'}}>
                    {/* Image Side */}
                    <div className="relative overflow-hidden bg-slate-900">
                      <img
                        src={obra.image}
                        alt={obra.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
                      <div className="absolute top-5 left-5 z-10">
                        <span className="inline-flex items-center rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{color: '#F28C28'}}>
                          {obra.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="bg-white p-6 lg:p-10 flex flex-col justify-center">
                      <div className="max-w-lg space-y-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.05em] mb-3" style={{color: '#F28C28', letterSpacing: '0.05em'}}>
                            {obra.client}
                          </p>
                          <h3 className="text-2xl font-semibold mb-3 leading-tight" style={{color: '#1C1C1C', letterSpacing: '-0.02em'}}>
                            {obra.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed mb-6" style={{color: '#4A4A4A', letterSpacing: 0, lineHeight: '1.6'}}>
                          {obra.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => navigate('/obras')}
                            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]"
                            style={{backgroundColor: '#F28C28', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
                            aria-label={`Ver mais sobre ${obra.title}`}
                          >
                            Ver mais
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                          <button
                            onClick={() => navigate('/contato')}
                            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]"
                            style={{borderColor: '#F28C28', color: '#F28C28', backgroundColor: 'transparent'}}
                            aria-label="Solicitar orçamento"
                          >
                            Solicitar orçamento
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-20 rounded-full bg-white/90 backdrop-blur-sm p-4 text-slate-900 transition-all duration-300 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                position: 'absolute',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%)'
              }}
              aria-label="Slide anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 z-20 rounded-full bg-white/90 backdrop-blur-sm p-4 text-slate-900 transition-all duration-300 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                position: 'absolute',
                willChange: 'transform'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%)'
              }}
              aria-label="Próximo slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {obras.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${
                  index === currentIndex 
                    ? 'w-8 bg-brand-600' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3">
            <p className="text-xs font-medium" style={{color: '#9B9B9B'}}>
              {currentIndex + 1} / {obras.length}
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/obras')}
            className="inline-flex items-center gap-2 rounded-lg border-2 px-8 py-3 text-sm font-semibold transition-all duration-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]"
            style={{borderColor: '#F28C28', color: '#F28C28', backgroundColor: 'transparent'}}
            aria-label="Ver todas as obras realizadas"
          >
            Ver todas as obras
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ObrasCarousel

