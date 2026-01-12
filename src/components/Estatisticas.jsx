import React from 'react'

function Estatisticas() {
  const estatisticas = [
    { valor: '+40', label: 'Anos de experiência' },
    { valor: '500+', label: 'Obras entregues' },
    { valor: '100%', label: 'Satisfação do cliente' },
    { valor: '95%', label: 'No prazo' }
  ]

  return (
    <section className="relative py-24 lg:py-28 overflow-hidden" style={{background: 'linear-gradient(135deg, #FF7A00 0%, #FF8C42 100%)'}} aria-label="Estatísticas e resultados">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-6 leading-[1.2] sm:text-4xl lg:text-5xl" style={{color: '#FFFFFF', letterSpacing: '-0.02em', fontWeight: 600}}>
            Mais de 40 anos de experiência em engenharia
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-[1.7] sm:text-lg" style={{color: '#FFFFFF', letterSpacing: 0, opacity: 0.95}}>
            Trajetória sólida construída com excelência, compromisso e resultados que transformam
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4" role="list">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center" role="listitem">
              <p 
                className="text-4xl font-semibold mb-3 sm:text-5xl lg:text-6xl transition-all duration-500 hover:scale-110" 
                style={{color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: '1.1'}}
                aria-label={stat.label}
              >
                <span aria-hidden="true">{stat.valor}</span>
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.05em] leading-[1.5]" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Estatisticas

