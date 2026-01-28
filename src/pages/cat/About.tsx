import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMockTestCTA from '@/components/FloatingMockTestCTA';
import {
    BookOpen, PieChart, Users, Award, ChevronRight, Building,
    Calendar, Users2, ShieldCheck, Briefcase, GraduationCap,
    CheckCircle, Lightbulb, Rocket, Target, TrendingUp,
    FileText, Heart, Shield, HelpCircle, Check, ExternalLink,
    ArrowRight, Download, MousePointer2, Image as ImageIcon,
    CreditCard, Bell, Info, UserPlus, LogIn, Search
} from 'lucide-react';

const TOC_ITEMS = [
    { id: 'intro', label: 'What is CAT?', icon: ShieldCheck },
    { id: 'highlights', label: 'Exam Highlights', icon: Rocket },
    { id: 'importance', label: 'Why CAT?', icon: TrendingUp },
    { id: 'eligibility', label: 'Eligibility', icon: GraduationCap },
    { id: 'registration', label: 'How to Apply', icon: MousePointer2 },
    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
    { id: 'pattern', label: 'Exam Pattern', icon: PieChart },
    { id: 'prep', label: 'Last Minute Prep', icon: Lightbulb },
    { id: 'books', label: 'Recommended Books', icon: FileText },
    { id: 'faq', label: 'Common FAQs', icon: HelpCircle }
];

const HIGHLIGHTS_DATA = [
    { feature: 'Conducted By', details: 'IIM Kozhikode' },
    { feature: 'Mode of Exam', details: 'Computer-Based Test (CBT)' },
    { feature: 'Exam Date', details: 'Sunday, 30 November 2025' },
    { feature: 'Duration', details: '2 hours (40 mins per section)' },
    { feature: 'Exam Slots', details: '3 (Morning, Afternoon, Evening)' },
    { feature: 'Test Cities', details: '170+' },
    { feature: 'Registration Start', details: '1 August 2025' },
    { feature: 'Registration End', details: '13 September 2025' },
    { feature: 'Official Website', details: 'iimcat.ac.in' },
    { feature: 'Application Fee', details: '₹2,600 (Gen/OBC/EWS) / ₹1,300 (SC/ST/PwD)' },
    { feature: 'Admit Card', details: 'Expected from 5 November 2025' },
    { feature: 'Result Declaration', details: 'First week of January 2026' }
];

const B_SCHOOLS = [
    "FMS Delhi",
    "SPJIMR Mumbai",
    "MDI Gurgaon",
    "IIT Delhi (DMS)",
    "Sage University Indore",
    "IMT Ghaziabad",
    "IMI New Delhi"
];

const WHY_CAT = [
    {
        title: "Admissions to IIMs",
        desc: "Secure admission into prestigious IIMs and other top-ranked management institutes.",
        icon: <GraduationCap className="text-blue-500" size={24} />
    },
    {
        title: "Career Advancement",
        desc: "Access to high-paying jobs, corporate leadership roles, and a competitive edge globally.",
        icon: <TrendingUp className="text-emerald-500" size={24} />
    },
    {
        title: "Skill Development",
        desc: "Enhances leadership, logical thinking, problem-solving, and decision-making skills.",
        icon: <Rocket className="text-purple-500" size={24} />
    },
    {
        title: "Networking",
        desc: "Exposure to industry leaders, peers, and a strong alumni network for lifelong benefits.",
        icon: <Users2 className="text-orange-500" size={24} />
    }
];

const ELIGIBILITY = [
    {
        title: "Educational Qualifications",
        items: [
            "Bachelor's degree from a recognized university.",
            "Min 50% marks (or equivalent CGPA) for General, EWS, and OBC-NCL.",
            "Min 45% marks for SC, ST, and PwD candidates."
        ],
        icon: <Award className="text-blue-500" size={24} />
    },
    {
        title: "Age & Attempts",
        items: [
            "No age limit for appearing in CAT Exam 2025.",
            "No restriction on the number of attempts.",
            "Applicable for both freshers and working professionals."
        ],
        icon: <ShieldCheck className="text-emerald-500" size={24} />
    },
    {
        title: "Final-Year Students",
        items: [
            "Allowed to appear for the exam.",
            "Must complete degree requirements by June 2026.",
            "Require enrollment certificate from college/HoD."
        ],
        icon: <Calendar className="text-purple-500" size={24} />
    },
    {
        title: "Reservation Policy",
        items: [
            "SC: 15% | ST: 7.5% | OBC-NCL: 27%",
            "EWS: 10% | PwD: 5%",
            "Follows Government of India guidelines."
        ],
        icon: <Building className="text-orange-500" size={24} />
    }
];

