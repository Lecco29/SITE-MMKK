import React, { useMemo } from 'react'

function Servicos() {
  const servicos = useMemo(() => [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Construção Civil',
      description: 'Do projeto executivo à chave na mão, com controle de custos e qualidade.'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Reformas',
      description: 'Planejamento para reduzir interferências e entregar ambientes prontos.'
    },
    {
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      title: 'Sistemas',
      description: 'Elétrica e hidráulica com segurança, eficiência e facilidade de manutenção.'
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: 'Gestão de Obra',
      description: 'Controle total do cronograma, custos e qualidade em tempo real.'
    }
  ], [])

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.05em] mb-6" style={{color: '#F28C28', letterSpacing: '0.05em'}}>Nossos Serviços</p>
          <h2 className="text-3xl font-semibold mb-6 leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#1C1C1C', letterSpacing: '-0.02em'}}>
            Soluções completas para sua obra
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-[1.6] sm:text-lg" style={{color: '#4A4A4A', letterSpacing: 0}}>
            Do projeto ao acabamento, uma equipe completa para cada etapa
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, index) => (
            <a 
              key={index}
              href="/servicos" 
              className="group flex flex-col h-full p-10 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2" 
              style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0', minHeight: '320px', willChange: 'transform'}}
              aria-label={`Saiba mais sobre ${servico.title}`}
              tabIndex={0}
            >
              <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servico.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 leading-[1.3] transition-colors duration-300 group-hover:text-brand-600" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}>{servico.title}</h3>
              <p className="text-base leading-[1.6] mb-6 flex-1" style={{color: '#4A4A4A', letterSpacing: 0}}>{servico.description}</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{color: '#F28C28'}}>
                <span>Saiba mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <a 
            href="/servicos" 
            className="group inline-flex items-center gap-2.5 rounded-lg border-2 px-10 py-4 text-base font-semibold transition-all duration-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" 
            style={{borderColor: '#F28C28', backgroundColor: '#FFFFFF', color: '#F28C28', letterSpacing: '0.01em'}}
            aria-label="Ver todos os serviços oferecidos pela MMKK"
          >
            Ver todos os serviços
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default memo(Servicos)

