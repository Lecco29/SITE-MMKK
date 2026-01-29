import React from 'react'
import { Link } from 'react-router-dom'

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  href,
  to,
  type = 'button',
  disabled = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:ring-brand-600',
    secondary: 'border-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:ring-brand-600',
    outline: 'border-2 bg-transparent hover:bg-white/10 focus:ring-white'
  }
  
  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-4 text-base'
  }
  
  const variantStyles = {
    primary: { backgroundColor: '#E07B24', boxShadow: '0 4px 14px 0 rgba(224, 123, 36, 0.25)' },
    secondary: { borderColor: '#E07B24', backgroundColor: '#FFFFFF', color: '#E07B24' },
    outline: { borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF' }
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  const styles = variantStyles[variant]
  
  if (to) {
    return (
      <Link 
        to={to}
        className={classes}
        style={styles}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        style={styles}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      className={classes}
      style={styles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

