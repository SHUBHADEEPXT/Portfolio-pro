import Navigation from "../components/Navigation";
export default function AboutPage() {
    return (
        <>
            <Navigation />
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to my about page! I'm a DevOps engineer passionate about 
                        automating infrastructure and streamlining deployment processes.
                    </p>
                    <p className="text-gray-600">
                        This page was created using Next.js file-based routing - 
                        just by creating a folder called 'about' with a page.tsx file!
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
