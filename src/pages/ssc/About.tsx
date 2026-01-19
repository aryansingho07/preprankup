import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMockTestCTA from '@/components/FloatingMockTestCTA';
import { BookOpen, PieChart, Users, Award, ChevronRight, Building, Calendar, Users2, ShieldCheck, Briefcase, GraduationCap, CheckCircle, Lightbulb, Rocket, Target, TrendingUp, FileText, Heart, Shield } from 'lucide-react';

// Easing function for smooth transitions
const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Interpolate between two colors
const interpolateColor = (color1: number[], color2: number[], factor: number): number[] => {
    return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
};

const TIER_I_DATA = [
    { subject: 'General Intelligence & Reasoning', qs: 25, marks: 50, duration: '60 Minutes' },
    { subject: 'General Awareness', qs: 25, marks: 50, duration: '(80 for VH)' },
    { subject: 'Quantitative Aptitude', qs: 25, marks: 50, duration: '' },
    { subject: 'English Language', qs: 25, marks: 50, duration: '' }
];

const TIER_II_DATA = [
    { paper: 'Paper I (Sec I)', subject: 'Maths + Reasoning', qs: '30+30', marks: '180', duration: '60 Min' },
    { paper: 'Paper I (Sec II)', subject: 'English + Gen Awareness', qs: '45+25', marks: '210', duration: '60 Min' },
    { paper: 'Paper I (Sec III)', subject: 'Computer Knowledge', qs: '20', marks: '60', duration: '15 Min' },
    { paper: 'Paper I (Sess II)', subject: 'Data Entry Speed Test', qs: '1 Task', marks: '-', duration: '15 Min' },
    { paper: 'Paper II', subject: 'Statistics', qs: '100', marks: '200', duration: '120 Min' }
];

const SSC_FUNCTIONS = [
    "Recruitment for Group 'B' posts in Ministries/Dept of Govt. of India",
    "Recruitment for non-technical Group 'C' posts",
    "Conducting exams and interviews for posts within its purview",
    "Conducting departmental exams for promotion",
    "Conducting periodical typewriting tests in Hindi & English",
    "Performing other functions entrusted by Central Govt."
];

const VACANCY_DATA = [
    { year: '2024', cgl: '17,727', chsl: '3,712' },
    { year: '2023', cgl: '7,859', chsl: '1,762' },
    { year: '2022', cgl: '37,409', chsl: '3,242' },
    { year: '2021', cgl: '7,686', chsl: '6,013' }
];

const GROUP_B_POSTS = [
    "Assistant Section Officer (CSS, IB, Railways, MEA, AFHQ, MeitY)",
    "Inspector / Executive Assistant (CBDT, CBIC, Dept of Posts)",
    "Sub-Inspector / JIO (CBI, NIA, Narcotics Control Bureau)",
    "Assistant Enforcement Officer (Directorate of Enforcement)",
    "Divisional Accountant (Offices under C&AG)",
    "Junior Statistical Officer (M/o Statistics)",
    "Research Assistant (National Human Rights Commission)"
];

const GROUP_C_POSTS = [
    "Auditor (Offices under C&AG, CGDA)",
    "Accountant / Junior Accountant",
    "Tax Assistant (CBDT, CBIC)",
    "Senior Secretariat Assistant / UDC",
    "Sub-Inspector (Central Bureau of Narcotics)",
    "Postal Assistant / Sorting Assistant",
    "Senior Administrative Assistant (MES, MoD)"
];

const BENEFITS = [
    { en: 'AI-powered personalized study plans', hi: 'AI से व्यक्तिगत अध्ययन योजना', color: 'text-blue-500' },
    { en: 'Real exam environment simulation', hi: 'असली परीक्षा जैसा माहौल', color: 'text-purple-500' },
    { en: 'Detailed performance analytics', hi: 'विस्तृत प्रदर्शन विश्लेषण', color: 'text-emerald-500' },
    { en: 'Expert-designed question bank', hi: 'विशेषज्ञों द्वारा बनाए प्रश्न', color: 'text-orange-500' },
    { en: 'Regular content updates', hi: 'नियमित कंटेंट अपडेट', color: 'text-pink-500' },
    { en: '24/7 access on any device', hi: 'किसी भी डिवाइस पर 24/7 एक्सेस', color: 'text-cyan-500' }
];

