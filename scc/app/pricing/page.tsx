import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Check, Star, Zap, Crown, Target, TrendingUp, Clock, Award, Shield, ChevronRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
    title: 'SSC Mock Test Plans & Pricing',
    description: 'Choose your path to success with our 30, 60, and 90-day SSC Bootcamp plans. Get instant access to premium mock tests and our AI coach, Athena.',
    keywords: [
        'SSC bootcamp plans',
        'SSC mock test pricing',
        'premium SSC preparation',
        '30 day SSC bootcamp',
        '60 day SSC bootcamp',
        '90 day SSC bootcamp',
        'SSC coaching packages',
        'Athena AI coach',
        'SSC preparation plans',
        'Staff Selection Commission coaching',
        'SSC mock test subscription',
        'intensive SSC training'
    ],
}

interface Feature {
    name: string
    included: boolean
}

interface Plan {
    id: string
    name: string
    price: number
    originalPrice: number
    duration_days: number
    description: string
    features: Feature[]
    badge?: { text: string; color: string }
    isPopular?: boolean
    icon: React.ReactNode
}

const sscPlans: Plan[] = [
    {
        id: 'ssc-30-day',
        name: '30-Day SSC Sprint',
        price: 499,
        originalPrice: 625,
        duration_days: 30,
        description: 'Intensive SSC CGL/CHSL preparation bootcamp',
        icon: <Target className="w-8 h-8 text-blue-600" />,
        badge: { text: 'Quick Start', color: 'bg-blue-500' },
        features: [
            { name: '15 Premium SSC Mock Tests', included: true },
            { name: 'AI-Powered Performance Analysis', included: true },
            { name: 'Detailed Section-wise Insights', included: true },
            { name: 'Personalized Study Recommendations', included: true },
            { name: 'Question-wise Time Analysis', included: true },
            { name: 'Athena AI Coach Access', included: true },
            { name: 'Mobile & Desktop Access', included: true },
            { name: '30 Days Unlimited Retakes', included: true }
        ]
    },
    {
        id: 'ssc-60-day',
        name: '60-Day SSC Mastery',
        price: 899,
        originalPrice: 1125,
        duration_days: 60,
        isPopular: true,
        description: 'Our most popular plan for serious SSC aspirants',
        icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
        badge: { text: 'Most Popular', color: 'bg-purple-600' },
        features: [
            { name: '30 Premium SSC Mock Tests', included: true },
            { name: 'Advanced AI Performance Analytics', included: true },
            { name: 'Comparative Analysis with Toppers', included: true },
            { name: 'Weakness Identification & Remediation', included: true },
            { name: 'Speed vs Accuracy Optimization', included: true },
            { name: 'Priority Athena AI Coach Support', included: true },
            { name: 'Detailed Progress Tracking', included: true },
            { name: '60 Days Unlimited Retakes', included: true },
            { name: 'Study Plan Customization', included: true }
        ]
    },
    {
        id: 'ssc-90-day',
        name: '90-Day SSC Comprehensive',
        price: 1299,
        originalPrice: 1625,
        duration_days: 90,
        description: 'Full lifecycle preparation with expert guidance',
        icon: <Crown className="w-8 h-8 text-orange-600" />,
        badge: { text: 'Best Value', color: 'bg-orange-500' },
        features: [
            { name: '45 Premium SSC Mock Tests', included: true },
            { name: 'Elite AI Performance Suite', included: true },
            { name: 'All-India Rank Prediction', included: true },
            { name: 'Advanced Strategy Recommendations', included: true },
            { name: 'Tier-II Specialized Preparation', included: true },
            { name: 'VIP Athena AI Coach Access', included: true },
            { name: 'Weekly Performance Reports', included: true },
            { name: '90 Days Unlimited Retakes', included: true },
            { name: 'Priority Support & Mentoring', included: true },
            { name: 'Exclusive Content Access', included: true }
        ]
    }
]

