// src/app/projects/[slug]/page.tsx
// Updated with beautiful theme-matched placeholders

import Link from 'next/link'
import { ChevronLeft, ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { 
  DashboardPlaceholder, 
  PipelinePlaceholder, 
  ArchitecturePlaceholder,
  KubernetesPlaceholder,
  SecurityPlaceholder,
  PerformancePlaceholder,
  TechIconPlaceholder 
} from '@/components/ui/ProjectPlaceholders'
import {
  DevOpsHeroBackground,
  KubernetesHeroBackground,
  PipelineHeroBackground
} from '@/components/ui/HeroBackgrounds'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            ← Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  // Helper function to get appropriate hero background (no text overlap)
  const getHeroBackground = (projectSlug: string) => {
    switch (projectSlug) {
      case 'devops-automation':
        return <DevOpsHeroBackground width={1200} height={400} className="absolute inset-0 w-full h-full" />
      case 'kubernetes-cluster':
        return <KubernetesHeroBackground width={1200} height={400} className="absolute inset-0 w-full h-full" />
      case 'ci-cd-pipeline':
        return <PipelineHeroBackground width={1200} height={400} className="absolute inset-0 w-full h-full" />
      default:
        return <DevOpsHeroBackground width={1200} height={400} className="absolute inset-0 w-full h-full" />
    }
  }

  const getScreenshots = (projectSlug: string) => {
    switch (projectSlug) {
      case 'devops-automation':
        return [
          { component: <DashboardPlaceholder width={800} height={400} />, title: "Main Dashboard", desc: "Real-time monitoring and metrics visualization" },
          { component: <PerformancePlaceholder width={800} height={400} />, title: "Performance Metrics", desc: "System performance analytics" }
        ]
      case 'kubernetes-cluster':
        return [
          { component: <KubernetesPlaceholder width={800} height={400} />, title: "Cluster Dashboard", desc: "Pod and service management interface" },
          { component: <SecurityPlaceholder width={800} height={400} />, title: "Security Monitor", desc: "Cluster security and compliance monitoring" }
        ]
      case 'ci-cd-pipeline':
        return [
          { component: <PipelinePlaceholder width={800} height={400} />, title: "Pipeline Dashboard", desc: "CI/CD workflow visualization" },
          { component: <PerformancePlaceholder width={800} height={400} />, title: "Build Analytics", desc: "Performance metrics and build history" }
        ]
      default:
        return [
          { component: <DashboardPlaceholder width={800} height={400} />, title: "Dashboard", desc: "Main application interface" },
          { component: <PerformancePlaceholder width={800} height={400} />, title: "Analytics", desc: "Performance monitoring" }
        ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Clean Background Only */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        {getHeroBackground(project.slug)}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <Link 
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Projects
          </Link>
        </nav>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
            </section>

            {/* Screenshots Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {getScreenshots(project.slug).map((screenshot, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                      {screenshot.component}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{screenshot.title}</h3>
                      <p className="text-gray-600 text-sm">{screenshot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture Diagram */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <ArchitecturePlaceholder width={800} height={500} />
                </div>
                <div className="p-4 border-t">
                  <h3 className="font-semibold text-gray-900">System Architecture</h3>
                  <p className="text-gray-600 text-sm">High-level overview of system components and data flow</p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid gap-4">
                {project.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack with Theme-Matched Icons */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="space-y-3">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center space-x-3">
                    <TechIconPlaceholder tech={tech} size={32} />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            {project.outcomes && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Key Outcomes</h3>
                <div className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="text-sm">
                      <div className="text-gray-900 font-medium">{outcome.metric}</div>
                      <div className="text-gray-600">{outcome.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects (helps with performance)
export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}