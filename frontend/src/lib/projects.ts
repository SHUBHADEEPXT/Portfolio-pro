import { projects, type Project } from '../app/data/projects'

// Helper function to get a project by slug
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find(project => project.slug === slug)
}

// Helper function to get all projects
export async function getAllProjects(): Promise<Project[]> {
  return projects
}

// Helper function to get projects by category
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  return projects.filter(project => project.category === category)
}

// Helper function to get project categories
export async function getProjectCategories(): Promise<string[]> {
  const categories = projects
    .map(project => project.category)
    .filter((category): category is string => Boolean(category))
  return Array.from(new Set(categories))
}
