import React, { memo } from 'react'

const Contato = memo(() => {
  return (
    <section id="contato" className="relative py-12 lg:py-16 overflow-hidden" style={{background: 'linear-gradient(135deg, #FF7A00 0%, #FF8C42 100%)'}}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.05em] mb-3 contato-text-white" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>Contato</p>
          <h2 className="text-2xl font-semibold mb-3 leading-[1.2] sm:text-3xl lg:text-4xl contato-text-white" style={{color: '#FFFFFF', letterSpacing: '-0.02em'}}>
            Vamos falar do seu projeto?
          </h2>
          <p className="text-sm max-w-2xl mx-auto leading-[1.5] sm:text-base contato-text-white" style={{color: '#FFFFFF', letterSpacing: 0, opacity: 1}}>
            Envie uma mensagem ou ligue para agendarmos uma visita técnica.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4">
            <div className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0', willChange: 'transform'}}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg p-3 transition-transform duration-300 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.05em] mb-2" style={{color: '#F28C28', letterSpacing: '0.05em'}}>Telefone</p>
                  <a href="tel:+554499326286" className="text-xl font-semibold transition-all duration-300 hover:text-brand-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}} aria-label="Ligar para (44) 9932-6286">
                    (44) 9932-6286
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2" style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0', willChange: 'transform'}}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg p-3 transition-transform duration-300 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.05em] mb-2" style={{color: '#F28C28', letterSpacing: '0.05em'}}>E-mail</p>
                  <a href="mailto:contato@mmkk.com.br" className="text-lg font-semibold transition-all duration-300 hover:text-brand-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}} aria-label="Enviar e-mail para contato@mmkk.com.br">
                    contato@mmkk.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0', willChange: 'transform'}}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg p-3 transition-transform duration-300 group-hover:scale-110" style={{background: 'linear-gradient(135deg, #FFF5E8 0%, #FFEED9 100%)', border: '1px solid rgba(242, 140, 40, 0.15)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.05em] mb-2" style={{color: '#F28C28', letterSpacing: '0.05em'}}>Endereço</p>
                  <p className="text-base font-semibold mb-1" style={{color: '#1C1C1C'}}>R. Estados Unidos, 1930</p>
                  <p className="text-sm leading-relaxed" style={{color: '#4A4A4A'}}>Parque Industrial I - Tupã/SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl transition-all duration-300 hover:shadow-xl" style={{backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #E0E0E0'}}>
            <div className="mb-6">
              <div className="inline-flex rounded-xl p-4 mb-5 transition-transform duration-300 hover:scale-110" style={{background: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)', border: '1px solid rgba(37, 211, 102, 0.2)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" style={{color: '#25D366'}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 leading-tight" style={{color: '#1C1C1C', letterSpacing: '-0.02em'}}>Fale agora pelo WhatsApp</h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#4A4A4A', letterSpacing: '-0.01em'}}>Atendimento imediato para orçamentos e dúvidas.</p>
            </div>
            <a
              href="https://wa.me/554499326286?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20projeto."
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:scale-[0.98]"
              style={{background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)', letterSpacing: '0.01em', boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.4)'}}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar via WhatsApp com MMKK Engenharia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar via WhatsApp
            </a>
            <p className="mt-5 text-sm text-center leading-relaxed" style={{color: '#1C1C1C'}}>
              <span className="font-semibold" style={{color: '#1C1C1C'}}>(44) 9932-6286</span> <span style={{color: '#1C1C1C'}}>· Segunda a sexta, horário comercial</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

Contato.displayName = 'Contato'

export default Contato

