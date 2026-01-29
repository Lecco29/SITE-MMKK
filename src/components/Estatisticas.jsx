import React from 'react'

function Estatisticas() {
  const stats = [
    { value: '10+', label: 'Anos de mercado' },
    { value: '500+', label: 'Projetos entregues' },
    { value: '100%', label: 'Clientes satisfeitos' },
    { value: '95%', label: 'Entregas no prazo' }
  ]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-orange-500">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{letterSpacing: '-0.02em'}}>{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Estatisticas
