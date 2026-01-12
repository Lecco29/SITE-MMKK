import React, { memo } from 'react'

const SobreCard = memo(({ icon, title, description, colSpan = '' }) => (
  <article 
    className={`p-10 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2 ${colSpan}`} 
    style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0', willChange: 'transform'}}
    tabIndex={0}
  >
    <div className="inline-flex rounded-xl p-4 mb-6 transition-transform duration-300 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-4 leading-[1.3]" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}>{title}</h3>
    <p className="text-base leading-[1.6]" style={{color: '#4A4A4A', letterSpacing: 0}}>{description}</p>
  </article>
))

SobreCard.displayName = 'SobreCard'

function Sobre() {
  return (
    <section id="sobre" className="relative py-16 lg:py-20 overflow-hidden" style={{background: 'linear-gradient(135deg, #FF7A00 0%, #FF8C42 100%)'}}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.05em] mb-4 sobre-text-white" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>A empresa</p>
              <h2 className="text-3xl font-semibold mb-5 leading-[1.2] sm:text-4xl lg:text-5xl sobre-text-white" style={{color: '#FFFFFF', letterSpacing: '-0.02em'}}>
                Seriedade, compromisso e engenharia completa
              </h2>
              <p className="text-base leading-[1.6] mb-6 sm:text-lg sobre-text-white" style={{color: '#FFFFFF', letterSpacing: 0, opacity: 1}}>
                Inspirada em referências sólidas do mercado, a MMKK entrega obras com planejamento, transparência e equipes especializadas em cada etapa.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.1)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold" style={{color: '#1C1C1C'}}>+40 anos</p>
                  <p className="text-xs mt-0.5" style={{color: '#4A4A4A'}}>de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.1)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="text-sm font-semibold" style={{color: '#1C1C1C'}}>4 segmentos</p>
                  <p className="text-xs mt-0.5" style={{color: '#4A4A4A'}}>de atuação</p>
                </div>
              </div>
            </div>
            <a 
              href="/servicos" 
              className="inline-flex items-center gap-2.5 rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 active:scale-[0.98]" 
              style={{backgroundColor: '#FFFFFF', color: '#1C1C1C', letterSpacing: '0.01em', boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.3)', border: '2px solid #FFFFFF'}}
              aria-label="Conheça todos os nossos serviços"
            >
              Conheça nossos serviços
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <SobreCard 
              icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              title="Interação com o cliente"
              description="Escuta ativa e planejamento conjunto para alinhar expectativas, prazo e investimento."
            />
            <SobreCard 
              icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              title="Prazo de entrega"
              description="Cronogramas detalhados, acompanhamento diário e mitigação de riscos para cumprir datas."
            />
            <SobreCard 
              icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              title="Qualidade reconhecida"
              description="Engenharia de excelência, fornecedores homologados e conformidade com normas técnicas."
              colSpan="sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Sobre)

