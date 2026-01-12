import React from 'react'

export function Section({ 
  children, 
  className = '',
  backgroundColor = '#FFFFFF',
  id,
  ariaLabel,
  ...props 
}) {
  const backgroundStyle = backgroundColor.includes('gradient') 
    ? { background: backgroundColor }
    : { backgroundColor }
    
  return (
    <section
      id={id}
      className={`relative py-24 lg:py-28 overflow-hidden ${className}`}
      style={backgroundStyle}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ 
  badge, 
  title, 
  description,
  className = '' 
}) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <p className="text-xs font-semibold uppercase tracking-[0.05em] mb-4" style={{color: '#F28C28', letterSpacing: '0.05em'}}>
          {badge}
        </p>
      )}
      {title && (
        <h2 className="text-3xl font-semibold mb-4 sm:text-4xl lg:text-5xl" style={{color: '#1C1C1C', letterSpacing: '-0.02em', lineHeight: '1.2'}}>
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base max-w-2xl mx-auto leading-[1.6] sm:text-lg" style={{color: '#4A4A4A', letterSpacing: 0}}>
          {description}
        </p>
      )}
    </div>
  )
}

