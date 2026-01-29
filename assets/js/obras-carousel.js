// Carrossel de Obras Realizadas
(function() {
  let currentSlide = 0;
  let isAutoPlaying = true;
  let carouselInterval = null;

  const obras = [
    {
      id: 'maternidade',
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      image: './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
      badge: 'Hospitalar'
    },
    {
      id: 'uti',
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados.',
      image: './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
      badge: 'Hospitalar'
    },
    {
      id: 'banco',
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      description: 'Construção completa do banco de sangue com todas as normas técnicas e de biossegurança.',
      image: './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
      badge: 'Hospitalar'
    }
  ];

  function initCarousel() {
    const carouselContainer = document.getElementById('obras-carousel-container');
    if (!carouselContainer) return;

    // Criar HTML do carrossel
    const carouselHTML = `
      <div class="relative py-24 lg:py-28 overflow-hidden" style="background-color: #FFFFFF;">
        <div class="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-sm font-bold uppercase tracking-[0.15em] mb-6" style="color: #E07B24; letter-spacing: 0.15em;">Obras Realizadas</p>
            <h2 class="text-4xl font-bold uppercase mb-4 leading-[1.1] sm:text-5xl lg:text-6xl" style="color: #1A1A1A; letter-spacing: -0.02em;">
              Portfólio de obras
            </h2>
            <p class="text-sm font-bold uppercase tracking-wide max-w-2xl mx-auto leading-[1.6]" style="color: #525252;">
              Algumas das obras que refletem a qualidade do nosso trabalho.
            </p>
          </div>

          <div class="relative obras-carousel-wrapper" id="obras-carousel-wrapper">
            <div class="relative overflow-hidden rounded-xl shadow-lg" style="min-height: 450px; position: relative; border: 1px solid #E0E0E0;">
              <div class="flex obras-carousel-track transition-transform duration-700 ease-in-out" id="obras-carousel-track">
                ${obras.map((obra, index) => `
                  <div class="w-full flex-shrink-0 obras-carousel-slide" data-index="${index}" style="min-height: 450px;">
                    <div class="grid lg:grid-cols-2 gap-0 h-full" style="min-height: 450px;">
                      <div class="relative overflow-hidden bg-slate-900">
                        <img src="${obra.image}" alt="${obra.title}" class="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="${index === 0 ? 'eager' : 'lazy'}">
                        <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
                        <div class="absolute top-5 left-5">
                          <span class="inline-flex items-center rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wider" style="color: #E07B24;">
                            ${obra.badge}
                          </span>
                        </div>
                      </div>
                      <div class="bg-white p-6 lg:p-10 flex flex-col justify-center">
                        <div class="max-w-lg space-y-5">
                          <div>
                            <p class="text-xs font-bold uppercase tracking-[0.15em] mb-3" style="color: #E07B24; letter-spacing: 0.15em;">${obra.client}</p>
                            <h3 class="text-2xl font-bold uppercase mb-3 leading-tight" style="color: #1A1A1A; letter-spacing: -0.02em;">${obra.title}</h3>
                          </div>
                          <p class="text-xs font-bold uppercase tracking-wide leading-relaxed mb-6" style="color: #525252; line-height: 1.6;">${obra.description}</p>
                          <div class="flex flex-wrap gap-3">
                            <a href="./obras.html" class="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" style="background-color: #E07B24; box-shadow: 0 4px 14px 0 rgba(224, 123, 36, 0.25);">
                              Ver mais
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </a>
                            <a href="./contato.html" class="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" style="border-color: #E07B24; color: #E07B24; background-color: transparent;">
                              Orçamento
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <button class="obras-carousel-prev absolute left-4 z-20 rounded-full bg-white/90 backdrop-blur-sm p-4 text-slate-900 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2" style="top: 50%; transform: translateY(-50%); position: absolute;" aria-label="Slide anterior">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button class="obras-carousel-next absolute right-4 z-20 rounded-full bg-white/90 backdrop-blur-sm p-4 text-slate-900 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2" style="top: 50%; transform: translateY(-50%); position: absolute;" aria-label="Próximo slide">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div class="flex justify-center gap-3 mt-8 obras-carousel-indicators" id="obras-carousel-indicators">
              ${obras.map((_, index) => `
                <button class="obras-carousel-indicator h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${index === 0 ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}" data-index="${index}" aria-label="Ir para slide ${index + 1}"></button>
              `).join('')}
            </div>

            <div class="text-center mt-3">
              <p class="text-xs font-bold uppercase tracking-wider obras-carousel-counter" style="color: #9B9B9B;">1 / ${obras.length}</p>
            </div>
          </div>

          <div class="text-center mt-10">
            <a href="./obras.html" class="inline-flex items-center gap-2 rounded-lg border-2 px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" style="border-color: #E07B24; color: #E07B24; background-color: transparent;">
              Ver todas as obras
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;

    carouselContainer.innerHTML = carouselHTML;

    // Inicializar funcionalidades
    setupCarousel();
  }

  function setupCarousel() {
    const track = document.getElementById('obras-carousel-track');
    const prevBtn = document.querySelector('.obras-carousel-prev');
    const nextBtn = document.querySelector('.obras-carousel-next');
    const indicators = document.querySelectorAll('.obras-carousel-indicator');
    const counter = document.querySelector('.obras-carousel-counter');
    const wrapper = document.getElementById('obras-carousel-wrapper');

    if (!track || !prevBtn || !nextBtn) return;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Atualizar indicadores
      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.remove('w-2', 'bg-slate-300');
          indicator.classList.add('w-8', 'bg-brand-600');
        } else {
          indicator.classList.remove('w-8', 'bg-brand-600');
          indicator.classList.add('w-2', 'bg-slate-300');
        }
      });

      // Atualizar contador
      if (counter) {
        counter.textContent = `${currentSlide + 1} / ${obras.length}`;
      }
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % obras.length;
      updateCarousel();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + obras.length) % obras.length;
      updateCarousel();
    }

    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }

    // Fix button positions - ensure they stay centered
    function fixButtonPosition(btn) {
      btn.style.position = 'absolute';
      btn.style.top = '50%';
      btn.style.transform = 'translateY(-50%)';
      btn.style.willChange = 'transform';
      
      // Handle hover with scale while maintaining position
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-50%) scale(1.1)';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-50%)';
      });
    }
    
    if (prevBtn) fixButtonPosition(prevBtn);
    if (nextBtn) fixButtonPosition(nextBtn);

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    // Autoplay
    function startAutoplay() {
      if (carouselInterval) clearInterval(carouselInterval);
      carouselInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
      }
    }

    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoplay);
      wrapper.addEventListener('mouseleave', startAutoplay);
    }

    // Touch/swipe
    let touchStartX = 0;
    let touchEndX = 0;

    if (track) {
      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });

      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });

      function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
          nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
          prevSlide();
        }
      }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Iniciar autoplay
    startAutoplay();
  }

  // Inicializar quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();

