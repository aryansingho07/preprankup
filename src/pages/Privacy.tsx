
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Lock, Eye, Shield, FileText, UserCheck, Mail } from "lucide-react"

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5C5EE6]/10 text-[#5C5EE6] mb-8">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-500 font-medium">
                        Last updated January 2026
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-slate max-w-none text-gray-600 space-y-16">

                    {/* Intro */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            Who is PrepRankUp?
                        </h2>
                        <p className="leading-relaxed">
                            We are an education technology company dedicated to helping aspirants prepare for competitive exams like SSC and CAT. We provide software platforms, AI-driven analysis, and mock tests to help students gain insights into their performance in a secure and privacy-protective way.
                        </p>
                        <p className="leading-relaxed">
                            This Privacy Statement ("Statement") applies to the processing activities for which PrepRankUp and its affiliates act as "data controllers". This Statement sets out how we process data in compliance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">1</span>
                            How can you contact us?
                        </h2>
                        <p className="leading-relaxed">
                            If you are looking to understand more about how we use your information, or to exercise your rights, you may reach us at:
                        </p>
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
                            <Mail className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <p className="font-bold text-blue-900 mb-1">Data Protection Officer</p>
                                <p className="text-blue-800">privacy@preprankup.com</p>
                            </div>
                        </div>
                    </section>

                    {/* Sources of Data */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">2</span>
                            Information We Collect
                        </h2>
                        <p className="leading-relaxed">
                            PrepRankUp collects personal data through three main sources: (1) Data you provide to us, (2) Data we collect automatically, and (3) Data from other sources.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <UserCheck size={18} className="text-[#5C5EE6]" /> Profile Data
                                </h3>
                                <p className="text-sm">Name, email address, mobile number, exam preferences, and educational background provided during registration.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <FileText size={18} className="text-[#5C5EE6]" /> Assessment Data
                                </h3>
                                <p className="text-sm">Mock test scores, performance analytics, question-wise time comparisons, and learning behavior patterns.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Shield size={18} className="text-[#5C5EE6]" /> Technical Data
                                </h3>
                                <p className="text-sm">IP address, browser information, device ID, cookies, and interactions with our platform to ensure security and improve experience.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Eye size={18} className="text-[#5C5EE6]" /> Payment Data
                                </h3>
                                <p className="text-sm">Billing information and transaction history. Note: Actual credit card details are processed by secure payment gateways (e.g., Razorpay/Stripe) and not stored by us.</p>
                            </div>
                        </div>
                    </section>

                    {/* Use of Data */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">3</span>
                            How We Use Your Data
                        </h2>
                        <ul className="space-y-4 list-disc pl-6 marker:text-[#5C5EE6]">
                            <li><strong>To provide our services:</strong> Providing access to mock tests, AI analysis, and generating performance reports.</li>
                            <li><strong>To communicate with you:</strong> Sending transactional emails, OTPs for verification, and updates about your subscription.</li>
                            <li><strong>To improve our platform:</strong> Analyzing usage patterns to enhance features, fix bugs, and optimize user experience.</li>
                            <li><strong>To ensure security:</strong> Detecting and preventing fraud, unauthorized access, and maintaining the integrity of our tests.</li>
                            <li><strong>To comply with legal obligations:</strong> Meeting requirements under Indian laws for tax reporting and data retention.</li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">4</span>
                            Data Disclosure & Sharing
                        </h2>
                        <p className="leading-relaxed">
                            We do not sell your personal data. We may disclose information to:
                        </p>
                        <ul className="space-y-4 list-disc pl-6 marker:text-[#5C5EE6]">
                            <li><strong>Service Providers:</strong> Third-party vendors who assist with hosting, payment processing, email delivery, and customer support. They are bound by confidentiality agreements.</li>
                            <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation (e.g., to law enforcement agencies in India).</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, where user data would be one of the transferred assets.</li>
                        </ul>
                    </section>

                    {/* Data Retention */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">5</span>
                            Data Retention
                        </h2>
                        <p className="leading-relaxed">
                            We keep your personal data only as long as necessary to provide our services and for legitimate business purposes. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable tax laws), resolve disputes, and enforce our legal agreements and policies.
                        </p>
                    </section>

                    {/* International Transfers */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">6</span>
                            International Data Transfers
                        </h2>
                        <p className="leading-relaxed">
                            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. PrepRankUp ensures that any such transfer complies with the Digital Personal Data Protection Act, 2023, and that adequate safeguards are in place.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">7</span>
                            Children's Privacy
                        </h2>
                        <p className="leading-relaxed">
                            Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with Personal Data, please contact us. In India, for users under 18, we recommend parental guidance and consent before using our platform.
                        </p>
                    </section>

                    {/* Your Rights (Indian Context) */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">8</span>
                            Your Rights (DPDPA 2023)
                        </h2>
                        <p className="leading-relaxed">
                            Under the Digital Personal Data Protection Act, 2023 and other applicable Indian laws, you have the following rights:
                        </p>
                        <ul className="space-y-4 list-disc pl-6 marker:text-[#5C5EE6]">
                            <li><strong>Right to Access:</strong> You can request a summary of your personal data processed by us.</li>
                            <li><strong>Right to Correction:</strong> You can ask us to correct or update inaccurate or misleading personal data.</li>
                            <li><strong>Right to Erasure:</strong> You can request the deletion of your personal data unless retention is necessary for a legal purpose.</li>
                            <li><strong>Right to Grievance Redressal:</strong> You have the right to register a grievance regarding our use of your personal data.</li>
                            <li><strong>Right to Nominate:</strong> You have the right to nominate an individual to exercise your rights in the event of death or incapacity.</li>
                        </ul>
                    </section>

                    {/* Updates */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">9</span>
                            Updates to this Statement
                        </h2>
                        <p className="leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-graphite-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-4">Privacy Concerns?</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        We value your trust. If you have any privacy concerns or grievances, please reach out to our Grievance Officer.
                    </p>
                    <button className="px-8 py-3 bg-white text-graphite-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        Contact Privacy Team
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}
