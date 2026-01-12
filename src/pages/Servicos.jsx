import React from 'react'
import { Section, SectionHeader } from '../components/ui/Section'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

function Servicos() {
  const servicos = [
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Construção Civil',
      description: 'Do projeto executivo à chave na mão, com controle de custos e qualidade.'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Reformas',
      description: 'Planejamento para reduzir interferências e entregar ambientes prontos.'
    },
    {
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      title: 'Sistemas',
      description: 'Elétrica e hidráulica com segurança, eficiência e facilidade de manutenção.'
    },
    {
      icon: 'M4 5a1 1 0 011-1h4a1 1 0 010 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h4a1 1 0 010 2z',
      title: 'Gestão de Obra',
      description: 'Controle total do cronograma, custos e qualidade em tempo real.'
    }
  ]

  return (
    <Section backgroundColor="#FFFFFF">
      <SectionHeader
        badge="Nossos Serviços"
        title="Soluções completas para sua obra"
        description="Do projeto ao acabamento, uma equipe completa para cada etapa"
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {servicos.map((servico, index) => (
          <Card key={index} hover>
            <div className="inline-flex rounded-xl p-4 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{backgroundColor: '#F8F8F8'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#F28C28'}} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servico.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 leading-tight transition-colors duration-300 group-hover:text-brand-600" style={{color: '#1C1C1C', letterSpacing: '-0.01em'}}>{servico.title}</h3>
            <p className="text-sm leading-[1.7]" style={{color: '#4A4A4A'}}>{servico.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{color: '#F28C28'}}>
              <span>Saiba mais</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button variant="secondary" to="/contato">
          Solicitar orçamento
        </Button>
      </div>
    </Section>
  )
}

export default Servicos

