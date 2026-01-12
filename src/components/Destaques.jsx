import React from 'react'

function Destaques() {
  const destaques = [
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Entrega hospitalar com fluxo limpo e conforto - Obra MMKK',
      badge: 'Destaque',
      title: 'Entrega hospitalar com fluxo limpo e conforto.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tecnologia e maquinário de ponta - Equipamentos MMKK',
      badge: 'Equipamentos',
      title: 'Tecnologia e maquinário de ponta.'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Obras em andamento com qualidade - Execução MMKK',
      badge: 'Execução',
      title: 'Obras em andamento com qualidade.'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-28 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}} aria-label="Destaques">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] mb-4" style={{color: '#F28C28', letterSpacing: '0.05em'}}>Destaques</p>
          <h2 className="text-3xl font-semibold mb-4 sm:text-4xl lg:text-5xl" style={{color: '#1C1C1C', letterSpacing: '-0.02em', lineHeight: '1.2'}}>
            Projetos que transformam
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-[1.6] sm:text-lg" style={{color: '#4A4A4A', letterSpacing: 0}}>
            Conheça alguns dos nossos principais trabalhos e diferenciais
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {destaques.map((destaque, index) => (
            <article 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-4 transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={destaque.image} 
                alt={destaque.alt} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.05em] mb-2" style={{color: '#F28C28', letterSpacing: '0.05em'}}>{destaque.badge}</p>
                <p className="text-lg font-semibold text-white leading-[1.3]" style={{letterSpacing: 0}}>{destaque.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destaques

