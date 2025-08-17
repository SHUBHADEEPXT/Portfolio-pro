'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'ghost'
  interactive?: boolean
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', interactive = false, children, ...props }, ref) => {
    const baseClasses = [
      'rounded-xl transition-all duration-200 ease-in-out',
      interactive && [
        'cursor-pointer hover:shadow-lg hover:-translate-y-1',
        'active:scale-98 transform',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      ]
    ]

    const variants = {
      default: 'bg-white shadow-md border border-gray-200',
      elevated: 'bg-white shadow-lg border-0',
      outline: 'bg-transparent border-2 border-gray-300',
      ghost: 'bg-gray-50 border-0 shadow-none hover:bg-gray-100'
    }

    const classes = cn(
      baseClasses,
      variants[variant],
      className
    )

    return (
      <div
        ref={ref}
        className={classes}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card sub-components
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pb-4', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-4 flex items-center', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-bold leading-none tracking-tight text-gray-900', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-gray-600 mt-2', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription }
