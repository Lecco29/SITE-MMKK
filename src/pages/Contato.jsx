import React from 'react'

function Contato() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/fotos em geral/akhmad-muzakir-o776uI1UtuQ-unsplash.jpg"
            alt="Contato MMKK"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Fale conosco</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
              Atendimento
              <span className="inline-block mx-3 px-3 py-1 bg-orange-500" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>rápido</span>
              para seu projeto
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
              Orçamentos, dúvidas e visitas técnicas. Preferimos contato direto e ágil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/554499326286?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+554499326286"
                className="inline-flex items-center rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-white text-gray-900 transition-all hover:scale-105"
              >
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Informações</span>
              <span className="w-8 h-[2px] bg-orange-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{letterSpacing: '-0.02em'}}>
              Entre em contato
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha a melhor forma de falar com nossa equipe
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Telefone */}
            <article className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-orange-100">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">Telefone</p>
              <a href="tel:+554499326286" className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors">
                (44) 9932-6286
              </a>
            </article>

            {/* E-mail */}
            <article className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-orange-100">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">E-mail</p>
              <a href="mailto:e.makoto@mmkk.com.br" className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors break-all">
                e.makoto@mmkk.com.br
              </a>
            </article>

            {/* Endereço */}
            <article className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-orange-100">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">Endereço</p>
              <div className="space-y-1">
                <p className="text-lg font-bold text-gray-900">R. Estados Unidos, 1930</p>
                <p className="text-sm text-gray-500">Parque Industrial I - Tupã/SP</p>
                <p className="text-xs text-gray-400">CEP: 17605-253</p>
              </div>
            </article>

            {/* Horário */}
            <article className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-orange-100">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mb-2">Horário</p>
              <p className="text-lg font-bold text-gray-900">Segunda a sexta</p>
              <p className="text-sm text-gray-500">8h às 18h</p>
            </article>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Localização</span>
              <span className="w-8 h-[2px] bg-orange-500"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{letterSpacing: '-0.02em'}}>
              Venha nos
              <span className="inline-block mx-2 px-3 py-1 bg-orange-500">visitar</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              R. Estados Unidos, 1930 - Parque Industrial I - Tupã/SP
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="h-[450px] w-full bg-slate-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.884!2d-50.516!3d-21.933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496b8b8b8b8b8b%3A0xb8b8b8b8b8b8b8b8!2sR.%20Estados%20Unidos%2C%201930%2C%20Parque%20Industrial%20I%2C%20Tup%C3%A3%20-%20SP%2C%2017605-253!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Localização MMKK Construtora"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.+Estados+Unidos,+1930,+Parque+Industrial+I,+Tupã+-+SP,+17605-253"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-orange-500 transition-all hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver rota
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato
