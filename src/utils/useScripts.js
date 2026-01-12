import { useEffect } from 'react'

export function useScripts() {
  useEffect(() => {
    // Aguardar GSAP carregar
    let attempts = 0
    const maxAttempts = 50 // 5 segundos máximo
    
    const initScripts = () => {
      attempts++
      
      if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
        if (attempts < maxAttempts) {
          setTimeout(initScripts, 100)
        } else {
          console.warn('GSAP não carregou após 5 segundos')
        }
        return
      }

      // ScrollReveal usando GSAP + ScrollTrigger
      const setupScrollReveal = () => {
        if (!window.gsap || !window.ScrollTrigger) return
        window.gsap.registerPlugin(window.ScrollTrigger)

        const targets = document.querySelectorAll('[data-scroll-reveal]')

        targets.forEach((target) => {
          if (target.dataset.srReady) return

          const text = target.textContent || ''
          const words = text.split(/(\s+)/).map((word) =>
            word.match(/^\s+$/) ? word : `<span class="word">${word}</span>`
          )

          target.innerHTML = `<span class="scroll-reveal-text">${words.join('')}</span>`
          target.dataset.srReady = 'true'

          const wordEls = target.querySelectorAll('.word')

          window.gsap.fromTo(
            target,
            { transformOrigin: '0% 50%', rotate: 3 },
            {
              ease: 'none',
              rotate: 0,
              scrollTrigger: {
                trigger: target,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
              }
            }
          )

          window.gsap.fromTo(
            wordEls,
            { opacity: 0.2 },
            {
              ease: 'none',
              opacity: 1,
              stagger: 0.02,
              scrollTrigger: {
                trigger: target,
                start: 'top bottom-=20%',
                end: 'bottom bottom',
                scrub: 0.5
              }
            }
          )
        })
      }

      // Hero slideshow
      const setupHeroSlideshow = () => {
        const slideshow = document.querySelector('.hero-slideshow')
        if (!slideshow) return

        const slides = slideshow.querySelectorAll('.hero-slide')
        if (slides.length === 0) return

        let currentSlide = 0

        const showSlide = (index) => {
          slides.forEach((slide, i) => {
            if (i === index) {
              slide.classList.add('active')
              slide.style.opacity = '1'
              slide.style.zIndex = '1'
            } else {
              slide.classList.remove('active')
              slide.style.opacity = '0'
              slide.style.zIndex = '0'
            }
          })
        }

        const nextSlide = () => {
          currentSlide = (currentSlide + 1) % slides.length
          showSlide(currentSlide)
        }

        // Inicializar
        showSlide(0)
        const interval = setInterval(nextSlide, 5000)
        
        return () => clearInterval(interval)
      }

      // Logo loop
      const setupLogoLoop = () => {
        const loops = document.querySelectorAll('.logoloop')
        const rafIds = []

        loops.forEach((loop) => {
          const track = loop.querySelector('.logoloop__track')
          const list = track?.querySelector('.logoloop__list')
          if (!track || !list) return

          const direction = loop.dataset.direction === 'right' ? 1 : -1
          const speed = parseFloat(loop.dataset.speed) || 1
          let position = 0

          const animate = () => {
            position += direction * speed
            list.style.transform = `translateX(${position}px)`

            const listWidth = list.scrollWidth / 2
            if (Math.abs(position) >= listWidth) {
              position = 0
            }

            rafIds.push(requestAnimationFrame(animate))
          }

          animate()
        })

        return () => {
          rafIds.forEach(id => cancelAnimationFrame(id))
        }
      }

      // Animações de seções
      const setupSectionAnimations = () => {
        // Verificar se está na página de contato
        const currentPath = window.location.pathname || window.location.href
        const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page')
        
        if (isContatoPage) {
          return // Não aplicar animações na página de contato
        }

        if (!window.gsap || !window.ScrollTrigger) return
        window.gsap.registerPlugin(window.ScrollTrigger)

        window.gsap.utils.toArray('.card, article, [class*="rounded-lg"]').forEach((el, i) => {
          window.gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              delay: i * 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          )
        })
      }

      // Header scroll
      const setupHeaderScroll = () => {
        const header = document.querySelector('header')
        if (!header) return

        // Verificar se está na página de contato
        const currentPath = window.location.pathname || window.location.href
        const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page')
        
        // Se estiver na página de contato, remover todas as transições do header
        if (isContatoPage) {
          header.style.transition = 'none'
          header.style.animation = 'none'
          header.querySelectorAll('*').forEach(el => {
            el.style.transition = 'none'
            el.style.animation = 'none'
          })
        }

        let lastScroll = 0
        const handleScroll = () => {
          const currentScroll = window.pageYOffset
          
          if (currentScroll > 20) {
            header.classList.add('scrolled')
          } else {
            header.classList.remove('scrolled')
          }
          
          lastScroll = currentScroll
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
      }

      // Inicializar tudo após um pequeno delay para garantir que o DOM está pronto
      const cleanupFunctions = []
      
      setTimeout(() => {
        setupScrollReveal()
        const slideshowCleanup = setupHeroSlideshow()
        if (slideshowCleanup) cleanupFunctions.push(slideshowCleanup)
        
        const logoCleanup = setupLogoLoop()
        if (logoCleanup) cleanupFunctions.push(logoCleanup)
        
        setupSectionAnimations()
        const headerCleanup = setupHeaderScroll()
        if (headerCleanup) cleanupFunctions.push(headerCleanup)

        // Animações de entrada (exceto na página de contato)
        const currentPath = window.location.pathname || window.location.href
        const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page')
        
        if (window.gsap && !isContatoPage) {
          window.gsap.to(document.body, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
        } else if (isContatoPage) {
          document.body.style.opacity = '1'
        }
      }, 200)
      
      return () => {
        cleanupFunctions.forEach(cleanup => {
          if (typeof cleanup === 'function') cleanup()
        })
        if (window.ScrollTrigger) {
          window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
      }
    }

    const cleanup = initScripts()
    
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup()
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])
}
