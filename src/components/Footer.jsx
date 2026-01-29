import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="./fotos%20em%20geral/Logo.jpeg" alt="Logo MMKK" className="h-10 w-auto object-contain" />
              <div>
                <p className="text-base font-bold uppercase tracking-wide text-white">MMKK</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Engenharia & Construções</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              11 anos transformando projetos em realidade com qualidade e agilidade. Especialistas em obras hospitalares e industriais.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-orange-500">Navegação</p>
            <nav className="flex flex-col gap-3">
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/">Início</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/servicos">Serviços</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/obras">Obras</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/contato">Contato</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-orange-500">Serviços</p>
            <nav className="flex flex-col gap-3">
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/servicos">Execução de Obras</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/servicos">Reformas</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/servicos">Sistemas</Link>
              <Link className="text-sm text-gray-400 hover:text-white transition-colors" to="/servicos">Gestão de Obra</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-orange-500">Contato</p>
            <div className="flex flex-col gap-3 mb-6">
              <a className="text-sm text-gray-400 hover:text-white transition-colors" href="tel:+554499326286">(44) 9932-6286</a>
              <a className="text-sm text-gray-400 hover:text-white transition-colors" href="mailto:e.makoto@mmkk.com.br">e.makoto@mmkk.com.br</a>
              <p className="text-sm text-gray-400">R. Estados Unidos, 1930<br/>Tupã - SP</p>
            </div>
            <a
              href="https://wa.me/554499326286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-bold transition-all hover:bg-orange-600"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            © {currentYear} MMKK Engenharia & Construções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
