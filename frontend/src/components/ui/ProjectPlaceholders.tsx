// src/components/ui/ProjectPlaceholders.tsx
// Beautiful placeholders that match your portfolio theme

import React from 'react'
import { Monitor, Code, Server, Database, Cloud, GitBranch, Shield, Zap } from 'lucide-react'

interface ProjectImageProps {
  width: number
  height: number
  className?: string
}

// Dashboard/Monitoring Placeholder
export function DashboardPlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <Monitor className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">Dashboard View</div>
        <div className="text-sm opacity-75">Real-time Monitoring</div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-12 w-2 h-2 bg-blue-300 rounded-full"></div>
    </div>
  )
}

// Pipeline Placeholder  
export function PipelinePlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Pipeline flow lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="flex items-center space-x-8">
          <div className="w-8 h-8 border-2 border-white rounded-full"></div>
          <div className="w-12 h-0.5 bg-white"></div>
          <div className="w-8 h-8 border-2 border-white rounded-full"></div>
          <div className="w-12 h-0.5 bg-white"></div>
          <div className="w-8 h-8 border-2 border-white rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <GitBranch className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">CI/CD Pipeline</div>
        <div className="text-sm opacity-75">Automated Workflow</div>
      </div>
    </div>
  )
}

// Architecture Diagram Placeholder
export function ArchitecturePlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Architecture boxes */}
      <div className="absolute inset-0 p-8 opacity-20">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
          <div className="border border-white rounded"></div>
          <div className="border border-white rounded"></div>
          <div className="border border-white rounded"></div>
          <div className="border border-white rounded col-span-2"></div>
          <div className="border border-white rounded"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <Server className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">System Architecture</div>
        <div className="text-sm opacity-75">Component Overview</div>
      </div>
    </div>
  )
}

// Kubernetes/Container Placeholder
export function KubernetesPlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Container grid */}
      <div className="absolute inset-0 p-6 opacity-15">
        <div className="grid grid-cols-4 grid-rows-3 gap-2 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-white/60 rounded-sm"></div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <Cloud className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">Kubernetes Cluster</div>
        <div className="text-sm opacity-75">Container Orchestration</div>
      </div>
    </div>
  )
}

// Security/Monitoring Placeholder
export function SecurityPlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Security pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-4 h-4 border-2 border-white rotate-45"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-white rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <Shield className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">Security Monitor</div>
        <div className="text-sm opacity-75">Threat Detection</div>
      </div>
    </div>
  )
}

// Performance/Analytics Placeholder
export function PerformancePlaceholder({ width, height, className = "" }: ProjectImageProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Chart lines */}
      <div className="absolute inset-0 p-8 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 50">
          <polyline 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            points="0,40 20,30 40,20 60,25 80,10 100,15"
          />
          <polyline 
            fill="none" 
            stroke="white" 
            strokeWidth="1.5" 
            points="0,45 20,35 40,30 60,35 80,25 100,30"
            opacity="0.7"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="text-center text-white z-10">
        <Zap className="w-12 h-12 mx-auto mb-3 opacity-90" />
        <div className="text-lg font-semibold mb-1">Performance Metrics</div>
        <div className="text-sm opacity-75">Real-time Analytics</div>
      </div>
    </div>
  )
}

// Tech Stack Icon Placeholder (for sidebar)
export function TechIconPlaceholder({ tech, size = 32 }: { tech: string; size?: number }) {
  const getIconColor = (techName: string) => {
    const colors: Record<string, string> = {
      docker: 'from-blue-500 to-blue-600',
      kubernetes: 'from-blue-600 to-indigo-700', 
      aws: 'from-orange-500 to-red-600',
      terraform: 'from-purple-600 to-indigo-700',
      github: 'from-gray-700 to-gray-900',
      git: 'from-red-500 to-red-600',
    }
    return colors[techName.toLowerCase()] || 'from-gray-500 to-gray-600'
  }

  return (
    <div 
      className={`bg-gradient-to-br ${getIconColor(tech)} rounded-lg flex items-center justify-center text-white font-bold text-xs`}
      style={{ width: size, height: size }}
    >
      {tech.charAt(0).toUpperCase()}
    </div>
  )
}