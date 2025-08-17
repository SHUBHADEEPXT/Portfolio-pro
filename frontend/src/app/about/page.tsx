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
                        Hi, I'm Shubhadeep Bhowmik — a DevOps Engineer in the making,
                        with a strong foundation in software support, QA,
                        and a growing expertise in automating infrastructure, building CI/CD pipelines,
                        and deploying production-ready applications.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        This portfolio is more than just a website — it's a live, 28-day journey
                        where I'm combining modern frontend development with real-world DevOps
                        practices. From React and Next.js on the frontend to Docker, Kubernetes,
                        Terraform, and monitoring on the backend, I'm building and documenting my process
                        every step of the way.
                    </p>
                    <p className="text-gray-600">
                        My goal is to not only showcase my skills but also to share insights into the
                        DevOps lifecycle, from code commit to production deployment. I believe in the power
                        of automation, collaboration, and continuous improvement, and I'm excited to bring
                        these principles to life through this portfolio.
                    </p>
                    <p className="mt-6 text-gray-600">
                        This page itself is powered by Next.js file-based routing — no extra code for
                        navigation, just a clean folder structure and a single <code>about</code> page.
                        Every component here reflects my approach: keep it simple, keep it scalable,
                        and keep it professional.
                    </p>
                    <p className="mt-6 text-gray-600">
                        Thank you for visiting my portfolio! I hope you find it informative and inspiring.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}
