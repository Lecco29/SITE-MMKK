import React from 'react'
import { Link } from 'react-router-dom'

function Servicos() {
  const servicos = [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Execução de Obras',
      description: 'Qualidade e agilidade na execução de obras hospitalares e industriais.'
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
  ]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-50">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Serviços</span>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.2] mb-4" style={{letterSpacing: '-0.02em'}}>
            <span className="block">Soluções <span className="inline-block px-3 py-1 bg-orange-500 text-white">completas</span></span>
            <span className="block">para sua obra</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Do projeto ao acabamento, uma equipe completa para cada etapa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicos.map((servico, index) => (
            <Link
              key={index}
              to="/servicos"
              className="group flex flex-col h-full p-6 rounded-2xl transition-all duration-300 hover:shadow-xl bg-white border border-gray-100 hover:border-orange-200"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servico.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">{servico.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{servico.description}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Saiba mais</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 hover:gap-3 transition-all"
          >
            Ver todos os serviços
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Servicos
