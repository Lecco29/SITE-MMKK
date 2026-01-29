import React from 'react'
import { Link } from 'react-router-dom'

function Servicos() {
  const servicos = [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Construção Civil',
      description: 'Do projeto executivo à chave na mão, com controle de custos e qualidade em cada etapa da obra.'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Reformas',
      description: 'Planejamento estratégico para minimizar interferências e entregar ambientes renovados no prazo.'
    },
    {
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      title: 'Sistemas',
      description: 'Instalações elétricas e hidráulicas com segurança, eficiência e facilidade de manutenção futura.'
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: 'Gestão de Obra',
      description: 'Controle total do cronograma, custos e qualidade com relatórios e acompanhamento em tempo real.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./fotos em geral/engenharia-800x563.jpg"
            alt="Serviços MMKK"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Serviços</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
              Soluções
              <span className="inline-block mx-3 px-3 py-1 bg-orange-500" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>completas</span>
              para sua obra
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
              Do projeto ao acabamento, uma equipe especializada para cada etapa do seu empreendimento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
              >
                Solicitar orçamento
              </Link>
              <Link
                to="/obras"
                className="inline-flex items-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-white text-gray-900 transition-all hover:scale-105"
              >
                Ver obras
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">O que fazemos</span>
              <span className="w-8 h-[2px] bg-orange-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{letterSpacing: '-0.02em'}}>
              Nossos serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise completa em construção civil, reformas e gestão de obras
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicos.map((servico, index) => (
              <article key={index} className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-orange-100">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servico.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">{servico.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{servico.description}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 hover:gap-3 transition-all"
            >
              Solicitar orçamento
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Pronto para começar?</span>
            <span className="w-8 h-[2px] bg-orange-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{letterSpacing: '-0.02em'}}>
            Vamos
            <span className="inline-block mx-2 px-3 py-1 bg-orange-500">construir</span>
            juntos
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Entre em contato para um orçamento personalizado e sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
            >
              Falar com especialista
            </Link>
            <a
              href="https://wa.me/554499326286?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-white text-gray-900 transition-all hover:scale-105"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicos
