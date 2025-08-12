import Link from 'next/link';
import Navigation from '../components/Navigation';
import { getAllProjects } from '../data/projects';

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Here are some of the DevOps projects I've built, showcasing automation, infrastructure, and deployment expertise.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link 
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group block"
                            >
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                                    {/* Project Title */}
                                    <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Short Description */}
                                    <p className="text-gray-600 mb-6">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Stack Preview */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 4).map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                                    +{project.techStack.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Call to Action */}
                                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                                        <span>View Details</span>
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Optional: Add more projects coming soon */}
                    <div className="mt-12 text-center">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">More Projects Coming Soon</h3>
                            <p className="text-gray-600">
                                I'm continuously working on new DevOps projects. Check back soon for updates on Kubernetes deployments, monitoring dashboards, and more!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
