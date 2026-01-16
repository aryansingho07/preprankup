import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Privacy() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-lg text-gray-600 mb-12">Last updated: January 2026</p>

                <div className="prose prose-blue max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            We collect information you provide directly to us when you create an account, subscribe to our newsletter, make a purchase, or communicate with us.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Name and contact information.</li>
                            <li>Authentication credentials.</li>
                            <li>Payment information.</li>
                            <li>Educational background and exam preparation details.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use the information we collect to provide, maintain, and improve our services, including:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Personalizing your experience and AI coaching.</li>
                            <li>Processing transactions and sending related information.</li>
                            <li>Communicating with you about products, services, and events.</li>
                            <li>Monitoring and analyzing trends, usage, and activities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                        <p className="leading-relaxed">
                            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
                        <p className="leading-relaxed">
                            We do not share your personal information with third parties except as described in this policy or with your consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
                        <p className="leading-relaxed">
                            You may update, correct, or delete information about you at any time by logging into your account or emailing us.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
