const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  
  // Atualizar aria-expanded
  menuBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  
  // Animar menu mobile (exceto na página de contato)
  const currentPath = window.location.pathname || window.location.href;
  const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body').classList.contains('contato-page');
  
  if (isHidden && !isContatoPage && window.gsap) {
    // Aplicar animação apenas quando abrindo o menu e não estiver na página de contato
    gsap.fromTo(mobileMenu, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    );
  } else if (isContatoPage) {
    // Remover qualquer animação na página de contato
    if (window.gsap) {
      gsap.set(mobileMenu, { opacity: 1, y: 0, clearProps: 'all' });
    }
  }
});

// Fechar menu ao clicar em link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Fechar menu ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  }
});

const yearEl = document.getElementById('footer-year-number');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Adicionar funcionalidade ao botão CTA do header
const ctaTop = document.getElementById('cta-top');
if (ctaTop) {
  ctaTop.addEventListener('click', () => {
    window.location.href = './contato.html';
  });
}

// ScrollReveal simples usando GSAP + ScrollTrigger, inspirado no snippet fornecido.
const setupScrollReveal = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const targets = document.querySelectorAll('[data-scroll-reveal]');

  targets.forEach((target) => {
    // Se já processado, pula
    if (target.dataset.srReady) return;

    const text = target.textContent || '';
    const words = text.split(/(\s+)/).map((word) =>
      word.match(/^\s+$/) ? word : `<span class="word">${word}</span>`
    );

    target.innerHTML = `<span class="scroll-reveal-text">${words.join('')}</span>`;
    target.dataset.srReady = 'true';

    const wordEls = target.querySelectorAll('.word');

    gsap.fromTo(
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
    );

    gsap.fromTo(
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
    );

    gsap.fromTo(
      wordEls,
      { filter: 'blur(4px)' },
      {
        ease: 'none',
        filter: 'blur(0px)',
        stagger: 0.02,
        scrollTrigger: {
          trigger: target,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: 0.5
        }
      }
    );
  });
};

window.addEventListener('load', setupScrollReveal);

// LogoLoop básico em JS (adaptado para versão estática)
const setupLogoLoop = () => {
  const loops = document.querySelectorAll('.logoloop');
  const rafIds = [];

  loops.forEach((loop) => {
    const track = loop.querySelector('.logoloop__track');
    const list = track?.querySelector('.logoloop__list');
    if (!track || !list) return;

    // Duplica a lista para permitir rolagem contínua (nomes ou logos)
    const clone = list.cloneNode(true);
    track.appendChild(clone);

    const direction = loop.dataset.direction || 'left';
    const speed = parseFloat(loop.dataset.speed || '50'); // px/s
    const isVertical = direction === 'up' || direction === 'down';
    const sign = direction === 'left' || direction === 'up' ? -1 : 1;

    let offset = 0;
    let last = null;

    const getSize = () => (isVertical ? list.offsetHeight : list.offsetWidth);

    const step = (ts) => {
      if (last == null) {
        last = ts;
        rafIds.push(requestAnimationFrame(step));
        return;
      }
      const dt = Math.max(0, ts - last) / 1000;
      last = ts;

      const size = getSize();
      const delta = sign * speed * dt;
      offset += delta;

      if (sign < 0 && offset <= -size) offset += size;
      if (sign > 0 && offset >= 0) offset -= size;

      const transformValue = isVertical
        ? `translate3d(0, ${offset}px, 0)`
        : `translate3d(${offset}px, 0, 0)`;

      track.style.transform = transformValue;
      rafIds.push(requestAnimationFrame(step));
    };

    rafIds.push(requestAnimationFrame(step));
  });

  // Cleanup on navigation (SPA safety) — harmless for static
  window.addEventListener(
    'beforeunload',
    () => {
      rafIds.forEach((id) => cancelAnimationFrame(id));
    },
    { once: true }
  );
};

window.addEventListener('load', setupLogoLoop);

