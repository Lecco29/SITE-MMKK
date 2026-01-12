import React from 'react'
import { Section } from '../components/ui/Section'

function Contato() {
  return (
    <>
      {/* Hero Section */}
      <section className="contato-hero-section relative isolate overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="./fotos em geral/akhmad-muzakir-o776uI1UtuQ-unsplash.jpg" 
            alt="Contato MMKK" 
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-24 lg:px-8 lg:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{color: '#FFFFFF', letterSpacing: '0.2em'}}>Fale Conosco</p>
          <h1 className="text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#FFFFFF', letterSpacing: '-0.02em'}}>
            Atendimento rápido para o seu projeto
          </h1>
          <p className="text-base leading-[1.6] max-w-3xl sm:text-lg" style={{color: '#FFFFFF', letterSpacing: 0}}>
            Orçamentos, dúvidas e visitas técnicas. Preferimos contato direto e ágil.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://wa.me/554499326286?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20projeto." 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" 
              style={{backgroundColor: '#F28C28', letterSpacing: '0.01em', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
              aria-label="Falar via WhatsApp com MMKK Engenharia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar via WhatsApp
            </a>
            <a 
              href="tel:+554499326286" 
              className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]" 
              style={{borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.08)', letterSpacing: '0.01em'}}
            >
              Ligar agora
            </a>
          </div>
        </div>
      </section>

      <Section backgroundColor="#FFFFFF" id="contato">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Telefone */}
          <article className="group p-8 rounded-xl border transition-all duration-300 hover:border-opacity-60 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{borderColor: '#E5E5E5', backgroundColor: '#FFFFFF'}}>
            <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3" style={{color: '#F28C28', letterSpacing: '0.15em'}}>Telefone</p>
            <a href="tel:+554499326286" 
               className="text-xl font-semibold transition-colors duration-200 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded block" 
               style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}
               aria-label="Ligar para (44) 9932-6286">
              (44) 9932-6286
            </a>
          </article>

          {/* E-mail */}
          <article className="group p-8 rounded-xl border transition-all duration-300 hover:border-opacity-60 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{borderColor: '#E5E5E5', backgroundColor: '#FFFFFF'}}>
            <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3" style={{color: '#F28C28', letterSpacing: '0.15em'}}>E-mail</p>
            <a href="mailto:contato@mmkk.com.br" 
               className="text-base font-semibold transition-colors duration-200 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded block break-all" 
               style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}
               aria-label="Enviar e-mail para contato@mmkk.com.br">
              contato@mmkk.com.br
            </a>
          </article>

          {/* Endereço */}
          <article className="group p-8 rounded-xl border transition-all duration-300 hover:border-opacity-60 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{borderColor: '#E5E5E5', backgroundColor: '#FFFFFF'}}>
            <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3" style={{color: '#F28C28', letterSpacing: '0.15em'}}>Endereço</p>
            <div className="space-y-1">
              <p className="text-base font-semibold leading-tight" style={{color: '#1C1C1C'}}>R. Estados Unidos, 1930</p>
              <p className="text-sm leading-relaxed" style={{color: '#4A4A4A'}}>Parque Industrial I</p>
              <p className="text-sm leading-relaxed" style={{color: '#4A4A4A'}}>Tupã - SP</p>
              <p className="text-xs mt-2" style={{color: '#9B9B9B'}}>CEP: 17605-253</p>
            </div>
          </article>

          {/* Horário */}
          <article className="group p-8 rounded-xl border transition-all duration-300 hover:border-opacity-60 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{borderColor: '#E5E5E5', backgroundColor: '#FFFFFF'}}>
            <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] mb-3" style={{color: '#F28C28', letterSpacing: '0.15em'}}>Horário</p>
            <p className="text-base font-semibold mb-1" style={{color: '#1C1C1C'}}>Segunda a sexta-feira</p>
            <p className="text-sm leading-relaxed" style={{color: '#4A4A4A'}}>8h às 18h</p>
          </article>
        </div>

      </Section>

      <Section backgroundColor="#FFFFFF">
        <div className="overflow-hidden rounded-2xl border-2 shadow-2xl transition-all duration-300 hover:shadow-3xl" style={{borderColor: 'rgba(229, 229, 229, 0.6)'}}>
          <div className="bg-gradient-to-r px-8 py-8" style={{background: 'linear-gradient(to right, #F28C28, #E67E22)'}}>
            <h2 className="text-2xl font-semibold text-white mb-3 leading-tight" style={{letterSpacing: '-0.01em'}}>Nossa Localização</h2>
            <p className="text-base leading-relaxed text-white/95">R. Estados Unidos, 1930 - Parque Industrial I - Tupã/SP</p>
          </div>
          <div className="h-[500px] w-full bg-slate-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.884!2d-50.516!3d-21.933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496b8b8b8b8b8b%3A0xb8b8b8b8b8b8b8b8!2sR.%20Estados%20Unidos%2C%201930%2C%20Parque%20Industrial%20I%2C%20Tup%C3%A3%20-%20SP%2C%2017605-253!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Localização MMKK Construtora"
              aria-label="Mapa mostrando a localização da MMKK Engenharia"
            />
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Estados+Unidos,+1930,+Parque+Industrial+I,+Tupã+-+SP,+17605-253"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{backgroundColor: '#F28C28', boxShadow: '0 4px 12px rgba(242, 140, 40, 0.3)'}}
              aria-label="Abrir rota no Google Maps"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Ver rota
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Contato

