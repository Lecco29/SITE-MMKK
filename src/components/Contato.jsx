import React from 'react'

function Contato() {
  return (
    <section id="contato" className="relative py-20 lg:py-28 overflow-hidden bg-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Contato</span>
            </div>

            {/* Headline with highlight - following reference style */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1]" style={{letterSpacing: '-0.02em'}}>
                Vamos
                <span className="inline-block ml-3 px-3 py-1 bg-orange-500 text-white">conversar</span>
                <br />sobre seu projeto?
              </h2>
            </div>

            <p className="text-base text-gray-400 leading-relaxed max-w-lg">
              Orçamentos, dúvidas e visitas técnicas. Preferimos contato direto e ágil. Entre em contato e transforme suas ideias em realidade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/554499326286?text=Ola,%20gostaria%20de%20falar%20sobre%20um%20projeto."
                className="group inline-flex items-center gap-3 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 bg-orange-500 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+554499326286"
                className="inline-flex items-center gap-3 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-gray-900 border border-white/20 text-white bg-white/5"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar agora
              </a>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="tel:+554499326286" className="group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-orange-500/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-orange-500">Telefone</p>
              <p className="text-lg font-bold text-white">(44) 9932-6286</p>
            </a>

            <a href="mailto:e.makoto@mmkk.com.br" className="group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-orange-500/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-orange-500">E-mail</p>
              <p className="text-base font-bold text-white break-all">e.makoto@mmkk.com.br</p>
            </a>

            <a href="https://www.google.com/maps/dir/?api=1&destination=R.+Estados+Unidos,+1930,+Parque+Industrial+I,+Tupa+-+SP,+17605-253" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-orange-500/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-orange-500">Endereço</p>
              <p className="text-base font-bold text-white">R. Estados Unidos, 1930</p>
              <p className="text-sm text-gray-400">Tupã - SP</p>
            </a>

            <div className="p-6 rounded-2xl bg-orange-500 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2 text-white/80">Horário</p>
              <p className="text-base font-bold">Segunda a Sexta</p>
              <p className="text-sm text-white/80">8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
