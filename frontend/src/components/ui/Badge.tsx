'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium rounded-full',
      'transition-all duration-200 ease-in-out',
      'whitespace-nowrap'
    ]

    const variants = {
      default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      secondary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      success: 'bg-green-100 text-green-800 hover:bg-green-200',
      warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      error: 'bg-red-100 text-red-800 hover:bg-red-200',
      info: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
    }

    const sizes = {
      sm: 'px-2 py-1 text-xs h-5',
      md: 'px-2.5 py-1 text-sm h-6',
      lg: 'px-3 py-1.5 text-sm h-7'
    }

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    return (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
