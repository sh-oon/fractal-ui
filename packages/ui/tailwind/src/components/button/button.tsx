import React from 'react'
import { ButtonProps } from './button.types'
import { variantClasses, sizeClasses } from './button.variants'

export const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer rounded font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className} bg-primary-600`}
      {...props}
    >
      {children}
    </button>
  )
}
