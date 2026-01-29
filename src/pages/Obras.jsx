import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Obras() {
  const [filter, setFilter] = useState('all')

  const obras = [
    {
      id: 'maternidade',
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      image: '/obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
      category: 'hospitalar'
    },
    {
      id: 'uti',
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados para melhor atendimento.',
      image: '/obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
      category: 'hospitalar'
    },
    {
      id: 'banco',
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      description: 'Construção completa do banco de sangue seguindo todas as normas técnicas e de biossegurança.',
      image: '/obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
      category: 'hospitalar'
    }
  ]

  const filteredObras = filter === 'all' ? obras : obras.filter(obra => obra.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./fotos em geral/anastasiya-badun-0wljZ9KWNzE-unsplash.jpg"
            alt="Obras MMKK"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Portfólio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
              Obras
              <span className="inline-block mx-3 px-3 py-1 bg-orange-500" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>realizadas</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
              Execução de obras hospitalares e industriais com excelência, segurança e transparência.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
              >
                Quero um orçamento
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-white text-gray-900 transition-all hover:scale-105"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Obras Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filtros */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="text-sm font-medium text-gray-500">Filtrar:</span>
            {['all', 'hospitalar', 'industrial'].map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === opt
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {opt === 'all' ? 'Todas' : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredObras.map((obra) => (
              <article key={obra.id} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={obra.image}
                    alt={obra.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                      {obra.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">{obra.client}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{obra.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{obra.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/obras/${obra.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:gap-3 transition-all"
                    >
                      Ver galeria
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
            >
              Quero um orçamento
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Obras
