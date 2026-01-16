import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
    BookOpen,
    Target,
    Award,
    Cpu,
    Users,
    ShieldCheck,
    ChevronRight,
    HelpCircle,
    GraduationCap,
    FileText,
    TrendingUp,
    CheckCircle2,
    AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'About SSC Exams & Preparation | PrepRankUp',
    description: 'Learn everything about SSC exams (CGL, CHSL, MTS) and how PrepRankUp uses AI to help you clear them with top ranks.',
    keywords: [
        'SSC exam information',
        'what is SSC',
        'SSC CGL syllabus',
        'SSC eligibility',
        'AI coaching for SSC',
        'SSC vs UPSC success ratio',
        'PrepRankUp about us'
    ],
}

export default function AboutPage() {
    const examCategories = [
        {
            name: "CGL (Combined Graduate Level)",
            desc: "Annual exam for staff members in different ministries and departments. Requires graduation.",
            icon: <GraduationCap className="text-blue-600" />
        },
        {
            name: "JE (Junior Engineer)",
            desc: "Recruiting Engineers in Civil, Mechanical, Electrical, and Quantity Surveying fields.",
            icon: <Cpu className="text-purple-600" />
        },
        {
            name: "MTS (Multitasking Staff)",
            desc: "Recruiting candidates for multitasking roles in Central Government departments.",
            icon: <Users className="text-green-600" />
        },
        {
            name: "CPO (Central Police Organization)",
            desc: "For those joining the Police as Sub-inspectors in CAPFs and ASI in Police. Requires graduation.",
            icon: <ShieldCheck className="text-orange-600" />
        },
        {
            name: "CHSL (10+2 Level)",
            desc: "Recruitment for various departments with 12th pass eligibility criteria.",
            icon: <FileText className="text-red-600" />
        },
        {
            name: "GD (General Duty) Constable",
            desc: "Recruiting Constables for BSF, SSF, etc., mutually agreed by SSC and Home Affairs Ministry.",
            icon: <Award className="text-blue-700" />
        },
        {
            name: "Stenographer (Grade C & D)",
            desc: "All India level exam for recruiting Stenographers in various ministries and organizations.",
            icon: <Target className="text-indigo-600" />
        }
    ]

    const faqs = [
        {
            q: "What does the SSC exam mean?",
            a: "SSC stands for Staff Selection Commission; it is an important Indian organization that conducts exams for various posts under many departments. Candidates must clear these exams through hard work and preparation."
        },
        {
            q: "What is the difference between SSC and HSC?",
            a: "SSC means Staff Selection Commission (the recruiting body), whereas HSC stands for Higher School Certificate (12th Grade). These are completely different and should not be confused."
        },
        {
            q: "What is the qualification required for SSC exams?",
            a: "For applying for SSC, the candidate must be a minimum of 12th pass. However, many posts like CGL and CPO require graduation from a well-recognized university."
        },
        {
            q: "What is the full form of HSC and SSC in terms of certificates?",
            a: "In the context of schooling, HSC stands for Higher School Certificate (12th) and SSC stands for Secondary School Certificate (10th)."
        },
        {
            q: "How does the salary work in SSC?",
            a: "Salary varies across many posts and categories. Each post has a different level of commitment and work, leading to different salary levels."
        }
    ]

    return (
        <div className="min-h-screen w-full bg-slate-50">
            <Navbar />

            <main className="w-full">
                {/* Hero Section with News Fact */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>

                    <div className="relative container mx-auto px-4 z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-yellow-400/20">
                                <AlertCircle size={16} />
                                <span>Industry Insight: SSC & UPSC Success Correlation</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                                Empowering Aspirants with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                                    AI-Driven Excellence
                                </span>
                            </h1>
                            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 mb-12">
                                <p className="text-xl text-blue-100 leading-relaxed italic">
                                    &quot;Did you know? Candidates preparing for UPSC exams often have a higher success ratio in SSC exams due to overlapping difficulty levels. This is why online coaching that offers flexibility for both is booming.&quot;
                                </p>
                                <p className="text-blue-300 text-sm mt-4 font-semibold">— India Sarkari Naukri Survey</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is SSC Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">What is <span className="text-blue-600">SSC</span>?</h2>
                                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                    <p>
                                        The <strong>Staff Selection Commission (SSC)</strong> is a premier Indian organization
                                        under the Government of India that recruits staff for various posts in numerous
                                        Ministries and Departments.
                                    </p>
                                    <p>
                                        Whether you are a 12th-pass undergraduate (HSC) or a Graduate, SSC offers a transparent
                                        path to a stable and prestigious government career. The Commission decides on the
                                        exam pattern and syllabus, which are typically updated every 3-4 years to stay relevant.
                                    </p>
                                </div>

                                <div className="mt-10 grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Eligibility</h4>
                                        <p className="text-sm text-slate-600">Minimum 12th pass for some posts, Graduation required for most Grade B & C roles.</p>
                                    </div>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">Syllabus</h4>
                                        <p className="text-sm text-slate-600">Covers Aptitude, Reasoning, General Awareness, and English. Updated annually.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-[3rem] p-1 aspect-square md:aspect-video flex items-center justify-center text-white text-3xl font-bold text-center">
                                    <div className="bg-slate-900 w-full h-full rounded-[2.9rem] flex flex-col items-center justify-center p-12">
                                        <TrendingUp size={64} className="mb-6 text-blue-400" />
                                        <p className="mb-4">Your Interest Defines Your Career</p>
                                        <span className="text-sm font-normal text-slate-400">Pursue success where your passion lies—whether it&apos;s Engineering, Policing, or Administration.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Help with AI Section */}
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How <span className="text-blue-400">Athena AI</span> Helps You Clear</h2>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                Preparation without data is just guessing. Our AI coach Athena transforms your hard work into smart work.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Weakness Identification",
                                    desc: "Athena analyzes every wrong answer to identify whether your struggle is with concepts, speed, or accuracy.",
                                    icon: <Target className="text-blue-400" />
                                },
                                {
                                    title: "Dynamic Study Plans",
                                    desc: "Unlike static schedules, our AI adjusts your daily goals based on your mock test performance.",
                                    icon: <TrendingUp className="text-indigo-400" />
                                },
                                {
                                    title: "Rank Prediction",
                                    desc: "Get an accurate estimate of your All-India Rank based on thousands of real test-taker data points.",
                                    icon: <Award className="text-yellow-400" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                                    <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diverse Exams Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Exams We Cover</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                Comprehensive specialized mock tests for the entire SSC ecosystem.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {examCategories.map((exam, i) => (
                                <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl transition-all hover:bg-white flex flex-col">
                                    <div className="p-3 bg-white shadow-sm rounded-xl w-fit mb-6">{exam.icon}</div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{exam.name}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{exam.desc}</p>
                                    <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                                        Explore Tests <ChevronRight size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-slate-600">Clear your doubts about SSC recruitment and career paths.</p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-4">
                                        <HelpCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                                        {faq.q}
                                    </h4>
                                    <div className="pl-9 text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent opacity-50"></div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10 font-hindi">तैयारी जीत की, AI के साथ</h2>
                            <p className="text-xl text-blue-100 mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
                                Join thousands of successful candidates. Start your SSC journey today with our AI-powered mock tests.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 relative z-10">
                                <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-blue-800/20">
                                    Get Started <ChevronRight size={20} />
                                </button>
                                <button className="bg-blue-700/50 backdrop-blur-md text-white border border-blue-400/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors">
                                    View Success Stories
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

