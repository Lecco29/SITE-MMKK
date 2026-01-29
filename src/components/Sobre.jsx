import React from 'react'
import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Sobre nós</span>
            </div>

            {/* Headline with highlight */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.1]" style={{letterSpacing: '-0.02em'}}>
                Seriedade e
                <span className="inline-block ml-3 px-3 py-1 bg-orange-500 text-white">compromisso</span>
                <br />em cada obra
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed max-w-lg">
              A MMKK entrega obras com planejamento, transparência e equipes especializadas em cada etapa. 10 anos de experiência em projetos hospitalares, corporativos e residenciais.
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">10+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Anos de mercado</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">500+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Projetos entregues</p>
                </div>
              </div>
            </div>

            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 hover:gap-3 transition-all"
            >
              Ver nossos serviços
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="group p-6 rounded-2xl bg-gray-900 text-white transition-all duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Interação com o cliente</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Escuta ativa e planejamento conjunto para alinhar expectativas.</p>
            </article>

            <article className="group p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-orange-200">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prazo de entrega</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Cronogramas detalhados e mitigação de riscos para cumprir datas.</p>
            </article>

            <article className="group p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-orange-200">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualidade garantida</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Fornecedores homologados e conformidade com normas técnicas.</p>
            </article>

            <article className="group p-6 rounded-2xl bg-orange-500 text-white transition-all duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Agilidade</h3>
              <p className="text-sm text-white/80 leading-relaxed">Equipes prontas e processos otimizados para começar rápido.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
