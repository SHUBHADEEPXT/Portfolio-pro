import Navigation from '../../components/Navigation';
import { getProjectBySlug } from '../../data/projects';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <>
                <Navigation />
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                        <p className="text-xl text-gray-600">Sorry, the project "{slug}" doesn't exist.</p>
                        <a href="/projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            ← Back to Projects
                        </a>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-gray-600">
                            <li>
                                <a href="/" className="hover:text-blue-600">Home</a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <a href="/projects" className="hover:text-blue-600">Projects</a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mx-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-900 font-medium">{project.title}</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                        <p className="text-xl text-gray-600 mb-6">{project.longDescription}</p>
                        
                        {/* GitHub Link */}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <span>View on GitHub</span>
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, index) => (
                                <span 
                                    key={index}
                                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features, Challenges, and Outcomes Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Features */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-green-600 mb-4">Key Features</h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Challenges */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-orange-600 mb-4">Challenges Solved</h3>
                            <ul className="space-y-2">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-orange-500 mr-2">⚡</span>
                                        <span className="text-gray-700 text-sm">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-purple-600 mb-4">Outcomes</h3>
                            <ul className="space-y-2">
                                {project.outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-500 mr-2">🎯</span>
                                        <span className="text-gray-700 text-sm">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <a 
                            href="/projects" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to All Projects
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
