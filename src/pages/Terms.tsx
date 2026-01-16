import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Terms() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-lg text-gray-600 mb-12">Last updated: January 2026</p>

                <div className="prose prose-blue max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing or using PrepRankUp, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                        <p className="leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials (information or software) on PrepRankUp's website for personal, non-commercial transitory viewing only.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Modify or copy the materials.</li>
                            <li>Use the materials for any commercial purpose.</li>
                            <li>Attempt to decompile or reverse engineer any software contained on PrepRankUp's website.</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription and Payments</h2>
                        <p className="leading-relaxed">
                            Certain features of the service are only available with a paid subscription. You agree to provide current, complete, and accurate purchase and account information for all purchases made through our site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Policy</h2>
                        <p className="leading-relaxed">
                            We offer a 30-day money-back guarantee for initial purchases. If you are not satisfied with our service, you may request a full refund within 30 days of your original purchase date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer</h2>
                        <p className="leading-relaxed">
                            The materials on PrepRankUp's website are provided on an 'as is' basis. PrepRankUp makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
