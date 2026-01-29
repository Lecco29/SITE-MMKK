import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  assunto: z.string().min(1, 'Selecione um assunto'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
})

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const mensagem = `Olá, meu nome é ${data.nome}.\n\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nAssunto: ${data.assunto}\n\nMensagem:\n${data.mensagem}`
      const whatsappUrl = `https://wa.me/5544999326286?text=${encodeURIComponent(mensagem)}`
      
      setSubmitStatus({ type: 'success', message: 'Redirecionando para WhatsApp...' })
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        reset()
        setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' })
      }, 1000)
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo WhatsApp.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label htmlFor="nome" className="block text-sm font-semibold mb-2" style={{color: '#1C1C1C'}}>
          Nome completo *
        </label>
        <input
          {...register('nome')}
          type="text"
          id="nome"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent ${
            errors.nome ? 'border-red-500' : ''
          }`}
          style={{borderColor: errors.nome ? '#ef4444' : '#E5E5E5', backgroundColor: '#FFFFFF', color: '#1C1C1C'}}
          placeholder="Seu nome"
        />
        {errors.nome && (
          <span className="text-sm text-red-600 mt-1 block">{errors.nome.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{color: '#1C1C1C'}}>
          E-mail *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent ${
            errors.email ? 'border-red-500' : ''
          }`}
          style={{borderColor: errors.email ? '#ef4444' : '#E5E5E5', backgroundColor: '#FFFFFF', color: '#1C1C1C'}}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <span className="text-sm text-red-600 mt-1 block">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-semibold mb-2" style={{color: '#1C1C1C'}}>
          Telefone *
        </label>
        <input
          {...register('telefone')}
          type="tel"
          id="telefone"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent ${
            errors.telefone ? 'border-red-500' : ''
          }`}
          style={{borderColor: errors.telefone ? '#ef4444' : '#E5E5E5', backgroundColor: '#FFFFFF', color: '#1C1C1C'}}
          placeholder="(44) 99999-9999"
          onChange={(e) => {
            e.target.value = formatPhone(e.target.value)
          }}
        />
        {errors.telefone && (
          <span className="text-sm text-red-600 mt-1 block">{errors.telefone.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="assunto" className="block text-sm font-semibold mb-2" style={{color: '#1C1C1C'}}>
          Assunto *
        </label>
        <select
          {...register('assunto')}
          id="assunto"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent ${
            errors.assunto ? 'border-red-500' : ''
          }`}
          style={{borderColor: errors.assunto ? '#ef4444' : '#E5E5E5', backgroundColor: '#FFFFFF', color: '#1C1C1C'}}
        >
          <option value="">Selecione um assunto</option>
          <option value="orcamento">Solicitar orçamento</option>
          <option value="duvida">Dúvida sobre serviços</option>
          <option value="visita">Agendar visita técnica</option>
          <option value="outro">Outro</option>
        </select>
        {errors.assunto && (
          <span className="text-sm text-red-600 mt-1 block">{errors.assunto.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-semibold mb-2" style={{color: '#1C1C1C'}}>
          Mensagem *
        </label>
        <textarea
          {...register('mensagem')}
          id="mensagem"
          rows="5"
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent resize-none ${
            errors.mensagem ? 'border-red-500' : ''
          }`}
          style={{borderColor: errors.mensagem ? '#ef4444' : '#E5E5E5', backgroundColor: '#FFFFFF', color: '#1C1C1C'}}
          placeholder="Descreva seu projeto ou dúvida..."
        />
        {errors.mensagem && (
          <span className="text-sm text-red-600 mt-1 block">{errors.mensagem.message}</span>
        )}
      </div>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg text-sm font-medium ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-600'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{backgroundColor: '#F28C28', letterSpacing: '0.01em', boxShadow: '0 4px 14px 0 rgba(242, 140, 40, 0.25)'}}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar mensagem'
        )}
      </button>
    </form>
  )
}

export default ContactForm

