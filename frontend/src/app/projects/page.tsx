import Navigation from '../components/Navigation';

export default function ProjectsPage() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">CI/CD Pipeline</h3>
                            <p className="text-gray-600">Automated deployment pipeline using Jenkins and Docker</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
                            <p className="text-gray-600">AWS infrastructure managed with Terraform</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

