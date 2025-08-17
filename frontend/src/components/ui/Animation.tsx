'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: ''
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? '0ms' : `${delay * 1000}ms`
      }}
    >
      {children}
    </div>
  )
}

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return '-translate-x-full'
      case 'right': return 'translate-x-full'
      case 'up': return '-translate-y-full'
      case 'down': return 'translate-y-full'
      default: return '-translate-x-full'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-transform ease-out',
        isVisible ? 'translate-x-0 translate-y-0' : getInitialTransform(),
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? '0ms' : `${delay * 1000}ms`
      }}
    >
      {children}
    </div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  scale?: number
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.4,
  className = '',
  scale = 0.8
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? 'opacity-100 scale-100' : `opacity-0 scale-[${scale}]`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: isVisible ? '0ms' : `${delay * 1000}ms`
      }}
    >
      {children}
    </div>
  )
}

// Staggered animation container
interface StaggerContainerProps {
  children: React.ReactNode
  stagger?: number
  className?: string
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  className = ''
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeIn delay={index * stagger} key={index}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

// Loading spinner
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn('animate-spin rounded-full border-2 border-gray-300 border-t-blue-600', sizes[size], className)} />
  )
}