const REG_STEPS = [
    { title: "Visit Official Site", desc: "Open iimcat.ac.in.", icon: <ExternalLink size={20} /> },
    { title: "Register", desc: "Enter name, DOB, email, mobile to create a profile.", icon: <UserPlus size={20} /> },
    { title: "Verify via OTP", desc: "Confirm both email and mobile.", icon: <ShieldCheck size={20} /> },
    { title: "Log In", desc: "Use User ID & Password sent to you.", icon: <LogIn size={20} /> },
    { title: "Fill Details", desc: "Add personal, academic, and work-ex details.", icon: <FileText size={20} /> },
    { title: "Choose Cities", desc: "Select up to 6 preferred test centers.", icon: <Target size={20} /> },
    { title: "Upload Docs", desc: "Photo, signature, category, and final-year certs.", icon: <ImageIcon size={20} /> },
    { title: "Review Form", desc: "Confirm all entries and spellings.", icon: <Search size={20} /> },
    { title: "Pay Fee", desc: "Via Net Banking / UPI / Credit or Debit Card.", icon: <CreditCard size={20} /> },
    { title: "Save Proofs", desc: "Download application PDF and payment receipt.", icon: <Download size={20} /> }
];

const SYLLABUS_DATA = [
    {
        section: "VARC",
        topics: ["Reading Comprehension", "Para Jumbles", "Para Summary", "Odd Sentence Out", "Sentence Completion", "Grammar & Vocabulary"],
        count: "24 Questions",
        difficulty: "Moderate"
    },
    {
        section: "DILR",
        topics: ["Caselets & Sets", "Tables, Charts, Graphs", "Seating Arrangements", "Blood Relations", "Puzzles", "Binary Logic"],
        count: "20-22 Questions",
        difficulty: "Moderate - High"
    },
    {
        section: "QA",
        topics: ["Arithmetic (Profit/Loss, Ratio)", "Algebra (Equations, Progressions)", "Geometry & Mensuration", "Number System", "Modern Math (Probability, P&C)"],
        count: "22 Questions",
        difficulty: "High"
    }
];

const PATTERN_DATA = [
    { section: 'VARC', qs: 24, marks: 72, time: '40 Mins' },
    { section: 'DILR', qs: '20-22', marks: 66, time: '40 Mins' },
    { section: 'QA', qs: 22, marks: 66, time: '40 Mins' },
    { section: 'Total', qs: '66-68', marks: 204, time: '120 Mins' }
];

const PREP_TIPS = [
    { title: "Revise Pattern", desc: "Focus on high-weightage topics like RC, Puzzles, and Arithmetic." },
    { title: "Strengthen Basics", desc: "Revisit QA formulas and DILR logic sets." },
    { title: "Focused Mocks", desc: "Simulate exam environment with 1-2 full mocks." },
    { title: "Time Management", desc: "Answer easy questions first within each 40-min window." },
    { title: "Accuracy First", desc: "Avoid blind guessing due to negative marking (-1)." },
    { title: "PYQs", desc: "Skim last 5 years' CAT papers for recurring topics." },
    { title: "Stay Calm", desc: "Maintain routine and keep exam-day essentials ready." }
];

const BOOKS = [
    { section: 'QA', book: 'Quantitative Aptitude for CAT', author: 'Arun Sharma' },
    { section: 'DILR', book: 'LR and DI for the CAT', author: 'Nishit K. Sinha' },
    { section: 'VARC', book: 'Verbal Ability & RC for CAT', author: 'A. Sharma & M. Upadhyay' }
];