const CAREER_REASONS = [
    {
        title: "Job Security",
        desc: "Unlike the private sector jobs, government and public sector jobs are very stable. Job prospects are relatively unaffected by recession or market forces.",
        icon: <ShieldCheck className="text-emerald-500" size={24} />
    },
    {
        title: "Financial Security",
        desc: "Absolute financial security with salaries credited without delay. Includes emoluments for accidents, health hazards, and maternity cases.",
        icon: <TrendingUp className="text-blue-500" size={24} />
    },
    {
        title: "Perks & Allowances",
        desc: "Besides financial stability, these jobs come with Provident fund, pension scheme, generous house and travel allowances, and medical benefits.",
        icon: <Award className="text-orange-500" size={24} />
    },
    {
        title: "Opportunities & Promotions",
        desc: "Timely and equal promotion schemes. Interdisciplinary programs for personal and professional growth.",
        icon: <Rocket className="text-purple-500" size={24} />
    },
    {
        title: "Work-Life Balance",
        desc: "Fixed working hours, all national and regional holidays, and generous maternity leaves and compensations.",
        icon: <Users2 className="text-cyan-500" size={24} />
    },
    {
        title: "Contributing to Society",
        desc: "The gratification of being able to help and contribute to the society and the people in several different ways.",
        icon: <Heart className="text-rose-500" size={24} />
    }
];

const EXAM_DETAILS = [
    {
        name: "CGL Exam",
        fullName: "Combined Graduate Level",
        desc: "Selects staff for different ministries and departments. Requirement: Graduate from a recognized university.",
        icon: <GraduationCap size={20} className="text-blue-500" />
    },
    {
        name: "CHSL Exam",
        fullName: "Combined Higher Secondary Level",
        desc: "Recruitment for various departments and categories with standardized eligibility criteria.",
        icon: <BookOpen size={20} className="text-indigo-500" />
    },
    {
        name: "MTS Exam",
        fullName: "Multitasking Staff",
        desc: "Recruits candidates for multitasking positions within the Central Government of India.",
        icon: <Users size={20} className="text-emerald-500" />
    },
    {
        name: "JE Exam",
        fullName: "Junior Engineer",
        desc: "Recruits for Civil, Mechanical, Electrical, and Quantity Surveying roles across departments.",
        icon: <Building size={20} className="text-orange-500" />
    },
    {
        name: "CPO Exam",
        fullName: "Central Police Organization",
        desc: "For Sub-inspectors and Assistant Sub-Inspectors in Police and Armed Forces. Requires graduation.",
        icon: <Shield size={20} className="text-rose-500" />
    },
    {
        name: "GD Exam",
        fullName: "General Duty Constable",
        desc: "For BSF, SSF, etc. Recruitment done via Memorandum of Understanding with Home Affairs.",
        icon: <Target size={20} className="text-purple-500" />
    },
    {
        name: "Stenographer",
        fullName: "Grade C & D",
        desc: "Non-gazetted posts across various ministries. An All India Level Examination conducted annually.",
        icon: <FileText size={20} className="text-cyan-500" />
    }
];

