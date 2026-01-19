import { Brain, LineChart, Users, Monitor, Zap, Target, BarChart3, Clock, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: 'AI SWOT Analysis',
        titleHi: 'AI स्वॉट विश्लेषण',
        description: 'Personalized strength & weakness detection with custom study strategy.',
        descriptionHi: 'व्यक्तिगत शक्ति और कमजोरी का पता लगाएं।',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        iconColor: 'bg-blue-500'
    },
    {
        icon: LineChart,
        title: 'Behavioral Analytics',
        titleHi: 'व्यवहार विश्लेषण',
        description: 'Track focus loss, guessing patterns, and time mismanagement.',
        descriptionHi: 'ध्यान भटकाव और समय प्रबंधन को ट्रैक करें।',
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        iconColor: 'bg-purple-500'
    },
    {
        icon: Users,
        title: 'Performance Benchmarking',
        titleHi: 'प्रदर्शन तुलना',
        description: 'Compare your performance with top SSC aspirants nationally.',
        descriptionHi: 'टॉप SSC उम्मीदवारों से अपनी तुलना करें।',
        color: 'bg-green-50 text-green-600 border-green-100',
        iconColor: 'bg-green-500'
    },
    {
        icon: Monitor,
        title: 'Realistic Exam Interface',
        titleHi: 'असली परीक्षा जैसा इंटरफेस',
        description: 'SSC-style CBT interface with timer and section navigation.',
        descriptionHi: 'SSC की तरह CBT इंटरफेस।',
        color: 'bg-orange-50 text-orange-600 border-orange-100',
        iconColor: 'bg-orange-500'
    },
    {
        icon: Zap,
        title: 'Instant Results & Solutions',
        titleHi: 'तुरंत परिणाम और हल',
        description: 'Get detailed solutions immediately after completing your test.',
        descriptionHi: 'टेस्ट के बाद तुरंत विस्तृत हल पाएं।',
        color: 'bg-pink-50 text-pink-600 border-pink-100',
        iconColor: 'bg-pink-500'
    },
    {
        icon: Target,
        title: 'Topic-wise Practice',
        titleHi: 'टॉपिक-वार अभ्यास',
        description: 'Focus on specific topics and strengthen weak areas.',
        descriptionHi: 'कमजोर क्षेत्रों को मजबूत करें।',
        color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
        iconColor: 'bg-cyan-500'
    },
    {
        icon: BarChart3,
        title: 'Progress Tracking',
        titleHi: 'प्रगति ट्रैकिंग',
        description: 'Visual dashboards showing your improvement journey.',
        descriptionHi: 'विजुअल डैशबोर्ड से अपनी प्रगति देखें।',
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        iconColor: 'bg-indigo-500'
    },
    {
        icon: Clock,
        title: 'Time Management Tools',
        titleHi: 'समय प्रबंधन टूल्स',
        description: 'Learn to manage exam time with section-wise insights.',
        descriptionHi: 'परीक्षा का समय प्रबंधित करें।',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        iconColor: 'bg-amber-500'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-graphite-100 bg-white/50 text-graphite-600 mb-4 backdrop-blur-sm">
                        <span className="text-xs font-bold tracking-wider uppercase">✨ POWERFUL FEATURES</span>
                        <span className="opacity-80 text-xs font-hindi">/ शक्तिशाली विशेषताएं</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-graphite-900 mb-4">
                        SSC <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">सफलता</span> के लिए सब कुछ
                    </h2>
                    <p className="text-xl text-graphite-600 font-semibold mb-2">Everything You Need to Crack SSC</p>
                    <p className="text-graphite-500 max-w-2xl mx-auto font-medium">
                        हमारा AI-पावर्ड प्लेटफॉर्म आपको तैयारी को बेहतर बनाने के लिए सभी टूल्स देता है।
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                        >
                            {/* Colorful Icon Box */}
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm relative overflow-hidden`}>
                                <div className={`absolute inset-0 opacity-10 ${feature.iconColor}`}></div>
                                <feature.icon size={28} className="relative z-10" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-graphite-900 mb-1 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                            <p className="text-sm text-blue-600 mb-3 font-hindi font-bold tracking-wide">{feature.titleHi}</p>
                            <p className="text-sm text-graphite-600 leading-relaxed mb-2 font-medium">{feature.description}</p>
                            <p className="text-xs text-graphite-400 leading-relaxed font-hindi">{feature.descriptionHi}</p>

                            {/* Learn more link */}
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-sm font-bold text-blue-600 flex items-center gap-1">
                                    और जानें <span className="font-sans">/ Learn more</span> <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