export default function PricingPage() {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price)
    }

    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SSC Bootcamp Plans",
        "description": "Intensive SSC preparation bootcamp with AI coaching",
        "brand": {
            "@type": "Brand",
            "name": "PrepRankUp"
        },
        "offers": sscPlans.map((plan) => ({
            "@type": "Offer",
            "name": plan.name,
            "description": plan.description,
            "price": plan.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://preprankup.com/pricing",
            "seller": {
                "@type": "Organization",
                "name": "PrepRankUp"
            }
        }))
    }

    return (
        <div className="min-h-screen w-full bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(pricingSchema)
                }}
            />
            <Navbar />

            <main className="w-full">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-32 pb-20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-blue-400/20">
                            <Sparkles size={16} />
                            <span>Transform Your SSC Score Today</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            The Smartest Path to<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                                Your Dream Govt Job
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Join thousands of SSC aspirants who&apos;ve transformed their scores with our
                            AI-powered bootcamp. Get personalized insights from <strong>Athena</strong>,
                            your dedicated AI coach.
                        </p>

                        {/* Social Proof */}
                        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">5000+</div>
                                <div className="text-blue-300 text-sm">Happy Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">95%</div>
                                <div className="text-blue-300 text-sm">Accuracy Improvement</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-blue-300 text-sm">AI Mentorship</div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-950 font-bold px-10 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                                Take A Free Mock Test Now
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Choose Your <span className="text-blue-600">SSC Bootcamp</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Structured intensive programs designed to maximize your efficiency and ensure
                                you hit your target rank in SSC CGL, CHSL, and MTS.
                            </p>
                        </div>

                        {/* Plans Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {sscPlans.map((plan) => (
                                <div
                                    key={plan.id}
                                    className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${plan.isPopular ? 'ring-4 ring-blue-600 scale-105 z-10' : 'hover:shadow-2xl'
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className={`${plan.badge.color} text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider`}>
                                                {plan.badge.text}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <div className="p-3 bg-blue-50 rounded-2xl w-fit mb-6">
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-gray-400 line-through text-lg">{formatPrice(plan.originalPrice)}</span>
                                            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">20% OFF</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-extrabold text-gray-900">{formatPrice(plan.price)}</span>
                                            <span className="text-gray-500 font-medium">/plan</span>
                                        </div>
                                        <p className="text-blue-600 text-sm font-semibold mt-2 flex items-center gap-1">
                                            <Clock size={14} />
                                            {plan.duration_days} Days Full Access
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-10 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                                                    <Check size={14} className="text-green-600" />
                                                </div>
                                                <span className="text-sm text-gray-700">{feature.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${plan.isPopular
                                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl'
                                                : 'bg-gray-900 text-white hover:bg-black'
                                            }`}
                                    >
                                        <Zap size={18} />
                                        Enroll In Bootcamp
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Testimonials */}
                        <div className="mt-32">
                            <div className="text-center mb-16">
                                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Success Stories</span>
                                <h2 className="text-4xl font-bold text-gray-900 mt-2">Built for SSC Toppers</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {[
                                    {
                                        name: "Rahul Sharma",
                                        role: "SSC CGL 2024 Aspirant",
                                        text: "Athena identified my weakness in Arithmetic. My score jumped from 120 to 165 in just 30 days of the Sprint bootcamp!",
                                        initial: "R",
                                        color: "bg-blue-100 text-blue-600"
                                    },
                                    {
                                        name: "Anjali Gupta",
                                        role: "SSC CHSL Qualified",
                                        text: "The detailed analysis after each mock test was a game-changer. I could see exactly where I was losing marks to silly mistakes.",
                                        initial: "A",
                                        color: "bg-purple-100 text-purple-600"
                                    },
                                    {
                                        name: "Vikram Singh",
                                        role: "SSC CGL (Rank 412)",
                                        text: "The 90-day bootcamp was perfect. The Tier-II specialized tests and Rank Prediction were accurate and motivating.",
                                        initial: "V",
                                        color: "bg-orange-100 text-orange-600"
                                    }
                                ].map((t, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                                        <div className="flex items-center mb-6">
                                            <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center font-bold text-xl`}>
                                                {t.initial}
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold text-gray-900">{t.name}</h4>
                                                <p className="text-gray-500 text-sm">{t.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 italic leading-relaxed">&quot;{t.text}&quot;</p>
                                        <div className="flex text-yellow-400 mt-6">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Info */}
                        <div className="mt-32">
                            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                                Why Choose Preprankup Bootcamp?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                                {[
                                    {
                                        title: "AI-Powered Athena",
                                        desc: "Get personalized insights and recommendations from our advanced AI mentor.",
                                        icon: <Sparkles className="text-blue-600" />
                                    },
                                    {
                                        title: "Smart Analytics",
                                        desc: "Track your progress with detailed performance metrics and heatmap insights.",
                                        icon: <TrendingUp className="text-green-600" />
                                    },
                                    {
                                        title: "Expert Content",
                                        desc: "Practice with questions curated by SSC toppers and subject matter experts.",
                                        icon: <Award className="text-purple-600" />
                                    },
                                    {
                                        title: "Intensive Training",
                                        desc: "High-frequency mock tests to build the speed and accuracy needed for SSC exams.",
                                        icon: <Target className="text-orange-600" />
                                    }
                                ].map((f, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {f.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Guarantee Section */}
                        <div className="mt-32 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform -rotate-1"></div>
                            <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[3rem] p-12 md:p-16 text-center text-white">
                                <Shield size={64} className="mx-auto mb-8 text-blue-200 opacity-50" />
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our RankUp Promise</h2>
                                <div className="max-w-4xl mx-auto space-y-6">
                                    <p className="text-xl text-blue-50 leading-relaxed">
                                        We are committed to your success. If you complete all mock tests in your chosen bootcamp,
                                        follow Athena&apos;s personalized study plan, and don&apos;t see an improvement in your score,
                                        we offer <strong>additional support resources</strong> or a <strong>partial refund</strong>.
                                    </p>
                                    <p className="text-blue-200 font-medium pb-4 border-b border-blue-400/30">
                                        Your goal is our mission. We work with you until you achieve your target rank.
                                    </p>
                                    <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-sm font-bold">
                                        <span className="flex items-center gap-2"><Check size={18} className="text-green-400" /> SECURE PAYMENTS</span>
                                        <span className="flex items-center gap-2"><Check size={18} className="text-green-400" /> INSTANT ACCESS</span>
                                        <span className="flex items-center gap-2"><Check size={18} className="text-green-400" /> 24/7 SUPPORT</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Cta */}
                        <div className="mt-20 text-center">
                            <p className="text-gray-500 mb-4">Have questions about our plans?</p>
                            <button className="text-blue-600 font-bold hover:underline">Contact Support Team</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

