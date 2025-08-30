import { getPageContent } from '@/lib/api';
import { generatePageMetadata, pageMetadataDefaults } from '@/lib/pageMetadata';

// Generate dynamic metadata for the About page
export async function generateMetadata() {
    return generatePageMetadata('about', pageMetadataDefaults.about);
}

export default async function AboutPage() {
    try {
        const pageData = await getPageContent('about');

        if (!pageData) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">
                            About Us Page Not Found
                        </h1>
                        <p className="text-gray-600">
                            The about page content is not available.
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <main className="min-h-screen bg-black text-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                            About Droneverse
                        </h1>

                        {pageData.content && (
                            <div
                                className="prose prose-lg prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: pageData.content }}
                            />
                        )}

                        {!pageData.content && (
                            <div className="text-center space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    We are a company that values innovation and creativity. Droneverse is India&apos;s leading drone training and defence solutions provider, committed to excellence in everything we do.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mt-12">
                                    <div className="bg-gray-900 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Our Mission</h3>
                                        <p className="text-gray-300">
                                            To revolutionize drone technology and training, providing cutting-edge solutions for government and military applications while fostering innovation and excellence.
                                        </p>
                                    </div>

                                    <div className="bg-gray-900 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Our Vision</h3>
                                        <p className="text-gray-300">
                                            To be the global leader in autonomous CsUAS technology and training, setting industry standards for safety, innovation, and performance.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h2 className="text-3xl font-bold mb-6">Why Choose Droneverse?</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-2xl">🚁</span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
                                            <p className="text-gray-300">DGCA-approved drone pilot training programs</p>
                                        </div>

                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-2xl">🛡️</span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">Defence Solutions</h3>
                                            <p className="text-gray-300">Advanced autonomous CsUAS systems for military use</p>
                                        </div>

                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-2xl">🤖</span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">AI Technology</h3>
                                            <p className="text-gray-300">Cutting-edge AI-driven autonomous systems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        );

    } catch (error) {
        console.error('Error loading about page:', error);

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        Error Loading About Page
                    </h1>
                    <p className="text-gray-600">
                        {error.message}
                    </p>
                </div>
            </div>
        );
    }
}
