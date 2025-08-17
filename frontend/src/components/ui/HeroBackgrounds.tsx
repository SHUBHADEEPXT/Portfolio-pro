// src/components/ui/HeroBackgrounds.tsx
// Pure background placeholders without text (for hero sections)

import React from 'react'

interface HeroBackgroundProps {
  width: number
  height: number
  className?: string
}

// DevOps Automation Hero Background
export function DevOpsHeroBackground({ width, height, className = "" }: HeroBackgroundProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-blue-600 to-indigo-800 ${className}`}
      style={{ width, height }}
    >
      {/* Subtle grid pattern - no text */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements only */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-blue-300/30 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-16 w-3 h-3 bg-indigo-300/20 rounded-full"></div>
      <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/10 rounded-full"></div>
    </div>
  )
}

// Kubernetes Hero Background  
export function KubernetesHeroBackground({ width, height, className = "" }: HeroBackgroundProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-indigo-600 to-purple-700 ${className}`}
      style={{ width, height }}
    >
      {/* Container pattern - no text */}
      <div className="absolute inset-0 p-12 opacity-5">
        <div className="grid grid-cols-6 grid-rows-4 gap-3 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-white/30 rounded-sm"></div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-12 left-12 w-3 h-3 bg-purple-300/20 rounded-full"></div>
      <div className="absolute bottom-12 right-12 w-4 h-4 bg-indigo-300/30 rounded-full animate-pulse"></div>
    </div>
  )
}

// CI/CD Pipeline Hero Background
export function PipelineHeroBackground({ width, height, className = "" }: HeroBackgroundProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-purple-600 to-blue-700 ${className}`}
      style={{ width, height }}
    >
      {/* Pipeline flow pattern - no text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-8">
        <div className="flex items-center space-x-12">
          <div className="w-6 h-6 border border-white/30 rounded-full"></div>
          <div className="w-16 h-0.5 bg-white/20"></div>
          <div className="w-6 h-6 border border-white/30 rounded-full"></div>
          <div className="w-16 h-0.5 bg-white/20"></div>
          <div className="w-6 h-6 border border-white/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Subtle decorations */}
      <div className="absolute top-6 left-6 w-2 h-2 bg-blue-300/20 rounded-full"></div>
      <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-300/30 rounded-full"></div>
    </div>
  )
}

