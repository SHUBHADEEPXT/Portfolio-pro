import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl text-gray-800">
                        My DevOps Portfolio
                    </div>
                    <div className="flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                            About
                        </Link>
                        <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