// Animações de entrada para seções com micro-interações suaves
const setupSectionAnimations = () => {
  // Verificar se está na página de contato - se sim, não aplicar animações
  const currentPath = window.location.pathname || window.location.href;
  const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page');
  
  if (isContatoPage) {
    return; // Não aplicar animações na página de contato
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Animar cards e artigos com stagger suave
  gsap.utils.toArray('.card, article, [class*="rounded-lg"]').forEach((el, i) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
        scale: 0.98
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        delay: i * 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Animar badges com bounce suave
  gsap.utils.toArray('.badge, .badge-white').forEach((el, i) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.85,
        rotation: -3
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.3,
        delay: i * 0.02,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Animar títulos de seções com slide suave
  gsap.utils.toArray('section h2, section h3').forEach((el, i) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -20,
        y: 10
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        delay: i * 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Animar parágrafos com fade suave
  gsap.utils.toArray('section p').forEach((el, i) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 15
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: i * 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Parallax suave no hero
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      y: '15%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // Animar números/estatísticas com contador
  gsap.utils.toArray('[class*="text-5xl"], [class*="text-6xl"], [class*="text-7xl"]').forEach((el) => {
    const originalText = el.textContent.trim();
    const number = parseFloat(originalText.replace(/[^0-9.]/g, ''));
    
    if (!isNaN(number) && number > 0) {
      const obj = { value: 0 };
      const suffix = originalText.includes('+') ? '+' : (originalText.includes('%') ? '%' : '');
      
      gsap.to(obj, {
        value: number,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: function() {
          const currentValue = Math.floor(obj.value);
          if (suffix === '+') {
            el.textContent = `+${currentValue}`;
          } else if (suffix === '%') {
            el.textContent = `${currentValue}%`;
          } else {
            el.textContent = currentValue;
          }
        }
      });
    }
  });
};

// Inicializar animações quando GSAP estiver pronto
if (window.gsap && window.ScrollTrigger) {
  window.addEventListener('load', () => {
    setTimeout(setupSectionAnimations, 100);
  });
} else {
  // Aguardar GSAP carregar
  const checkGSAP = setInterval(() => {
    if (window.gsap && window.ScrollTrigger) {
      clearInterval(checkGSAP);
      window.addEventListener('load', () => {
        setTimeout(setupSectionAnimations, 100);
      });
    }
  }, 100);
}

// Galeria de fotos das obras (caminhos com encoding para espaços)
const galleries = {
  maternidade: [
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM(1).jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM(2).jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.32%20PM.jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.32%20PM(1).jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.32%20PM(2).jpeg',
    './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.32%20PM(3).jpeg'
  ],
  uti: [
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM(1).jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM(2).jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM(4).jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.35%20PM.jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.35%20PM(1).jpeg',
    './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.35%20PM(2).jpeg'
  ],
  banco: [
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM(1).jpeg',
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.12%20PM(1).jpeg',
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.12%20PM(2).jpeg',
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.12%20PM(3).jpeg',
    './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.12%20PM(4).jpeg'
  ]
};

let currentGallery = null;
let currentIndex = 0;

function openGallery(galleryName, index = 0) {
  currentGallery = galleryName;
  currentIndex = index;
  const modal = document.getElementById('gallery-modal');
  const image = document.getElementById('gallery-image');
  const counter = document.getElementById('gallery-counter');
  
  if (!modal || !galleries[galleryName]) return;
  
  const images = galleries[galleryName];
  image.src = images[index];
  image.alt = `Imagem ${index + 1} de ${images.length}`;
  counter.textContent = `${index + 1} / ${images.length}`;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Atualizar visibilidade dos botões
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.style.display = images.length > 1 ? 'block' : 'none';
  if (nextBtn) nextBtn.style.display = images.length > 1 ? 'block' : 'none';
}

function closeGallery() {
  const modal = document.getElementById('gallery-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  currentGallery = null;
  currentIndex = 0;
}

function changeImage(direction) {
  if (!currentGallery || !galleries[currentGallery]) return;
  
  const images = galleries[currentGallery];
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  const image = document.getElementById('gallery-image');
  const counter = document.getElementById('gallery-counter');
  
  if (image) {
    image.style.opacity = '0';
    setTimeout(() => {
      image.src = images[currentIndex];
      image.alt = `Imagem ${currentIndex + 1} de ${images.length}`;
      image.style.opacity = '1';
    }, 150);
  }
  
  if (counter) {
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeGallery();
  } else if (e.key === 'ArrowLeft' && currentGallery) {
    changeImage(-1);
  } else if (e.key === 'ArrowRight' && currentGallery) {
    changeImage(1);
  }
});

// Fechar ao clicar fora da imagem
document.getElementById('gallery-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'gallery-modal') {
    closeGallery();
  }
});

// Adicionar eventos de clique nas imagens dos cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gallery]').forEach((img) => {
    img.addEventListener('click', () => {
      const galleryName = img.dataset.gallery;
      const index = parseInt(img.dataset.index || '0');
      openGallery(galleryName, index);
    });
  });
});

