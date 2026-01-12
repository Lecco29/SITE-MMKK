import React from 'react'

export function Card({ 
  children, 
  className = '',
  hover = true,
  onClick,
  ...props 
}) {
  const baseStyles = 'p-8 rounded-xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2'
  const hoverStyles = hover ? 'hover:border-opacity-60 hover:shadow-lg hover:-translate-y-1' : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{ borderColor: '#E5E5E5', backgroundColor: '#FFFFFF' }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

