'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  as?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    as,
    ...props 
  }, ref) => {
    const Component = as || 'button'
    
    const baseClasses = [
      // Base styling
      'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'active:scale-95 transform',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      
      // Hover effects
      'hover:shadow-lg hover:-translate-y-0.5',
      'before:absolute before:inset-0 before:rounded-lg before:transition-opacity before:duration-200',
      'before:opacity-0 hover:before:opacity-100',
    ]

    const variants = {
      primary: [
        'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
        'hover:from-blue-700 hover:to-purple-700',
        'focus:ring-blue-500',
        'before:bg-gradient-to-r before:from-blue-700 before:to-purple-700',
        'shadow-blue-500/25'
      ],
      secondary: [
        'bg-gradient-to-r from-gray-800 to-gray-900 text-white',
        'hover:from-gray-900 hover:to-gray-800',
        'focus:ring-gray-500',
        'before:bg-gradient-to-r before:from-gray-900 before:to-gray-800',
        'shadow-gray-500/25'
      ],
      outline: [
        'border-2 border-gray-300 bg-white text-gray-700',
        'hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700',
        'focus:ring-blue-500',
        'before:bg-blue-50',
        'shadow-gray-300/25'
      ],
      ghost: [
        'bg-transparent text-gray-700 hover:bg-gray-100',
        'focus:ring-gray-500',
        'before:bg-gray-100',
        'shadow-none hover:shadow-md'
      ],
      destructive: [
        'bg-gradient-to-r from-red-600 to-red-700 text-white',
        'hover:from-red-700 hover:to-red-800',
        'focus:ring-red-500',
        'before:bg-gradient-to-r before:from-red-700 before:to-red-800',
        'shadow-red-500/25'
      ]
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-4 py-2 text-sm h-10',
      lg: 'px-6 py-3 text-base h-12',
      xl: 'px-8 py-4 text-lg h-14'
    }

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    return (
      <Component
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 className="w-4 h-4 animate-spin" />
        )}
        {leftIcon && !isLoading && leftIcon}
        <span className="relative z-10">{children}</span>
        {rightIcon && !isLoading && rightIcon}
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 bg-white transition-opacity duration-200" />
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button