// Hero Slideshow - Carrossel automático de imagens com efeito slide
const setupHeroSlideshow = () => {
  const slideshowContainer = document.getElementById('hero-slideshow-container');
  if (!slideshowContainer) return;

  const slides = slideshowContainer.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  const showSlide = (index) => {
    // Calcular o deslocamento: cada slide ocupa 100/totalSlides % da largura do container
    // O container tem largura total de (totalSlides * 100%)
    // Para mostrar o slide N, precisamos mover -N * (100/totalSlides)% da largura do container
    const translateX = -(index * (100 / totalSlides));
    slideshowContainer.style.transform = `translateX(${translateX}%)`;
    slideshowContainer.style.display = 'flex';
    slideshowContainer.style.width = `${totalSlides * 100}%`;
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  };

  // Iniciar com a primeira imagem visível
  showSlide(0);

  // Trocar imagem a cada 5 segundos
  setInterval(nextSlide, 5000);
};

// Executar quando o DOM estiver pronto e também no load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHeroSlideshow);
} else {
  setupHeroSlideshow();
}
window.addEventListener('load', setupHeroSlideshow);

// Carrossel de Clientes e Parceiros
const setupClientesCarousel = () => {
  const container = document.getElementById('clientes-carousel-container');
  if (!container) return;

  const track = document.getElementById('clientes-track');
  const list = document.getElementById('clientes-list');
  if (!track || !list) return;

  // Duplicar a lista para rolagem contínua
  const clone = list.cloneNode(true);
  track.appendChild(clone);

  // Adicionar hover handlers para pausar animação
  let isPaused = false;
  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  // Adicionar hover handlers para logos
  const logos = container.querySelectorAll('img');
  logos.forEach((logo) => {
    logo.addEventListener('mouseenter', () => {
      logo.style.filter = 'grayscale(0%) opacity(1)';
      logo.style.transform = 'scale(1.05)';
    });
    logo.addEventListener('mouseleave', () => {
      logo.style.filter = 'grayscale(100%) opacity(0.6)';
      logo.style.transform = 'scale(1)';
    });
  });

  const speed = 30; // pixels por segundo (mais lento)
  let position = 0;
  let lastTime = null;

  const animate = (currentTime) => {
    if (!lastTime) {
      lastTime = currentTime;
      requestAnimationFrame(animate);
      return;
    }

    if (isPaused) {
      lastTime = currentTime;
      requestAnimationFrame(animate);
      return;
    }

    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    const listWidth = list.offsetWidth;
    position -= speed * deltaTime;

    if (Math.abs(position) >= listWidth) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    track.style.transition = 'none';
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupClientesCarousel);
} else {
  setupClientesCarousel();
}
window.addEventListener('load', setupClientesCarousel);

