import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ObrasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const obras = [
    {
      id: 'maternidade',
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      image: '/obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
      badge: 'Hospitalar'
    },
    {
      id: 'uti',
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados.',
      image: '/obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
      badge: 'Hospitalar'
    },
    {
      id: 'banco',
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      description: 'Construção completa do banco de sangue com todas as normas técnicas e de biossegurança.',
      image: '/obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
      badge: 'Hospitalar'
    }
  ]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % obras.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + obras.length) % obras.length)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentObra = obras[currentIndex]

  return (
    <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-28 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1]" style={{letterSpacing: '-0.02em'}}>
              Obras
              <span className="inline-block ml-3 px-3 py-1 bg-orange-500 text-white">realizadas</span>
            </h2>
          </div>
          <Link
            to="/obras"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 hover:gap-3 transition-all"
          >
            Ver todas
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-900 h-[280px] sm:h-[350px] lg:h-[500px]">
                {obras.map((obra, index) => (
                  <img
                    key={obra.id}
                    src={obra.image}
                    alt={obra.title}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                    style={{
                      opacity: index === currentIndex ? 1 : 0,
                      zIndex: index === currentIndex ? 1 : 0
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                <span className="absolute top-6 left-6 z-20 rounded-lg bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {currentObra.badge}
                </span>
                {/* Navigation Arrows - inside image for correct mobile positioning */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all flex items-center justify-center"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all flex items-center justify-center"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="bg-gray-900 p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-orange-500">
                  {currentObra.client}
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{letterSpacing: '-0.02em'}}>
                  {currentObra.title}
                </h3>
                <p className="text-base text-gray-400 mb-8 leading-relaxed">
                  {currentObra.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/obras/${currentObra.id}`}
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 bg-orange-500"
                  >
                    Ver galeria
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all border border-white/20 text-white hover:bg-white hover:text-gray-900"
                  >
                    Solicitar orçamento
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {obras.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ObrasCarousel
