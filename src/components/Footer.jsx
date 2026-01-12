import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'

const Footer = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="border-t" style={{borderColor: '#404040', backgroundColor: '#2F2F2F'}} role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="./fotos%20em%20geral/Logo.jpeg" alt="Logo MMKK Engenharia e Construções" className="h-10 w-auto object-contain" loading="lazy" />
              <div>
                <p className="text-base font-semibold leading-tight" style={{color: '#FFFFFF'}}>MMKK</p>
                <p className="text-xs leading-tight" style={{color: '#FFFFFF'}}>Engenharia & Construções</p>
              </div>
            </div>
            <p className="text-sm max-w-md leading-relaxed" style={{color: '#FFFFFF', lineHeight: '1.6'}}>
              Engenharia, gestão de obras e entregas com excelência. Mais de 40 anos transformando projetos em realidade.
            </p>
          </div>
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] mb-3" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>Navegação</p>
            <nav className="flex flex-col gap-2" aria-label="Navegação do rodapé">
              <Link to="/" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Início</Link>
              <Link to="/servicos" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Serviços</Link>
              <Link to="/obras" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Obras</Link>
              <Link to="/contato" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Contato</Link>
            </nav>
          </div>
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] mb-3" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>Serviços</p>
            <nav className="flex flex-col gap-2" aria-label="Serviços oferecidos">
              <Link to="/servicos" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Construção Civil</Link>
              <Link to="/servicos" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Reformas</Link>
              <Link to="/servicos" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Sistemas</Link>
              <Link to="/servicos" className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}}>Gestão</Link>
            </nav>
          </div>
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.05em] mb-3" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>Contato</p>
            <div className="flex flex-col gap-2 mb-4">
              <a className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}} href="tel:+554499326286" aria-label="Ligar para (44) 9932-6286">
                (44) 9932-6286
              </a>
              <a className="text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 hover:text-brand-600 transition-colors" style={{color: '#FFFFFF', lineHeight: '1.5', display: 'block'}} href="mailto:contato@mmkk.com.br" aria-label="Enviar e-mail para contato@mmkk.com.br">
                contato@mmkk.com.br
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.05em] mb-2" style={{color: '#FFFFFF', letterSpacing: '0.05em'}}>Redes Sociais</p>
              <a 
                href="https://wa.me/554499326286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" 
                style={{backgroundColor: '#25D366', color: '#FFFFFF'}}
                aria-label="Falar via WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a9.94 9.94 0 0 0-7.07 2.93A9.94 9.94 0 0 0 2 12c0 1.7.43 3.34 1.25 4.79L2 22l5.34-1.21A10.02 10.02 0 0 0 12 22c2.67 0 5.18-1.04 7.07-2.93A9.94 9.94 0 0 0 22 12c0-2.67-1.04-5.18-2.93-7.07A9.94 9.94 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-3" style={{borderColor: '#404040'}}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-sm leading-relaxed" style={{color: '#FFFFFF'}}>
            © MMKK Engenharia & Construções {currentYear}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer

