import { Brain, LineChart, Users, Monitor, Zap, Target, BarChart3, Clock } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: 'AI SWOT Analysis',
        titleHi: 'AI स्वॉट विश्लेषण',
        description: 'Personalized strength & weakness detection with custom study strategy.',
        descriptionHi: 'व्यक्तिगत शक्ति और कमजोरी का पता लगाएं।',
        color: 'icon-box-blue'
    },
    {
        icon: LineChart,
        title: 'Behavioral Analytics',
        titleHi: 'व्यवहार विश्लेषण',
        description: 'Track focus loss, guessing patterns, and time mismanagement.',
        descriptionHi: 'ध्यान भटकाव और समय प्रबंधन को ट्रैक करें।',
        color: 'icon-box-purple'
    },
    {
        icon: Users,
        title: 'Performance Benchmarking',
        titleHi: 'प्रदर्शन तुलना',
        description: 'Compare your performance with top SSC aspirants nationally.',
        descriptionHi: 'टॉप SSC उम्मीदवारों से अपनी तुलना करें।',
        color: 'icon-box-green'
    },
    {
        icon: Monitor,
        title: 'Realistic Exam Interface',
        titleHi: 'असली परीक्षा जैसा इंटरफेस',
        description: 'SSC-style CBT interface with timer and section navigation.',
        descriptionHi: 'SSC की तरह CBT इंटरफेस।',
        color: 'icon-box-orange'
    },
    {
        icon: Zap,
        title: 'Instant Results & Solutions',
        titleHi: 'तुरंत परिणाम और हल',
        description: 'Get detailed solutions immediately after completing your test.',
        descriptionHi: 'टेस्ट के बाद तुरंत विस्तृत हल पाएं।',
        color: 'icon-box-pink'
    },
    {
        icon: Target,
        title: 'Topic-wise Practice',
        titleHi: 'टॉपिक-वार अभ्यास',
        description: 'Focus on specific topics and strengthen weak areas.',
        descriptionHi: 'कमजोर क्षेत्रों को मजबूत करें।',
        color: 'icon-box-cyan'
    },
    {
        icon: BarChart3,
        title: 'Progress Tracking',
        titleHi: 'प्रगति ट्रैकिंग',
        description: 'Visual dashboards showing your improvement journey.',
        descriptionHi: 'विजुअल डैशबोर्ड से अपनी प्रगति देखें।',
        color: 'icon-box-purple'
    },
    {
        icon: Clock,
        title: 'Time Management Tools',
        titleHi: 'समय प्रबंधन टूल्स',
        description: 'Learn to manage exam time with section-wise insights.',
        descriptionHi: 'परीक्षा का समय प्रबंधित करें।',
        color: 'icon-box-blue'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 lg:py-28 relative section-gradient">
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="badge mb-4">
                        <span>✨ POWERFUL FEATURES</span>
                        <span className="opacity-80 hindi-text">/ शक्तिशाली विशेषताएं</span>
                    </div>
                    <h2 className="section-title">
                        SSC <span className="gradient-text">सफलता</span> के लिए सब कुछ
                    </h2>
                    <p className="text-lg text-[#475569] mb-2">Everything You Need to Crack SSC</p>
                    <p className="section-subtitle">
                        हमारा AI-पावर्ड प्लेटफॉर्म आपको तैयारी को बेहतर बनाने के लिए सभी टूल्स देता है।
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card glass-card p-6 group cursor-pointer"
                        >
                            {/* Colorful Icon */}
                            <div className={`icon-box ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <feature.icon size={24} />
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-bold text-[#1E3A5F] mb-1">{feature.title}</h3>
                            <p className="text-sm text-[#8B5CF6] mb-2 hindi-text font-medium">{feature.titleHi}</p>
                            <p className="text-sm text-[#475569] leading-relaxed mb-1">{feature.description}</p>
                            <p className="text-xs text-[#94A3B8] leading-relaxed hindi-text">{feature.descriptionHi}</p>

                            {/* Learn more link */}
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-medium gradient-text cursor-pointer">
                                    और जानें / Learn more →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