const CAT_FAQ = [
    {
        q: "What is the eligibility criteria for CAT 2025?",
        a: "Bachelor's degree with 50% (45% for SC/ST/PwD). Final-year students can apply if degree completes by June 2026."
    },
    {
        q: "What is the exam date for CAT 2025?",
        a: "Expected on 30th November 2025 (Last Sunday of November)."
    },
    {
        q: "How many sections are there in CAT 2025?",
        a: "Three sections: VARC, DILR, and QA, each with a 40-minute sectional limit."
    },
    {
        q: "What is the CAT exam fee for 2025?",
        a: "₹2,600 for General/OBC/EWS and ₹1,300 for SC/ST/PwD."
    },
    {
        q: "What is a good score in CAT for IIM admission?",
        a: "99+ percentile for Old IIMs (ABC); 90-95+ for New IIMs and top private B-schools."
    }
];

// Interpolation functions (same as SSC for visual parity)
const easeInOutCubic = (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const interpolateColor = (color1: number[], color2: number[], factor: number): number[] => color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));

const AboutCAT = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
        setScrollProgress(progress);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Color palette logic (Blue/Indigo theme for CAT)
    const softBlue = [224, 242, 255];
    const softIndigo = [238, 242, 255];
    const creamBase = [255, 252, 250];
    const pureWhite = [255, 255, 255];

    let colorBlend: number;
    if (scrollProgress <= 0.5) {
        colorBlend = easeInOutCubic(scrollProgress * 2);
    } else {
        colorBlend = 1 - easeInOutCubic((scrollProgress - 0.5) * 2);
    }

    const currentBlue = interpolateColor(softBlue, pureWhite, colorBlend);
    const currentIndigo = interpolateColor(softIndigo, pureWhite, colorBlend);
    const currentCream = interpolateColor(creamBase, pureWhite, colorBlend);

    const blueOpacity = Math.max(0.04, 0.5 * (1 - colorBlend * 0.95));
    const indigoOpacity = Math.max(0.03, 0.4 * (1 - colorBlend * 0.92));

    const bgR = currentCream[0];
    const bgG = currentCream[1];
    const bgB = currentCream[2];

    return (
        <div
            className="min-h-screen overflow-x-hidden transition-colors duration-500 ease-out"
            style={{ backgroundColor: `rgb(${bgR}, ${bgG}, ${bgB})` }}
        >
            <Navbar />

            <div className="relative pt-32 pb-20">
                {/* Background gradients */}
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: `
                            radial-gradient(ellipse 120% 50% at 50% 15%, 
                                rgba(${currentBlue.join(',')}, ${blueOpacity}) 0%, 
                                rgba(${currentBlue.join(',')}, ${blueOpacity * 0.3}) 40%, 
                                transparent 70%),
                            radial-gradient(ellipse 100% 40% at 70% 8%, 
                                rgba(${currentIndigo.join(',')}, ${indigoOpacity}) 0%, 
                                rgba(${currentIndigo.join(',')}, ${indigoOpacity * 0.25}) 50%, 
                                transparent 75%)
                        `,
                        transition: 'background 0.15s ease-out'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                        {/* Sticky Sidebar - Desktop */}
                        <aside className="hidden lg:block w-72 flex-shrink-0">
                            <div className="sticky top-32 space-y-4">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-sm">
                                    <h3 className="text-sm font-black text-graphite-900 uppercase tracking-widest mb-6 px-2">Table of Contents</h3>
                                    <nav className="space-y-1">
                                        {TOC_ITEMS.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    setActiveSection(item.id);
                                                }}
                                                className={cn(
                                                    "w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-sm font-bold transition-all duration-300",
                                                    activeSection === item.id
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                                        : "text-graphite-500 hover:bg-white/60 hover:text-blue-600"
                                                )}
                                            >
                                                <item.icon size={18} />
                                                {item.label}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
                                    <h4 className="font-bold mb-2 text-white">Targeting IIM?</h4>
                                    <p className="text-xs text-white/80 mb-4 leading-relaxed">Boost your percentile with our specialized CAT mock test series.</p>
                                    <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-blue-50 transition-colors">Take a Mock</button>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <div className="flex-grow max-w-4xl space-y-24 pb-20">

                            {/* Intro Section */}
                            <div id="intro" className="text-center lg:text-left pt-8 scroll-mt-32">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 mb-6 shadow-sm hover:scale-105 transition-transform">
                                    <Rocket size={18} />
                                    <span className="text-sm font-bold tracking-wide uppercase">CAT 2025 Resource Portal</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-graphite-900 mb-6 leading-tight">
                                    Pathway to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white">Elite B-Schools</span>
                                </h1>
                                <p className="text-xl text-graphite-600 font-semibold leading-relaxed max-w-2xl">
                                    Everything you need to know about CAT 2025 – from notification highlights to preparation strategies.
                                </p>

                                <div className="mt-12 bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-sm transform hover:scale-[1.01] transition-all group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
                                    <div className="flex flex-col md:flex-row items-start gap-8 relative z-10 text-left">
                                        <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-xl shadow-blue-200">
                                            <ShieldCheck className="text-white" size={40} />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-3xl font-bold text-graphite-900">What is the CAT Exam?</h2>
                                            <p className="text-graphite-700 leading-relaxed font-semibold">
                                                The <span className="text-blue-600 font-bold">Common Admission Test (CAT)</span> is a national-level MBA entrance test conducted annually by the Indian Institutes of Management (IIMs).
                                            </p>
                                            <p className="text-graphite-600 leading-relaxed text-sm font-medium">
                                                A good CAT score doesn’t just open doors to the IIMs but is also accepted by over 1000 top B-schools across India. It's the gateway to India's most prestigious management institutes and a successful career.
                                            </p>
                                            <div className="pt-4 flex flex-wrap gap-4">
                                                {B_SCHOOLS.slice(0, 4).map((school, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-black rounded-full uppercase tracking-tighter shadow-sm">{school}</span>
                                                ))}
                                                <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-black rounded-full uppercase tracking-tighter">& more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Highlights Section */}
                            <section id="highlights" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
                                        <Rocket className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">CAT 2025 Key Highlights</h2>
                                </div>

                                <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[2rem] overflow-hidden shadow-2xl">
                                    <div className="bg-graphite-900 text-white p-8">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Info size={20} className="text-blue-400" />
                                            <h3 className="text-lg font-bold text-white">Official Notification Summary</h3>
                                        </div>
                                        <p className="text-white/60 text-xs font-medium">Notification released by IIM Kozhikode</p>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-graphite-50/50 border-b border-graphite-100">
                                                    <th className="px-8 py-4 text-xs font-black text-graphite-400 uppercase tracking-widest">Feature</th>
                                                    <th className="px-8 py-4 text-xs font-black text-graphite-400 uppercase tracking-widest">Details</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-graphite-50">
                                                {HIGHLIGHTS_DATA.map((row, i) => (
                                                    <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                        <td className="px-8 py-5 text-sm font-black text-graphite-900 uppercase tracking-tight group-hover:text-blue-600">{row.feature}</td>
                                                        <td className="px-8 py-5 text-sm font-bold text-graphite-700">{row.details}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Importance Section */}
                            <section id="importance" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10 text-left">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-100">
                                        <TrendingUp className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Why is CAT Important?</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {WHY_CAT.map((item, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white hover:bg-white transition-all group">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-graphite-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-graphite-600 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Eligibility Section */}
                            <section id="eligibility" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10 text-left">
                                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-100">
                                        <GraduationCap className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Eligibility Criteria</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {ELIGIBILITY.map((card, i) => (
                                        <div key={i} className="bg-white/80 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">{card.icon}</div>
                                                <h3 className="text-lg font-bold text-graphite-900">{card.title}</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {card.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3">
                                                        <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-graphite-600 font-medium leading-tight">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Registration Section */}
                            <section id="registration" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100">
                                        <MousePointer2 className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">How to Apply?</h2>
                                </div>

                                <div className="space-y-6 relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:left-8"></div>
                                    {REG_STEPS.map((step, i) => (
                                        <div key={i} className="relative pl-14 md:pl-20 group">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-indigo-50 rounded-2xl flex items-center justify-center z-10 shadow-sm group-hover:border-indigo-500 transition-all md:w-16 md:h-16 text-indigo-500">
                                                {step.icon}
                                            </div>
                                            <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 border border-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-lg font-bold text-graphite-900">Step {i + 1}: {step.title}</h3>
                                                <p className="text-sm text-graphite-600 font-medium leading-relaxed mt-1">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Syllabus Section */}
                            <section id="syllabus" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
                                        <BookOpen className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Exam Syllabus</h2>
                                </div>

                                <div className="grid gap-6">
                                    {SYLLABUS_DATA.map((s, i) => (
                                        <div key={i} className="bg-white/80 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-sm group">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl font-black">{s.section}</div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-graphite-900">{s.section === 'VARC' ? 'Verbal Ability & RC' : s.section === 'DILR' ? 'Data Interpretation & LR' : 'Quantitative Ability'}</h3>
                                                        <p className="text-sm text-graphite-500 font-bold uppercase tracking-widest">{s.difficulty} Difficulty</p>
                                                    </div>
                                                </div>
                                                <span className="px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-black rounded-full uppercase tracking-widest pointer-events-none">{s.count}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {s.topics.map((topic, j) => (
                                                    <span key={j} className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-bold rounded-xl border border-gray-100/50 group-hover:bg-white transition-colors">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Pattern Section */}
                            <section id="pattern" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
                                        <PieChart className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Exam Pattern 2025</h2>
                                </div>

                                <div className="bg-graphite-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                    <div className="overflow-x-auto relative z-10">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-blue-400">Section</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-center">Questions</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-center">Marks</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {PATTERN_DATA.map((row, i) => (
                                                    <tr key={i} className={cn("hover:bg-white/5 transition-colors", row.section === 'Total' && "bg-white/5")}>
                                                        <td className="px-6 py-5 font-black text-sm uppercase tracking-tight">{row.section}</td>
                                                        <td className="px-6 py-5 text-sm font-bold text-white/60 text-center">{row.qs}</td>
                                                        <td className="px-6 py-5 text-sm font-black text-blue-400 text-center">{row.marks}</td>
                                                        <td className="px-6 py-5 text-sm font-bold text-white/40">{row.time}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs">+3</div>
                                            <span className="text-xs font-bold text-white/70">Correct Answer</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-black text-xs">-1</div>
                                            <span className="text-xs font-bold text-white/70">Wrong MCQ</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-gray-500/20 text-gray-400 flex items-center justify-center font-black text-xs">0</div>
                                            <span className="text-xs font-bold text-white/70">TITA (No Negative)</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Prep Tips Section */}
                            <section id="prep" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10 text-left">
                                    <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-100">
                                        <Lightbulb className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Last Minute Strategy</h2>
                                </div>

                                <div className="grid gap-4">
                                    {PREP_TIPS.map((tip, i) => (
                                        <div key={i} className="flex gap-6 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white shadow-sm hover:translate-x-2 transition-all">
                                            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex-shrink-0 flex items-center justify-center font-black text-sm">{i + 1}</div>
                                            <div>
                                                <h3 className="text-lg font-bold text-graphite-900">{tip.title}</h3>
                                                <p className="text-sm text-graphite-600 font-medium leading-relaxed">{tip.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Books Section */}
                            <section id="books" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center shadow-xl shadow-rose-100">
                                        <FileText className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">Recommended Books</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {BOOKS.map((book, i) => (
                                        <div key={i} className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/80 shadow-sm text-center group hover:bg-white transition-all">
                                            <div className="w-16 h-16 rounded-3xl bg-gray-50 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <BookOpen size={32} className="text-rose-600" />
                                            </div>
                                            <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">{book.section} Focus</span>
                                            <h3 className="mt-4 text-base font-bold text-graphite-900 leading-tight">{book.book}</h3>
                                            <p className="mt-2 text-xs text-graphite-500 font-bold italic">By {book.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* FAQ Section */}
                            <section id="faq" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-graphite-900 rounded-2xl flex items-center justify-center shadow-xl shadow-graphite-100">
                                        <HelpCircle className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">CAT 2025 FAQs</h2>
                                </div>

                                <div className="space-y-4">
                                    {CAT_FAQ.map((faq, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-md rounded-3xl border border-white overflow-hidden hover:bg-white transition-all group">
                                            <div className="p-6 cursor-pointer flex items-center justify-between gap-4">
                                                <h3 className="text-sm font-bold text-graphite-900 mt-2 leading-relaxed">{faq.q}</h3>
                                                <ChevronRight size={18} className="text-graphite-300 group-hover:text-blue-600 transition-colors" />
                                            </div>
                                            <div className="px-6 pb-6 border-t border-graphite-50 mt-[-1px]">
                                                <p className="pt-4 text-sm text-graphite-600 leading-relaxed font-medium">{faq.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <FloatingMockTestCTA />
        </div>
    );
};

export default AboutCAT;
