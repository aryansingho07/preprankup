
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Cookie, ShieldCheck, Settings, Info, ExternalLink } from "lucide-react"

export default function Cookies() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5C5EE6]/10 text-[#5C5EE6] mb-8">
                        <Cookie className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Cookies Policy
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
                            What is this Statement?
                        </h2>
                        <p className="leading-relaxed">
                            This Cookie Statement ("Statement") explains how PrepRankUp ("we", "us", and "our") uses cookies and similar technologies when you visit our website. It forms part of our Privacy Policy and explains what cookies are and how we use them, as well as your rights to control our use of them.
                        </p>
                    </section>

                    {/* What are Cookies */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">1</span>
                            What are Cookies?
                        </h2>
                        <p className="leading-relaxed">
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. These text files can be read by website operators and help to identify when you return to a website and help remember your preferences.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2 mt-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Session Cookies</h3>
                                <p className="text-sm">These only last until your browser is closed. They are then automatically deleted.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Persistent Cookies</h3>
                                <p className="text-sm">These remain on your device until they expire or are manually deleted by you or your browser.</p>
                            </div>
                        </div>
                    </section>

                    {/* First vs Third Party */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">2</span>
                            Who sets the cookies?
                        </h2>
                        <p className="leading-relaxed">
                            <strong>First-party cookies:</strong> Cookies that are owned and controlled by PrepRankUp.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Third-party cookies:</strong> Cookies that are owned and controlled by parties other than PrepRankUp (e.g., Google Analytics, Payment Gateways). We are not responsible for the use of third-party cookie data.
                        </p>
                    </section>

                    {/* Purposes */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">3</span>
                            Why do we use cookies?
                        </h2>
                        <p className="leading-relaxed">
                            We use cookies to provide, measure, analyze, optimize, and improve our services.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="mt-1 min-w-5">
                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Strictly Necessary Cookies</h3>
                                    <p className="text-sm mt-1">
                                        These are essential for the website to operate (e.g., logging in, taking a mock test, secure payments). You cannot refuse them without impacting how our services function.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 min-w-5">
                                    <Info className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Targeting & Analytics Cookies</h3>
                                    <p className="text-sm mt-1">
                                        These help us understand how you use our platform (e.g., which tests you take) to improve our AI recommendations. They also help us monitor marketing efforts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Other Technologies */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">4</span>
                            Other Technologies
                        </h2>
                        <p className="leading-relaxed">
                            In order to provide and improve our services, we may also use other technologies similar to cookies, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[#5C5EE6]">
                            <li><strong>Web Beacons:</strong> Tiny graphics on a web page or in an email that track views or open rates.</li>
                            <li><strong>Local Storage:</strong> Used to remember your choices (like dark mode or language) inside our web application for better performance.</li>
                        </ul>
                    </section>

                    {/* Control */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">5</span>
                            How to control cookies
                        </h2>
                        <p className="leading-relaxed">
                            You can control which cookies are used in various ways:
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                    <Settings className="w-4 h-4" /> Browser Settings
                                </h3>
                                <p className="text-sm mt-2">
                                    You can configure your browser to delete, accept, or reject cookies. Check your browser's (Chrome, Firefox, Safari, Edge) help menu for specific instructions.
                                    <br /><br />
                                    <strong>Note:</strong> Rejecting all cookies may prevent you from logging in or taking mock tests on PrepRankUp.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            For more information on Google Analytics cookies and opt-out options, please visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-blue-600 hover:underline inline-flex items-center">Google Analytics Opt-out <ExternalLink className="w-3 h-3 ml-1" /></a>.
                        </p>
                    </section>

                    {/* Updates */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">6</span>
                            Updates to this Statement
                        </h2>
                        <p className="leading-relaxed">
                            We may update this Cookie Statement from time to time. Please re-visit this Statement regularly to stay informed. The date at the top indicates when it was last updated.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    )
}
