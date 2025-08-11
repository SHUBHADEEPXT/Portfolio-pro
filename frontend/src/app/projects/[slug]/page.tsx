export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900">
                    Project: {params.slug}
                </h1>
                <p className="text-xl text-gray-600 mt-4">
                    You're viewing the details for project "{params.slug}"
                </p>
            </div>
        </div>
    );
}

