import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ObraGaleria() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)

  const obrasData = {
    maternidade: {
      title: 'Maternidade',
      client: 'Santa Casa de Tupã',
      category: 'Hospitalar',
      description: 'Revitalização completa da maternidade com novos fluxos, salas de atendimento e áreas técnicas modernizadas.',
      folder: 'Maternidade - Santa Casa de Tupã',
      images: [
        'WhatsApp Image 2026-01-07 at 4.13.31 PM.jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.31 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.31 PM(2).jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.32 PM.jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.32 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.32 PM(2).jpeg',
        'WhatsApp Image 2026-01-07 at 4.13.32 PM(3).jpeg'
      ]
    },
    uti: {
      title: 'UTI C',
      client: 'Santa Casa de Tupã',
      category: 'Hospitalar',
      description: 'Ampliação e modernização da UTI com tecnologia de ponta e fluxos otimizados para melhor atendimento.',
      folder: 'UTI C - Santa Casa de Tupã',
      images: [
        'WhatsApp Image 2026-01-07 at 3.54.34 PM.jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.34 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.34 PM(2).jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.34 PM(4).jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.35 PM.jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.35 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 3.54.35 PM(2).jpeg'
      ]
    },
    banco: {
      title: 'Banco de Sangue',
      client: 'Santa Casa de Tupã',
      category: 'Hospitalar',
      description: 'Construção completa do banco de sangue seguindo todas as normas técnicas e de biossegurança.',
      folder: 'Banco de Sangue - Santa Casa de Tupã',
      images: [
        'WhatsApp Image 2026-01-07 at 3.53.11 PM.jpeg',
        'WhatsApp Image 2026-01-07 at 3.53.11 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 3.53.12 PM(1).jpeg',
        'WhatsApp Image 2026-01-07 at 3.53.12 PM(2).jpeg',
        'WhatsApp Image 2026-01-07 at 3.53.12 PM(3).jpeg',
        'WhatsApp Image 2026-01-07 at 3.53.12 PM(4).jpeg'
      ]
    }
  }

  const obra = obrasData[id]

  if (!obra) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Obra não encontrada</h1>
          <Link to="/obras" className="text-orange-500 font-bold hover:underline">
            Voltar para obras
          </Link>
        </div>
      </div>
    )
  }

  const getImageUrl = (imageName) => {
    const folder = obra.folder.replace(/ /g, ' ')
    const file = imageName.replace(/ /g, ' ')
    return `/obras_realizadas/${folder}/${file}`
  }

  const openLightbox = (index) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % obra.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + obra.images.length) % obra.images.length)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(obra.images[0])}
            alt={obra.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/obras"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para obras
            </Link>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                {obra.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" style={{letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>
              {obra.title}
            </h1>
            <p className="text-lg text-orange-400 font-bold mb-4" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
              {obra.client}
            </p>
            <p className="text-base text-white/80 max-w-2xl leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.4)'}}>
              {obra.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Galeria de fotos
              <span className="ml-2 text-base font-normal text-gray-500">({obra.images.length} fotos)</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {obra.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-200"
                style={{ paddingBottom: '100%' }}
              >
                <img
                  src={getImageUrl(image)}
                  alt={`${obra.title} - Foto ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Gostou do nosso trabalho?</p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wider bg-orange-500 text-white transition-all hover:scale-105"
            >
              Solicitar orçamento
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
            {selectedImage + 1} / {obra.images.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={getImageUrl(obra.images[selectedImage])}
            alt={`${obra.title} - Foto ${selectedImage + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default ObraGaleria
