import React, { useEffect, useRef, useState } from 'react'

function ClientesCarousel() {
  const trackRef = useRef(null)
  const listRef = useRef(null)
  const animationRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const logos = [
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' },
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' },
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' },
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' },
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' },
    { src: '/fotos em geral/images.png', alt: 'Santa Casa de Misericórdia de Tupã' }
  ]

  useEffect(() => {
    const track = trackRef.current
    const list = listRef.current
    if (!track || !list) return

    // Garantir gap entre itens
    list.style.gap = '1rem'
    list.style.display = 'flex'
    list.style.alignItems = 'center'
    
    // Duplicar a lista para rolagem contínua
    const clone = list.cloneNode(true)
    clone.style.gap = '1rem'
    track.appendChild(clone)

    const speed = 30 // pixels por segundo (mais lento)
    let position = 0
    let lastTime = null

    const animate = (currentTime) => {
      if (!lastTime) {
        lastTime = currentTime
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      if (isPaused) {
        lastTime = currentTime
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime

      const listWidth = list.offsetWidth
      position -= speed * deltaTime

      if (Math.abs(position) >= listWidth) {
        position = 0
      }

      track.style.transform = `translateX(${position}px)`
      track.style.transition = 'none'
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" style={{backgroundColor: '#FFFFFF'}} aria-label="Clientes e parceiros">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase mb-4" style={{color: '#E07B24', letterSpacing: '0.15em'}}>
            Clientes e parceiros
          </p>
          <h2 className="text-3xl font-semibold mb-6 leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#1C1C1C', letterSpacing: '-0.02em', fontWeight: 600}}>
            Empresas que confiam na MMKK
          </h2>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Logos de clientes e parceiros"
        >
          <div className="flex" ref={trackRef} style={{willChange: 'transform'}}>
            <ul className="flex items-center" ref={listRef} style={{gap: '32px'}}>
              {logos.map((logo, index) => (
                <li key={index} className="flex-shrink-0">
                  <div 
                    className="flex items-center justify-center bg-white rounded-xl border transition-all duration-300 hover:border-[#E07B24]"
                    style={{
                      width: '260px',
                      height: '180px',
                      border: '1px solid #EEEEEE',
                      padding: '32px'
                    }}
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="max-w-full object-contain transition-all duration-300"
                      style={{
                        filter: 'grayscale(100%) opacity(0.6)',
                        height: '140px',
                        width: 'auto'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'
                        e.currentTarget.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center mt-12 text-sm leading-relaxed" style={{color: '#6B7280', letterSpacing: '0'}}>
          Atuação comprovada em projetos hospitalares e industriais.
        </p>
      </div>
    </section>
  )
}

export default ClientesCarousel

