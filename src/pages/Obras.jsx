import React, { useState } from 'react'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

function Obras() {
  const [filter, setFilter] = useState('all')

  const obras = [
    {
      id: 'maternidade',
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      image: './obras_realizadas/Maternidade%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%204.13.31%20PM.jpeg',
      category: 'hospitalar',
      gallery: 'maternidade'
    },
    {
      id: 'uti',
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados.',
      image: './obras_realizadas/UTI%20C%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.54.34%20PM.jpeg',
      category: 'hospitalar',
      gallery: 'uti'
    },
    {
      id: 'banco',
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      description: 'Construção completa do banco de sangue com todas as normas técnicas e de biossegurança.',
      image: './obras_realizadas/Banco%20de%20Sangue%20-%20Santa%20Casa%20de%20Tupã/WhatsApp%20Image%202026-01-07%20at%203.53.11%20PM.jpeg',
      category: 'hospitalar',
      gallery: 'banco'
    }
  ]

  const filteredObras = filter === 'all' 
    ? obras 
    : obras.filter(obra => obra.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="obras-hero-section relative isolate overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="./fotos em geral/anastasiya-badun-0wljZ9KWNzE-unsplash.jpg" 
            alt="Obras realizadas MMKK" 
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-24 lg:px-8 lg:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{color: '#FFFFFF', letterSpacing: '0.2em'}}>Obras Realizadas</p>
          <h1 className="text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#FFFFFF', letterSpacing: '-0.02em'}}>
            Portfólio de entregas relevantes.
          </h1>
          <p className="text-base leading-[1.6] max-w-3xl sm:text-lg" style={{color: '#FFFFFF', letterSpacing: 0}}>
            Projetos hospitalares, corporativos, industriais e residenciais com gestão completa, segurança e transparência.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="/contato" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98]" 
              style={{backgroundColor: '#F28C28', letterSpacing: '0.01em', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
              aria-label="Solicitar orçamento"
            >
              Quero um orçamento
            </a>
            <a 
              href="/servicos" 
              className="inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.98]" 
              style={{borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.08)', letterSpacing: '0.01em'}}
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      <Section backgroundColor="#FFFFFF" id="obras">
        
        {/* Filtros */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <p className="text-sm font-semibold" style={{color: '#1C1C1C'}}>Filtrar por:</p>
          {['all', 'hospitalar', 'corporativo', 'residencial'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${
                filter === filterOption
                  ? 'text-white'
                  : 'text-gray-900 border'
              }`}
              style={
                filter === filterOption
                  ? { backgroundColor: '#F28C28', boxShadow: '0 2px 8px rgba(242, 140, 40, 0.25)' }
                  : { backgroundColor: '#FFFFFF', borderColor: '#E5E5E5' }
              }
            >
              {filterOption === 'all' ? 'Todas' : filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de obras */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredObras.map((obra) => (
            <Card key={obra.id} hover className="group overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={obra.image}
                  alt={obra.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded"
                  onClick={() => window.openGallery?.(obra.gallery)}
                  aria-label={`Abrir galeria de fotos da ${obra.title}`}
                >
                  <span className="rounded-lg bg-white/95 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-transform duration-300 hover:scale-105" style={{color: '#1C1C1C'}}>
                    Ver galeria
                  </span>
                </button>
              </div>
              <h3 className="text-xl font-semibold leading-tight mb-2" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}>
                {obra.title}
              </h3>
              <p className="text-sm font-medium mb-4" style={{color: '#F28C28'}}>
                {obra.client}
              </p>
              <p className="text-sm leading-[1.7] mb-6" style={{color: '#4A4A4A'}}>
                {obra.description}
              </p>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded"
                style={{color: '#F28C28'}}
                onClick={() => window.openGallery?.(obra.gallery)}
                aria-label={`Ver todas as fotos da ${obra.title}`}
              >
                Ver todas as fotos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" to="/contato">
            Quero um orçamento
          </Button>
        </div>
      </Section>
    </>
  )
}

export default Obras

