import { FileText, ArrowRight, Star, Users, Clock, Sparkles } from 'lucide-react';

const mockTests = [
    {
        name: 'SSC CGL',
        nameHi: 'एसएससी सीजीएल',
        subtitle: 'Tier I & II',
        tests: 150,
        students: '25K+',
        popular: true,
        color: 'from-blue-500 to-blue-600'
    },
    {
        name: 'SSC CHSL',
        nameHi: 'एसएससी सीएचएसएल',
        subtitle: '10+2 Level',
        tests: 120,
        students: '18K+',
        popular: true,
        color: 'from-purple-500 to-purple-600'
    },
    {
        name: 'SSC MTS',
        nameHi: 'एसएससी एमटीएस',
        subtitle: 'Multi Tasking',
        tests: 80,
        students: '15K+',
        popular: false,
        color: 'from-green-500 to-emerald-600'
    },
    {
        name: 'SSC GD',
        nameHi: 'एसएससी जीडी',
        subtitle: 'Constable',
        tests: 100,
        students: '20K+',
        popular: true,
        color: 'from-orange-500 to-orange-600'
    },
    {
        name: 'SSC CPO',
        nameHi: 'एसएससी सीपीओ',
        subtitle: 'Sub Inspector',
        tests: 75,
        students: '12K+',
        popular: false,
        color: 'from-pink-500 to-pink-600'
    },
    {
        name: 'SSC Steno',
        nameHi: 'एसएससी स्टेनो',
        subtitle: 'Grade C & D',
        tests: 60,
        students: '8K+',
        popular: false,
        color: 'from-cyan-500 to-cyan-600'
    },
    {
        name: 'Selection Post',
        nameHi: 'सिलेक्शन पोस्ट',
        subtitle: 'Phase XI',
        tests: 90,
        students: '10K+',
        popular: false,
        color: 'from-indigo-500 to-indigo-600'
    },
    {
        name: 'Delhi Police',
        nameHi: 'दिल्ली पुलिस',
        subtitle: 'Constable',
        tests: 70,
        students: '14K+',
        popular: true,
        color: 'from-rose-500 to-rose-600'
    },
    {
        name: 'IB ACIO',
        nameHi: 'आईबी एसीआईओ',
        subtitle: 'Intel Bureau',
        tests: 50,
        students: '6K+',
        popular: false,
        color: 'from-teal-500 to-teal-600'
    },
    {
        name: 'Jr. Hindi Trans.',
        nameHi: 'जूनियर हिंदी अनुवादक',
        subtitle: 'JHT Exam',
        tests: 40,
        students: '4K+',
        popular: false,
        color: 'from-amber-500 to-amber-600'
    }
];

export default function MockTests() {
    return (
        <section id="mock-tests" className="py-20 lg:py-28 relative bg-white">
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="badge badge-orange mb-4">
                        <span>📚 MOCK TEST LIBRARY</span>
                        <span className="opacity-80 hindi-text">/ मॉक टेस्ट</span>
                    </div>
                    <h2 className="section-title">
                        अपनी <span className="gradient-text">परीक्षा</span> चुनें
                    </h2>
                    <p className="text-lg text-[#475569] mb-2">Choose Your Exam Category</p>
                    <p className="section-subtitle">
                        विशेषज्ञों द्वारा बनाए गए 1000+ मॉक टेस्ट, नवीनतम SSC पैटर्न के अनुसार।
                    </p>
                </div>

                {/* Mock Tests Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {mockTests.map((test, index) => (
                        <div
                            key={index}
                            className="mock-card glass-card p-5 group cursor-pointer relative"
                        >
                            {/* Popular badge */}
                            {test.popular && (
                                <div className="absolute top-3 right-3">
                                    <Sparkles size={18} className="text-amber-500 fill-amber-500" />
                                </div>
                            )}

                            {/* Colorful Icon */}
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${test.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                                <FileText size={22} className="text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-bold text-[#1E3A5F] mb-0.5">{test.name}</h3>
                            <p className="text-xs text-[#8B5CF6] mb-1 hindi-text font-medium">{test.nameHi}</p>
                            <p className="text-xs text-[#94A3B8] mb-3">{test.subtitle}</p>

                            {/* Stats */}
                            <div className="flex items-center gap-3 mb-4 text-xs text-[#475569]">
                                <span className="flex items-center gap-1">
                                    <Clock size={12} className="text-[#3B82F6]" />
                                    {test.tests} टेस्ट
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users size={12} className="text-[#10B981]" />
                                    {test.students}
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${test.color} text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 opacity-90 hover:opacity-100 hover:shadow-lg`}>
                                <span>Attempt</span>
                                <span className="hindi-text opacity-90">/ टेस्ट दें</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="btn-gradient px-8 py-4 text-base flex items-center gap-3 mx-auto">
                        <div>
                            <span className="block font-semibold">View All Mock Tests</span>
                            <span className="block text-xs opacity-90 hindi-text">सभी मॉक टेस्ट देखें</span>
                        </div>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