// Micro-interações adicionais para hover
const setupHoverInteractions = () => {
  // Adicionar ripple effect em botões
  document.querySelectorAll('.btn-primary, .btn-secondary, button').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s ease-out';
      ripple.style.pointerEvents = 'none';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Adicionar hover suave em cards de imagem
  document.querySelectorAll('[class*="group"]').forEach(group => {
    const img = group.querySelector('img');
    if (img) {
      group.addEventListener('mouseenter', () => {
        gsap.to(img, {
          scale: 1.05,
          duration: 0.6,
          ease: 'power2.out'
        });
      gsap.to(group, {
        y: -4,
        duration: 0.4,
        ease: 'power2.out'
        });
      });
      
      group.addEventListener('mouseleave', () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(group, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    }
  });

  // Adicionar hover suave em links de navegação
  document.querySelectorAll('nav a, header a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

window.addEventListener('load', setupHoverInteractions);

// Adicionar classe scrolled no header ao fazer scroll
const setupHeaderScroll = () => {
  const header = document.querySelector('header');
  if (!header) return;

  // Verificar se está na página de contato
  const currentPath = window.location.pathname || window.location.href;
  const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page');
  
  // Se estiver na página de contato, remover todas as transições do header
  if (isContatoPage) {
    header.style.transition = 'none';
    header.style.animation = 'none';
    header.querySelectorAll('*').forEach(el => {
      el.style.transition = 'none';
      el.style.animation = 'none';
    });
  }

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
};

window.addEventListener('load', setupHeaderScroll);

// Adicionar animação suave ao carregar a página
window.addEventListener('load', () => {
  // Verificar se está na página de contato
  const currentPath = window.location.pathname || window.location.href;
  const isContatoPage = currentPath.includes('contato') || currentPath.includes('contato.html') || document.querySelector('body')?.classList.contains('contato-page');
  
  // Se estiver na página de contato, não aplicar animação
  if (isContatoPage) {
    document.body.style.opacity = '1';
    return;
  }
  
  if (typeof gsap !== 'undefined') {
    document.body.style.opacity = '0';
    gsap.to(document.body, {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    });
  }
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitSpinner = document.getElementById('submit-spinner');
  const formMessage = document.getElementById('form-message');
  
  // Máscara de telefone
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        if (value.length <= 10) {
          value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
          value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        e.target.value = value;
      }
    });
  }
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validação
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    let isValid = true;
    
    // Limpar mensagens de erro anteriores
    document.querySelectorAll('.error-message').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });
    
    // Validar campos
    Object.keys(data).forEach(key => {
      const input = contactForm.querySelector(`[name="${key}"]`);
      const errorMsg = input?.parentElement.querySelector('.error-message');
      
      if (!data[key] || data[key].trim() === '') {
        isValid = false;
        if (input) {
          input.style.borderColor = '#ef4444';
          if (errorMsg) {
            errorMsg.textContent = 'Este campo é obrigatório';
            errorMsg.classList.remove('hidden');
          }
        }
      } else {
        if (input) {
          input.style.borderColor = '#E5E5E5';
        }
      }
      
      // Validação de email
      if (key === 'email' && data[key]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data[key])) {
          isValid = false;
          if (input) {
            input.style.borderColor = '#ef4444';
            if (errorMsg) {
              errorMsg.textContent = 'E-mail inválido';
              errorMsg.classList.remove('hidden');
            }
          }
        }
      }
    });
    
    if (!isValid) {
      formMessage.className = 'p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600';
      formMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
      formMessage.classList.remove('hidden');
      return;
    }
    
    // Desabilitar botão e mostrar loading
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';
    submitSpinner.classList.remove('hidden');
    formMessage.classList.add('hidden');
    
    try {
      // Simular envio (substituir com endpoint real)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirecionar para WhatsApp com mensagem pré-formatada
      const mensagem = `Olá, meu nome é ${data.nome}.\n\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nAssunto: ${data.assunto}\n\nMensagem:\n${data.mensagem}`;
      const whatsappUrl = `https://wa.me/554499326286?text=${encodeURIComponent(mensagem)}`;
      
      // Mostrar mensagem de sucesso
      formMessage.className = 'p-4 rounded-lg text-sm font-medium bg-green-50 text-green-600';
      formMessage.textContent = 'Redirecionando para WhatsApp...';
      formMessage.classList.remove('hidden');
      
      // Redirecionar após 1 segundo
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        contactForm.reset();
        formMessage.className = 'p-4 rounded-lg text-sm font-medium bg-green-50 text-green-600';
        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      }, 1000);
      
    } catch (error) {
      formMessage.className = 'p-4 rounded-lg text-sm font-medium bg-red-50 text-red-600';
      formMessage.textContent = 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo WhatsApp.';
      formMessage.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = 'Enviar mensagem';
      submitSpinner.classList.add('hidden');
    }
  });
  
  // Limpar erros ao digitar
  contactForm.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', () => {
      const errorMsg = input.parentElement.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.classList.add('hidden');
      }
      input.style.borderColor = '#E5E5E5';
    });
  });
}

// Filtros da galeria de obras
const filterButtons = document.querySelectorAll('.filter-btn');
const obraItems = document.querySelectorAll('.obra-item');

if (filterButtons.length > 0 && obraItems.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Atualizar botões ativos
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (filter === 'all') {
          btn.style.backgroundColor = '#F2F2F2';
          btn.style.color = '#1C1C1C';
          btn.style.border = '1px solid #E5E5E5';
          btn.style.boxShadow = 'none';
        } else {
          btn.style.backgroundColor = '#F2F2F2';
          btn.style.color = '#1C1C1C';
          btn.style.border = '1px solid #E5E5E5';
          btn.style.boxShadow = 'none';
        }
      });
      
      button.classList.add('active');
      button.style.backgroundColor = '#F28C28';
      button.style.color = '#FFFFFF';
      button.style.border = 'none';
      button.style.boxShadow = '0 2px 8px rgba(242, 140, 40, 0.25)';
      
      // Filtrar obras
      obraItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          if (window.gsap) {
            gsap.fromTo(item, 
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
          } else {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }
        } else {
          if (window.gsap) {
            gsap.to(item, {
              opacity: 0,
              y: -20,
              duration: 0.2,
              ease: 'power2.in',
              onComplete: () => {
                item.style.display = 'none';
              }
            });
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
}

// Loading states para imagens
const setupImageLoading = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    const container = img.closest('.image-loading') || img.parentElement;
    
    if (!container.classList.contains('image-loading')) {
      container.classList.add('image-loading');
    }
    
    if (img.complete) {
      img.classList.add('loaded');
      container.classList.remove('image-loading');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
        container.classList.remove('image-loading');
      });
      
      img.addEventListener('error', () => {
        container.classList.remove('image-loading');
        img.style.opacity = '0.5';
      });
    }
  });
};

window.addEventListener('load', setupImageLoading);