const AboutSSC = () => {
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

    // Color palette logic (same as Home/Index for consistency)
    const softPink = [255, 220, 225];
    const warmPeach = [255, 230, 220];
    const creamBase = [255, 252, 250];
    const pureWhite = [255, 255, 255];

    let colorBlend: number;
    if (scrollProgress <= 0.5) {
        colorBlend = easeInOutCubic(scrollProgress * 2);
    } else {
        colorBlend = 1 - easeInOutCubic((scrollProgress - 0.5) * 2);
    }

    const currentPink = interpolateColor(softPink, pureWhite, colorBlend);
    const currentPeach = interpolateColor(warmPeach, pureWhite, colorBlend);
    const currentCream = interpolateColor(creamBase, pureWhite, colorBlend);

    const pinkOpacity = Math.max(0.03, 0.55 * (1 - colorBlend * 0.95));
    const peachOpacity = Math.max(0.02, 0.45 * (1 - colorBlend * 0.92));
    const ambientOpacity = Math.max(0.01, 0.3 * (1 - colorBlend * 0.88));

    const bgR = currentCream[0];
    const bgG = currentCream[1];
    const bgB = currentCream[2];

    return (
        <div
            className="min-h-screen overflow-x-hidden transition-colors duration-500 ease-out"
            style={{
                backgroundColor: `rgb(${bgR}, ${bgG}, ${bgB})`
            }}
        >
            <Navbar />
            <div className="relative pt-32 pb-20">
                {/* Background gradients */}
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: `
              radial-gradient(ellipse 120% 50% at 50% 15%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity}) 0%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity * 0.3}) 40%, 
                transparent 70%),
              radial-gradient(ellipse 100% 40% at 70% 8%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity}) 0%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity * 0.25}) 50%, 
                transparent 75%)
            `,
                        transition: 'background 0.15s ease-out'
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Header section */}
                        <div className="text-center mb-20 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 mb-6 shadow-sm hover:scale-105 transition-transform cursor-default">
                                <Rocket size={18} />
                                <span className="text-sm font-bold tracking-wide uppercase">SSC INSIGHT HUB</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-display font-bold text-graphite-900 mb-6 leading-tight">
                                All About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">SSC Exams</span>
                            </h1>
                            <p className="text-xl text-graphite-600 font-semibold leading-relaxed max-w-2xl mx-auto">
                                Everything you need to know about the Staff Selection Commission, its functions, and recruitment process.
                            </p>
                        </div>

                        {/* Introduction Card */}
                        <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] mb-12 transform transition-all hover:scale-[1.01] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
                            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 flex-shrink-0 flex items-center justify-center shadow-xl shadow-blue-200 group-hover:rotate-3 transition-transform">
                                    <ShieldCheck className="text-white" size={40} />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold text-graphite-900">What is SSC?</h2>
                                    <p className="text-graphite-700 leading-relaxed font-semibold">
                                        The <span className="text-blue-600 font-bold">Staff Selection Commission (SSC)</span> is an organization under the Government of India to recruit staff for various posts in the various Ministries and Departments.
                                    </p>
                                    <p className="text-graphite-600 leading-relaxed text-sm font-medium">
                                        A job under the SSC is considered one of the most prestigious jobs in the country. With excellent perks, emoluments, and esteem, these jobs are highly sought after, with over 14 lakh+ candidates appearing annually.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose SSC Section */}
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-display font-bold text-graphite-900 mb-4">Why a Career in SSC?</h2>
                                <p className="text-graphite-600 font-medium max-w-2xl mx-auto">Explore the advantages that make SSC jobs some of the most desired career paths in India.</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {CAREER_REASONS.map((reason, i) => (
                                    <div key={i} className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                        <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-inner group-hover:scale-110 transition-transform">
                                            {reason.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-graphite-900 mb-2">{reason.title}</h3>
                                        <p className="text-sm text-graphite-600 leading-relaxed font-medium">{reason.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Section from Ref UI */}
                        <div className="mb-20">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-graphite-900 mb-2">Why Prepare with PrepRankUp?</h3>
                                <p className="text-graphite-500 font-medium font-hindi">आपकी सफलता के लिए हमारी विशेषताएं</p>
                            </div>
                            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {BENEFITS.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm hover:shadow-md hover:bg-white transition-all group">
                                        <CheckCircle size={20} className={`${benefit.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                                        <div>
                                            <span className="text-graphite-900 font-bold text-sm block mb-1 leading-tight">{benefit.en}</span>
                                            <span className="block text-xs text-graphite-400 font-hindi">{benefit.hi}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* History Section Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100">
                                    <Calendar size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-graphite-900 mb-4">Foundation</h3>
                                <p className="text-graphite-600 text-sm leading-relaxed">
                                    Recommended by the Estimates Committee in its 47th Report (1967-68) for recruitment to lower category posts. Formed as Subordinate Service Commission on 4 November 1975.
                                </p>
                            </div>
                            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                                    <Building size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-graphite-900 mb-4">Evolution</h3>
                                <p className="text-graphite-600 text-sm leading-relaxed">
                                    Renamed as Staff Selection Commission on 26 September 1977. Headquartered in New Delhi with seven regional offices across India for smooth exam conduct.
                                </p>
                            </div>
                        </div>

                        {/* Exam Pattern Table (Image 1 Data) */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <PieChart className="text-white" size={20} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-graphite-900">Exam Pattern & Tiers</h2>
                            </div>

                            <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-[2rem] overflow-hidden shadow-2xl">
                                <div className="bg-graphite-900 text-white p-6">
                                    <h3 className="text-lg font-bold">Tier - I Examination Structure</h3>
                                    <p className="text-white/60 text-xs">Computer Based Written Examination (Objective MCQ)</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-graphite-50/50 border-b border-graphite-100">
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider">Subject</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider text-center">Qs</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider text-center">Marks</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-graphite-50">
                                            {TIER_I_DATA.map((row, i) => (
                                                <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                                                    <td className="px-6 py-5 text-sm font-bold text-graphite-700 group-hover:text-blue-600">{row.subject}</td>
                                                    <td className="px-6 py-5 text-sm font-bold text-graphite-900 text-center">{row.qs}</td>
                                                    <td className="px-6 py-5 text-sm font-black text-blue-600 text-center">{row.marks}</td>
                                                    <td className="px-6 py-5 text-sm text-graphite-500 font-bold">{row.duration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-6 bg-blue-50/30 border-t border-white">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-xs text-graphite-600 font-medium">
                                            <ChevronRight size={14} className="text-blue-500" />
                                            Negative marking: 0.5 marks per wrong answer
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-graphite-600 font-medium">
                                            <ChevronRight size={14} className="text-blue-500" />
                                            Questions will be objective type MCQs in Hindi/English
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tier - II Pattern */}
                            <div className="mt-12 bg-white/90 backdrop-blur-2xl border border-white rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in">
                                <div className="bg-graphite-900 text-white p-6">
                                    <h3 className="text-lg font-bold">Tier - II Examination Structure</h3>
                                    <p className="text-white/60 text-xs">Computer Based Written Examination (MCQ + Data Entry)</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-graphite-50/50 border-b border-graphite-100">
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider">Paper/Section</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider">Subject</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider text-center">Qs</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider text-center">Marks</th>
                                                <th className="px-6 py-4 text-xs font-bold text-graphite-400 uppercase tracking-wider">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-graphite-50">
                                            {TIER_II_DATA.map((row, i) => (
                                                <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                                                    <td className="px-6 py-5 text-sm font-black text-graphite-900">{row.paper}</td>
                                                    <td className="px-6 py-5 text-sm font-bold text-graphite-700 group-hover:text-blue-600">{row.subject}</td>
                                                    <td className="px-6 py-5 text-sm font-bold text-graphite-900 text-center">{row.qs}</td>
                                                    <td className="px-6 py-5 text-sm font-black text-blue-600 text-center">{row.marks}</td>
                                                    <td className="px-6 py-5 text-sm text-graphite-500 font-bold">{row.duration}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Major Functions Section */}
                        <div className="mb-20">
                            <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                                <h2 className="text-2xl font-bold text-graphite-900 mb-6 flex items-center gap-3">
                                    <Award className="text-orange-500" size={28} />
                                    Major Functions of SSC
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {SSC_FUNCTIONS.map((func, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-graphite-50/50 rounded-2xl border border-graphite-100">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                                            <p className="text-sm text-graphite-600 font-medium">{func}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Vacancy Data */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <Users2 className="text-white" size={20} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-graphite-900">Recent Vacancies</h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {VACANCY_DATA.map((item, i) => (
                                    <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                                        <span className="text-xs font-bold text-graphite-400 mb-2">{item.year}</span>
                                        <div className="text-center">
                                            <p className="text-2xl font-black font-display text-blue-600 group-hover:scale-110 transition-transform">{item.cgl}</p>
                                            <p className="text-[10px] uppercase font-bold text-graphite-400">SSC CGL</p>
                                        </div>
                                        <div className="mt-3 text-center border-t border-graphite-50 pt-3 w-full">
                                            <p className="text-2xl font-black font-display text-emerald-600 group-hover:scale-110 transition-transform">{item.chsl}</p>
                                            <p className="text-[10px] uppercase font-bold text-graphite-400">SSC CHSL</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Posts & Roles */}
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Briefcase className="text-white" size={20} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-graphite-900">Major Roles & Posts</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Group B */}
                                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Group B</span>
                                        <h3 className="text-xl font-bold text-graphite-900">Premium Roles (Level 7/6)</h3>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {GROUP_B_POSTS.map((post, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-white/40 rounded-xl border border-white/50">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span className="text-sm font-medium text-graphite-700">{post}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Group C */}
                                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="bg-graphite-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Group C</span>
                                        <h3 className="text-xl font-bold text-graphite-900">Support Roles (Level 5/4)</h3>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {GROUP_C_POSTS.map((post, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-white/40 rounded-xl border border-white/50">
                                                <div className="w-2 h-2 bg-graphite-400 rounded-full"></div>
                                                <span className="text-sm font-medium text-graphite-700">{post}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List of SSC Examinations */}
                        <div className="mb-20">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <FileText className="text-white" size={20} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-graphite-900">List of SSC Examinations</h2>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {EXAM_DETAILS.map((exam, i) => (
                                    <div key={i} className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white hover:bg-white transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {exam.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-lg font-bold text-graphite-900">{exam.name}</h3>
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 uppercase tracking-wider">{exam.fullName}</span>
                                            </div>
                                            <p className="text-sm text-graphite-600 font-medium leading-relaxed">{exam.desc}</p>
                                        </div>
                                        <ChevronRight className="text-graphite-300 md:block hidden group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" size={20} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SSC Syllabus Section */}
                        <div className="mb-20">
                            <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-display font-bold text-graphite-900 mb-6 flex items-center gap-3">
                                        <BookOpen className="text-indigo-600" size={28} />
                                        SSC Exam Syllabus & Pattern
                                    </h2>
                                    <div className="space-y-6">
                                        <p className="text-graphite-700 leading-relaxed font-medium">
                                            The Staff Selection Commission decides on the SSC exam pattern and syllabus for all related posts. Candidates must be aware of the whole exam pattern and syllabus to avoid last-minute confusion.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100">
                                                <h4 className="font-bold text-indigo-900 mb-2">Annual Updates</h4>
                                                <p className="text-sm text-indigo-800/80 font-medium">Exams are conducted annually for all posts. The syllabus is typically revised every 3-4 years to stay relevant with current standards.</p>
                                            </div>
                                            <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100">
                                                <h4 className="font-bold text-emerald-900 mb-2">Career Focus</h4>
                                                <p className="text-sm text-emerald-800/80 font-medium">SSC and Bank salaries differ significantly. It is advised to pursue your career in the field that aligns best with your interests.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Qualifications */}
                        <div className="bg-graphite-900 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                                    <GraduationCap size={32} />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Eligibility Criteria</h2>
                            </div>

                            <div className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Age Limits</h4>
                                        <ul className="space-y-4">
                                            <li className="flex flex-col">
                                                <span className="text-lg font-bold">18 - 32 Years</span>
                                                <span className="text-sm text-white/50">Junior Statistical Officer</span>
                                            </li>
                                            <li className="flex flex-col">
                                                <span className="text-lg font-bold">20 - 30 Years</span>
                                                <span className="text-sm text-white/50">ASO in CSS, Railways, MEA, IB</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Education</h4>
                                        <ul className="space-y-4">
                                            <li className="flex flex-col">
                                                <span className="text-lg font-bold">Bachelor's Degree</span>
                                                <span className="text-sm text-white/50">Mandatory for all 20+ job roles</span>
                                            </li>
                                            <li className="flex flex-col">
                                                <span className="text-lg font-bold">60% in Mathematics</span>
                                                <span className="text-sm text-white/50">Requirement for JSO (or Stats degree)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
            <FloatingMockTestCTA />
        </div>
    );
};

export default AboutSSC;
