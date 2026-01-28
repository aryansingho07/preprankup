import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, Sparkles, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

type Category = 'CAT' | 'SSC'

const categories: { id: Category; name: string }[] = [
    { id: 'CAT', name: 'CAT / MBA' },
    { id: 'SSC', name: 'SSC CGL / CHSL' },
]

export default function Pricing() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

    // Initialize category from URL or default to CAT
    const initialCategory = (searchParams.get('category') as Category) || 'CAT'
    const [activeCategory, setActiveCategory] = useState<Category>(initialCategory)

    // Sync state with URL when category changes manually
    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat)
        setSearchParams({ category: cat })
    }

    // Update state if URL parameter changes (e.g., back button)
    useEffect(() => {
        const cat = searchParams.get('category') as Category
        if (cat && categories.find(c => c.id === cat)) {
            setActiveCategory(cat)
        }
    }, [searchParams])

    const getPlans = (category: Category) => {
        if (category === 'CAT') {
            return [
                {
                    title: "CAT Bootcamp Lite",
                    subtitle: "Concentrated Mock Analysis",
                    isOnline: true,
                    language: "English",
                    startDate: "Immediate",
                    endDate: "30 Days Access",
                    currentPrice: 499,
                    originalPrice: 1999,
                    discountPercent: 75,
                    tokens: 10,
                    batchOverlayText: "LITE BOOTCAMP",
                    features: [
                        "5 Premium CAT Mock Tests",
                        "Essential AI Performance Analysis",
                        "Basic Section-wise Insights",
                        "Core Study Recommendations",
                        "Question-wise Time Analysis",
                        "Athena AI Coach Access",
                        "Mobile & Desktop Access",
                        "30 Days Unlimited Retakes"
                    ],
                    popular: false
                },
                {
                    title: "CAT Bootcamp Premium (30-Day)",
                    subtitle: "Intensive 30-Day Training",
                    isOnline: true,
                    language: "Hinglish",
                    startDate: "Immediate",
                    endDate: "30 Days Access",
                    currentPrice: 999,
                    originalPrice: 3999,
                    discountPercent: 75,
                    tokens: 50,
                    batchOverlayText: "30-DAY INTENSIVE",
                    features: [
                        "15 Premium CAT Mock Tests",
                        "AI-Powered Performance Analysis",
                        "Detailed Section-wise Insights",
                        "Personalized Study Recommendations",
                        "Question-wise Time Analysis",
                        "Athena AI Coach Access",
                        "Mobile & Desktop Access",
                        "30 Days Unlimited Retakes"
                    ],
                    popular: false
                },
                {
                    title: "CAT Bootcamp Elite (60-Day)",
                    subtitle: "Advanced Skill Optimization",
                    isOnline: true,
                    language: "Hinglish",
                    startDate: "Immediate",
                    endDate: "60 Days Access",
                    currentPrice: 1999,
                    originalPrice: 7999,
                    discountPercent: 75,
                    tokens: 150,
                    batchOverlayText: "MOST POPULAR CHOICE",
                    features: [
                        "30 Premium CAT Mock Tests",
                        "Advanced AI Performance Analytics",
                        "Comparative Analysis with Toppers",
                        "Weakness Identification & Remediation",
                        "Speed vs Accuracy Optimization",
                        "Priority Athena AI Coach Support",
                        "Detailed Progress Tracking",
                        "60 Days Unlimited Retakes",
                        "Study Plan Customization"
                    ],
                    popular: true
                },
                {
                    title: "CAT Bootcamp Ultimate (90-Day)",
                    subtitle: "Elite Strategic Intelligence",
                    isOnline: true,
                    language: "Hinglish",
                    startDate: "Immediate",
                    endDate: "90 Days Access",
                    currentPrice: 2999,
                    originalPrice: 11999,
                    discountPercent: 75,
                    tokens: 500,
                    batchOverlayText: "ULTIMATE PERFORMANCE",
                    features: [
                        "45 Premium CAT Mock Tests",
                        "Elite AI Performance Suite",
                        "Percentile Prediction & Tracking",
                        "Advanced Strategy Recommendations",
                        "Mock Interview Preparation Tips",
                        "VIP Athena AI Coach Access",
                        "Weekly Performance Reports",
                        "90 Days Unlimited Retakes",
                        "Priority Support & Mentoring",
                        "Exclusive Content Access"
                    ],
                    popular: false
                }
            ]
        }
        // Default to SSC plans if not CAT
        return [
            {
                title: "Surya SSC CGL 2026 (English Book)",
                subtitle: "Complete Batch with Test Series",
                isOnline: true,
                language: "Hinglish",
                startDate: "29 Jan, 2026",
                endDate: "30 Mar, 2027",
                currentPrice: 1699,
                originalPrice: 3999,
                discountPercent: 58,
                tokens: 50,
                batchOverlayText: "Tier 1 + Tier 2 Complete",
                features: ["Full Syllabus", "100+ Tests", "Performance AI", "Token Rewards"],
                popular: false
            },
            {
                title: "Kamyabi SSC CHSL 2026",
                subtitle: "English Books included",
                isOnline: true,
                language: "Hinglish",
                startDate: "29 Jan, 2026",
                endDate: "30 Jun, 2027",
                currentPrice: 1499,
                originalPrice: 3749,
                discountPercent: 60,
                tokens: 100,
                batchOverlayText: "Target SSC CHSL Rankers",
                features: ["Maths Special", "Advanced AI Analysis", "Live Sessions", "Priority Support"],
                popular: true
            },
            {
                title: "SSC Selection Post Phase XII",
                subtitle: "Full Intensive Training",
                isOnline: true,
                language: "Hindi",
                startDate: "15 Feb, 2026",
                endDate: "15 Dec, 2026",
                currentPrice: 1299,
                originalPrice: 2999,
                discountPercent: 56,
                tokens: 500,
                batchOverlayText: "INFINITY ACCESS INCLUDED",
                features: ["Chapter-wise Tests", "Daily Quizzes", "Rank Prediction", "1-on-1 AI Mentoring"],
                popular: false
            }
        ]
    }

    const plans = getPlans(activeCategory)

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Navbar />
            <section id="pricing" className="py-24 lg:py-32 w-full relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Enhanced Section Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-graphite-900 mb-8 tracking-tighter">
                            Your Path to <span className="text-[#5C5EE6]">Success</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-16 font-bold leading-relaxed">
                            Join thousands of students who have cracked their exams using PrepRankUp's Performance Intelligence.
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="flex items-center gap-3 mr-4 text-gray-400 font-black uppercase text-xs tracking-widest">
                                <SlidersHorizontal className="w-4 h-4" />
                                <span>Exam Category</span>
                            </div>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategoryChange(cat.id)}
                                    className={`px-8 py-4 rounded-2xl text-sm font-black transition-all duration-500 border-2 tracking-widest uppercase ${activeCategory === cat.id
                                        ? 'bg-graphite-900 text-white border-graphite-900 shadow-xl shadow-graphite-900/20 active:scale-95'
                                        : 'bg-white text-gray-500 border-gray-100 hover:border-[#5C5EE6] hover:text-[#5C5EE6]'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Billing Toggle (Hidden for this specific layout as seen in image) */}
                        <div className="bg-white/50 backdrop-blur-xl border border-gray-100 rounded-[2rem] p-4 inline-flex items-center gap-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                    <Sparkles size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-black text-graphite-900 uppercase">One-Time Payment</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Access until course end</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200"></div>
                            <p className="text-xs font-black text-[#5C5EE6] uppercase tracking-widest">Enroll Now for 2026 Batches</p>
                        </div>
                    </div>

                    {/* New Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {plans.map((plan, idx) => (
                            <div key={idx} className={plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}>
                                <PricingCard {...plan} />
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Money Back Guarantee */}
                    <div className="mt-32 max-w-4xl mx-auto bg-white rounded-[3rem] p-12 border border-black/5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5C5EE6]/5 blur-[100px] rounded-full group-hover:bg-[#5C5EE6]/10 transition-colors"></div>
                        <div className="relative flex flex-col md:flex-row items-center gap-10">
                            <div className="w-24 h-24 rounded-[2rem] bg-graphite-900 flex items-center justify-center shadow-2xl shadow-graphite-900/20 rotate-3 group-hover:rotate-0 transition-transform">
                                <ShieldCheck className="w-12 h-12 text-[#5C5EE6]" />
                            </div>
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <h3 className="text-3xl font-black text-graphite-900 leading-tight">
                                    100% Performance Improvement Guarantee
                                </h3>
                                <p className="text-gray-500 font-bold leading-relaxed">
                                    If you don't see a significant improvement in your score patterns within 30 days of consistent use, we'll provide a full refund. No questions asked.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
