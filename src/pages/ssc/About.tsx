import { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMockTestCTA from '@/components/FloatingMockTestCTA';
import { BookOpen, PieChart, Users, Award, ChevronRight, Building, Calendar, Users2, ShieldCheck, Briefcase, GraduationCap, CheckCircle, Lightbulb, Rocket, Target, TrendingUp, FileText, Heart, Shield, HelpCircle, Check, ExternalLink, ArrowRight, Download, MousePointer2, Image as ImageIcon, CreditCard, Bell } from 'lucide-react';

const APPLY_STEPS = [
    {
        title: "Visit the Official Site",
        description: "Visit candidate portal on ssc.gov.in. Register as a new user by adding all necessary information. If already registered, log in using your username and password.",
        icon: <ExternalLink className="text-blue-500" size={24} />,
        tip: "Keep your Aadhaar/ID details ready for registration."
    },
    {
        title: "Choose the Exam",
        description: "Select the specific exam (CGL, CHSL, etc.) you wish to take from the dashboard. Start or complete your application form.",
        icon: <MousePointer2 className="text-indigo-500" size={24} />,
        tip: "Check eligibility criteria before applying."
    },
    {
        title: "Upload Documents",
        description: "Scan and upload necessary images (photo and signature) and academic documents as per the specified size and format.",
        icon: <ImageIcon className="text-purple-500" size={24} />,
        tip: "Photo should be recent with a plain background."
    },
    {
        title: "Review Application",
        description: "Carefully check all entered details and uploaded documents. Ensure everything is accurate before final submission.",
        icon: <FileText className="text-emerald-500" size={24} />,
        tip: "You cannot edit most fields after final submission."
    },
    {
        title: "Submit Form",
        description: "Click on the submit option. You will be redirected to the payment gateway for the examination fee.",
        icon: <CheckCircle className="text-orange-500" size={24} />,
        tip: "Note down your application number for future reference."
    },
    {
        title: "Pay Examination Fee",
        description: "General/OBC male candidates: Rs. 100. Female, SC, ST, PwD, and Ex-servicemen: No fee. Pay online via SBI or offline via branch.",
        icon: <CreditCard className="text-rose-500" size={24} />,
        tip: "Keep a copy of the payment receipt."
    },
    {
        title: "Receive Confirmation",
        description: "Once paid, you will receive a confirmation. Eligible candidates will get admit cards before the exam date.",
        icon: <Bell className="text-cyan-500" size={24} />,
        tip: "Keep monitoring ssc.gov.in for updates."
    }
];

const SSC_FAQ = [
    {
        q: "What is SSC?",
        a: "The Staff Selection Commission (SSC) is an organisation under the Government of India that recruits staff for various posts in ministries, departments, and subordinate offices. Candidates take SSC exams to work in prestigious government roles."
    },
    {
        q: "Which SSC exams can I apply for?",
        a: "You can apply for several exams including SSC CGL (Combined Graduate Level), SSC GD (Constable), SSC CHSL (Combined Higher Secondary Level), SSC JE (Junior Engineer), SSC CPO (Central Police Organisation), SSC MTS (Multitasking Staff), SSC Stenographer, and SSC JHT (Junior Hindi Translator)."
    },
    {
        q: "How much is the SSC application fee?",
        a: "The examination fee is typically Rs. 100 for male candidates in General and OBC categories. Female candidates, ex-servicemen, and candidates belonging to SC, ST, or PwD categories are exempt from paying the fee."
    },
    {
        q: "How can I pay the examination fee?",
        a: "You can pay the fee online through the SBI portal (using net banking, credit/debit cards) or offline by generating a challan and visiting any SBI branch."
    },
    {
        q: "Where can I check the official details for SSC exams?",
        a: "All official details, notifications, and application portals are available at the official website: ssc.gov.in (previously ssc.nic.in)."
    },
    {
        q: "When will I get my admit card?",
        a: "If you are eligible and your application is accepted, you will typically receive your admit card or be able to download it from the regional SSC website 10-15 days before the examination date."
    }
];

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

const EXAM_TIMELINE = [
    { exam: 'SSC CGL', release: 'Dec 23, 2021', submission: 'Jan 23, 2022', date: 'April, 2022' },
    { exam: 'SSC GD', release: 'Feb 22, 2023', submission: 'March 31, 2023', date: 'June, 2023' },
    { exam: 'SSC CHSL', release: 'Feb 1, 2022', submission: 'March 7, 2022', date: 'May, 2022' },
    { exam: 'SSC JE', release: 'Nov 28, 2022', submission: 'Dec 27, 2022', date: 'March, 2023' },
    { exam: 'SSC CPO', release: 'August, 2022', submission: 'Sept, 2022', date: 'Dec, 2022' },
    { exam: 'SSC MTS', release: 'March 22, 2022', submission: 'April 30, 2022', date: 'June, 2022' },
    { exam: 'SSC Stenographer', release: 'Dec 5, 2022', submission: 'Dec 31, 2022', date: 'April, 2023' },
    { exam: 'SSC JHT', release: 'August 22, 2022', submission: 'Sept 21, 2022', date: 'Dec, 2022' }
];

const DETAILED_SYLLABUS = [
    {
        exam: "SSC CGL",
        tiers: [
            {
                title: "Tier I (Qualifying)",
                subjects: [
                    { name: "General Intelligence & Reasoning", topics: "Analogies, Symbolic/Number Classification, Space Orientation, Semantic Series, Figural Classification, Punched hole/pattern-folding & unfolding." },
                    { name: "General Awareness", topics: "Current Events, India and its neighboring countries, History, Culture, Geography, Economic Scene, General Policy & Scientific Research." },
                    { name: "Quantitative Aptitude", topics: "Computation of whole numbers, Decimals, Fractions, Relationships between numbers, Profit & Loss, Discount, Partnership Business, Mixture & Alligation." },
                    { name: "English Comprehension", topics: "Candidates' ability to understand correct English, his basic comprehension and writing ability, etc. would be tested." }
                ]
            },
            {
                title: "Tier II (Mains)",
                subjects: [
                    { name: "Mathematical Abilities", topics: "Number Systems, Fundamental arithmetical operations, Algebra, Geometry, Mensuration, Trigonometry, Statistics and Probability." },
                    { name: "Reasoning & General Intelligence", topics: "Semantic Analogy, Symbolic operations, Symbolic/ Number Analogy, Trends, Figural Analogy, Space Orientation." },
                    { name: "English Language & Comprehension", topics: "Vocabulary, grammar, sentence structure, synonyms, antonyms and its correct usage; Spot the Error, Fill in the Blanks." }
                ]
            }
        ]
    },
    {
        exam: "SSC GD",
        tiers: [
            {
                title: "Computer Based Exam",
                subjects: [
                    { name: "Intelligence & Reasoning", topics: "Analogies, Similarities and differences, spatial visualization, spatial orientation, visual memory." },
                    { name: "General Knowledge", topics: "History, Culture, Geography, Economic Scene, General Polity, Indian Constitution, Scientific Research." },
                    { name: "Elementary Mathematics", topics: "Number Systems, Computation of Whole Numbers, Decimals and Fractions, Fundamental arithmetical operations." }
                ]
            }
        ]
    },
    {
        exam: "SSC CHSL",
        tiers: [
            {
                title: "Tier I (Objective)",
                subjects: [
                    { name: "English Language", topics: "Spot the Error, Fill in the Blanks, Synonyms/ Homonyms, Antonyms, Spellings/ Detecting mis-spelt words." },
                    { name: "General Intelligence", topics: "Semantic Analogy, Symbolic operations, Symbolic/Number Analogy, Trends, Figural Analogy, Space Orientation." }
                ]
            },
            {
                title: "Tier II (Session I)",
                subjects: [
                    { name: "Maths & Reasoning", topics: "Number Systems, Fundamental arithmetical operations, Algebra, Geometry, Mensuration, Trigonometry." },
                    { name: "English & GA", topics: "Vocabulary, grammar, sentence structure, synonyms, antonyms; History, Culture, Geography, Economic Scene." }
                ]
            }
        ]
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

const ELIGIBILITY_DATA = [
    {
        exam: "SSC CGL",
        criteria: [
            { label: "Citizenship", value: "Indian, Nepal, Bhutan, or Tibetan Refugee (pre-1962)" },
            { label: "Age", value: "18-32 Years (depends on post)" },
            { label: "Education", value: "Bachelor's Degree from a recognized university" },
            { label: "Special", value: "JSO: 60% in 12th Math or Bachelor's with Stats" }
        ]
    },
    {
        exam: "SSC GD",
        criteria: [
            { label: "Citizenship", value: "Citizen of India" },
            { label: "Age", value: "18-23 Years" },
            { label: "Education", value: "10th Standard pass from recognized board" }
        ]
    },
    {
        exam: "SSC CHSL",
        criteria: [
            { label: "Citizenship", value: "Indian, Nepal, Bhutan, or Tibetan Refugee" },
            { label: "Age", value: "18-27 Years" },
            { label: "Education", value: "12th Standard pass from recognized board" }
        ]
    },
    {
        exam: "SSC JE",
        criteria: [
            { label: "Citizenship", value: "Indian, Nepal, or Bhutan" },
            { label: "Age", value: "Max 30-32 Years (depends on department)" },
            { label: "Education", value: "Degree/Diploma in Civil/Mech/Electrical Engineering" }
        ]
    }
];

const DETAILED_PATTERNS = [
    {
        exam: 'SSC CGL',
        details: 'Four tiers. Tier I & II online (MCQ), Tier III pen-paper (Descriptive), Tier IV Skill Test.',
        table: [
            { stage: 'Tier I', info: 'Objective MCQ (100 Qs, 4 Sections). Computer-based.' },
            { stage: 'Tier II', info: 'Paper 1: English (200 marks), Paper 2: Quant (200 marks).' },
            { stage: 'Tier III', info: 'Written (Hindi/English, 100 marks). Descriptive.' },
            { stage: 'Tier IV', info: 'Skill test or document verification.' }
        ]
    },
    {
        exam: 'SSC GD',
        details: 'CBT, PET, PST, and Medical Test.',
        table: [
            { stage: 'Stage 1', info: 'Objective MCQ (100 Qs). Subjects: Math, Reasoning, GS, Hindi/English.' },
            { stage: 'Stage 2', info: 'Physical Standard Test (PST).' },
            { stage: 'Stage 3', info: 'Medical Check-up & Physical Endurance (PET).' }
        ]
    },
    {
        exam: 'SSC CHSL',
        details: 'Three tiers. Online MCQ, Pen-paper, and Skill Test.',
        table: [
            { stage: 'Tier I', info: 'Objective MCQ (100 Qs, 200 Marks). Computer-based.' },
            { stage: 'Tier II', info: 'Written test. Descriptive questions.' },
            { stage: 'Tier III', info: 'Skills test or typing speed evaluation.' }
        ]
    }
];

const TOC_ITEMS = [
    { id: 'intro', label: 'What is SSC?', icon: ShieldCheck },
    { id: 'apply', label: 'How to Apply?', icon: MousePointer2 },
    { id: 'patterns', label: 'Exam Patterns', icon: PieChart },
    { id: 'eligibility', label: 'Eligibility', icon: GraduationCap },
    { id: 'dates', label: 'Exam Dates', icon: Calendar },
    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
    { id: 'faq', label: 'Common FAQs', icon: HelpCircle }
];
const AboutSSC = () => {
    const [activePatternTab, setActivePatternTab] = useState(0);
    const [activeSyllabusTab, setActiveSyllabusTab] = useState(0);
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
                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                        {/* Sticky Sidebar - Desktop Only */}
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
                                    <h4 className="font-bold mb-2">Ready to Start?</h4>
                                    <p className="text-xs text-white/80 mb-4 leading-relaxed">Practice with our AI-driven mock tests designed for SSC success.</p>
                                    <button className="w-full py-3 bg-white text-blue-600 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-blue-50 transition-colors">Start Mock Test</button>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <div className="flex-grow max-w-4xl space-y-24 pb-20">
                            {/* Header section */}
                            <div id="intro" className="text-center lg:text-left pt-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 mb-6 shadow-sm hover:scale-105 transition-transform cursor-default">
                                    <Rocket size={18} />
                                    <span className="text-sm font-bold tracking-wide uppercase">SSC INSIGHT HUB</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-graphite-900 mb-6 leading-tight">
                                    All About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">SSC Exams</span>
                                </h1>
                                <p className="text-xl text-graphite-600 font-semibold leading-relaxed max-w-2xl">
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

                            {/* How to Apply Section */}
                            <section id="apply" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100">
                                        <MousePointer2 className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">How to Apply for SSC?</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">एसएससी के लिए आवेदन कैसे करें?</p>
                                    </div>
                                </div>

                                <div className="space-y-6 relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:left-8"></div>

                                    {APPLY_STEPS.map((step, i) => (
                                        <div key={i} className="relative pl-14 md:pl-20 group">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-indigo-50 rounded-2xl flex items-center justify-center z-10 shadow-sm group-hover:border-indigo-500 group-hover:shadow-md transition-all md:w-16 md:h-16">
                                                {step.icon}
                                            </div>
                                            <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 border border-white/80 shadow-sm hover:shadow-md transition-all">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                                    <h3 className="text-lg font-bold text-graphite-900">Step {i + 1}: {step.title}</h3>
                                                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Official Process</span>
                                                </div>
                                                <p className="text-sm text-graphite-600 font-medium leading-relaxed mb-4">{step.description}</p>
                                                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1.5 rounded-xl">
                                                    <Lightbulb size={14} />
                                                    Pro-Tip: {step.tip}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Exam Pattern Section */}
                            <section id="patterns" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
                                        <PieChart className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">SSC Exam Patterns</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">एसएससी परीक्षा पैटर्न</p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-xl overflow-hidden">
                                    {/* Tabs */}
                                    <div className="flex overflow-x-auto no-scrollbar border-b border-graphite-100 bg-graphite-50/30">
                                        {DETAILED_PATTERNS.map((p, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActivePatternTab(i)}
                                                className={cn(
                                                    "px-8 py-5 text-sm font-bold whitespace-nowrap transition-all relative",
                                                    activePatternTab === i
                                                        ? "text-blue-600"
                                                        : "text-graphite-400 hover:text-graphite-600"
                                                )}
                                            >
                                                {p.exam}
                                                {activePatternTab === i && (
                                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-8">
                                            <p className="text-sm text-graphite-600 font-medium leading-relaxed bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 italic">
                                                {DETAILED_PATTERNS[activePatternTab].details}
                                            </p>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-graphite-900 text-white rounded-xl overflow-hidden">
                                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Examination Stage</th>
                                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Details & Content</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-graphite-100">
                                                    {DETAILED_PATTERNS[activePatternTab].table.map((row, i) => (
                                                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                                            <td className="px-6 py-5">
                                                                <span className="text-sm font-black text-graphite-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{row.stage}</span>
                                                            </td>
                                                            <td className="px-6 py-5 text-sm text-graphite-600 font-medium leading-relaxed">
                                                                {row.info}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Eligibility Section */}
                            <section id="eligibility" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-100">
                                        <GraduationCap className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">Eligibility Criteria</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">पात्रता मापदंड</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {ELIGIBILITY_DATA.map((item, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white hover:bg-white transition-all group">
                                            <h3 className="text-xl font-black text-graphite-900 mb-6 flex items-center justify-between">
                                                {item.exam}
                                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Shield size={20} />
                                                </div>
                                            </h3>
                                            <div className="space-y-4">
                                                {item.criteria.map((c, j) => (
                                                    <div key={j} className="flex flex-col gap-1">
                                                        <span className="text-[10px] font-black text-graphite-400 uppercase tracking-widest">{c.label}</span>
                                                        <span className="text-sm font-bold text-graphite-700">{c.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Exam Dates Section */}
                            <section id="dates" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-100">
                                        <Calendar className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">Exam Dates & Timeline</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">परीक्षा तिथियां और समयरेखा</p>
                                    </div>
                                </div>

                                <div className="bg-graphite-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                    <div className="overflow-x-auto relative z-10">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-orange-400">Exam Type</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Release Date</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Deadline</th>
                                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Exam Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                {EXAM_TIMELINE.map((item, i) => (
                                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                                        <td className="px-6 py-5 font-black text-sm">{item.exam}</td>
                                                        <td className="px-6 py-5 text-sm font-bold text-white/60">{item.release}</td>
                                                        <td className="px-6 py-5 text-sm font-bold text-white/40">{item.submission}</td>
                                                        <td className="px-6 py-5 text-sm font-black text-orange-400">{item.date}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10">
                                        <div className="flex items-center gap-3 text-orange-400 mb-2">
                                            <Bell size={18} />
                                            <span className="text-sm font-black uppercase tracking-wider">Note for Candidates</span>
                                        </div>
                                        <p className="text-sm text-white/60 font-medium leading-relaxed">
                                            All dates mentioned above are tentative and subject to change based on official SSC notifications. We recommend checking the official ssc.gov.in website regularly for the latest updates.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Syllabus Section */}
                            <section id="syllabus" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100">
                                        <BookOpen className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">Detailed Syllabus</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">विस्तृत पाठ्यक्रम</p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-xl overflow-hidden">
                                    {/* Syllabus Tabs */}
                                    <div className="flex overflow-x-auto no-scrollbar border-b border-graphite-100 bg-graphite-50/30">
                                        {DETAILED_SYLLABUS.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveSyllabusTab(i)}
                                                className={cn(
                                                    "px-8 py-5 text-sm font-bold whitespace-nowrap transition-all relative",
                                                    activeSyllabusTab === i
                                                        ? "text-blue-600"
                                                        : "text-graphite-400 hover:text-graphite-600"
                                                )}
                                            >
                                                {s.exam}
                                                {activeSyllabusTab === i && (
                                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {DETAILED_SYLLABUS[activeSyllabusTab].tiers.map((tier, i) => (
                                            <div key={i} className="group">
                                                <h3 className="text-lg font-black text-graphite-900 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs">{i + 1}</span>
                                                    {tier.title}
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {tier.subjects.map((sub, j) => (
                                                        <div key={j} className="p-5 bg-graphite-50/50 rounded-2xl border border-graphite-100 group-hover:border-blue-100 transition-colors">
                                                            <h4 className="font-bold text-graphite-900 mb-2">{sub.name}</h4>
                                                            <p className="text-xs text-graphite-500 leading-relaxed font-medium">{sub.topics}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* FAQ Section */}
                            <section id="faq" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-graphite-900 rounded-2xl flex items-center justify-center shadow-xl shadow-graphite-100">
                                        <HelpCircle className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-graphite-900">Common FAQs</h2>
                                        <p className="text-sm text-graphite-500 font-medium font-hindi">सामान्य प्रश्न एवं उत्तर</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {SSC_FAQ.map((faq, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-md rounded-3xl border border-white overflow-hidden hover:bg-white transition-all group">
                                            <div className="p-6 cursor-pointer flex items-center justify-between gap-4">
                                                <h3 className="text-sm font-bold text-graphite-900 leading-relaxed">{faq.q}</h3>
                                                <ChevronRight size={18} className="text-graphite-300 group-hover:text-blue-600 transition-colors" />
                                            </div>
                                            <div className="px-6 pb-6 border-t border-graphite-50 mt-[-1px]">
                                                <p className="pt-4 text-sm text-graphite-600 leading-relaxed font-medium">
                                                    {faq.a}
                                                </p>
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

export default AboutSSC;
