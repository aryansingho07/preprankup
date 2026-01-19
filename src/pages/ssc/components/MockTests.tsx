import { FileText, ArrowRight, Sparkles, Users, Clock } from 'lucide-react';

const mockTests = [
    {
        name: 'SSC CGL',
        nameHi: 'एसएससी सीजीएल',
        subtitle: 'Tier I & II',
        tests: 150,
        students: '25K+',
        popular: true,
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        name: 'SSC CHSL',
        nameHi: 'एसएससी सीएचएसएल',
        subtitle: '10+2 Level',
        tests: 120,
        students: '18K+',
        popular: true,
        gradient: 'from-purple-500 to-indigo-600'
    },
    {
        name: 'SSC MTS',
        nameHi: 'एसएससी एमटीएस',
        subtitle: 'Multi Tasking',
        tests: 80,
        students: '15K+',
        popular: false,
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        name: 'SSC GD',
        nameHi: 'एसएससी जीडी',
        subtitle: 'Constable',
        tests: 100,
        students: '20K+',
        popular: true,
        gradient: 'from-orange-500 to-red-600'
    },
    {
        name: 'SSC CPO',
        nameHi: 'एसएससी सीपीओ',
        subtitle: 'Sub Inspector',
        tests: 75,
        students: '12K+',
        popular: false,
        gradient: 'from-pink-500 to-rose-600'
    },
    {
        name: 'SSC Steno',
        nameHi: 'एसएससी स्टेनो',
        subtitle: 'Grade C & D',
        tests: 60,
        students: '8K+',
        popular: false,
        gradient: 'from-cyan-500 to-blue-600'
    },
    {
        name: 'Selection Post',
        nameHi: 'सिलेक्शन पोस्ट',
        subtitle: 'Phase XI',
        tests: 90,
        students: '10K+',
        popular: false,
        gradient: 'from-indigo-500 to-purple-600'
    },
    {
        name: 'Delhi Police',
        nameHi: 'दिल्ली पुलिस',
        subtitle: 'Constable',
        tests: 70,
        students: '14K+',
        popular: true,
        gradient: 'from-rose-500 to-pink-600'
    },
    {
        name: 'IB ACIO',
        nameHi: 'आईबी एसीआईओ',
        subtitle: 'Intel Bureau',
        tests: 50,
        students: '6K+',
        popular: false,
        gradient: 'from-slate-700 to-slate-900'
    },
    {
        name: 'Jr. Hindi Trans.',
        nameHi: 'जूनियर हिंदी अनुवादक',
        subtitle: 'JHT Exam',
        tests: 40,
        students: '4K+',
        popular: false,
        gradient: 'from-amber-500 to-orange-600'
    }
];

export default function MockTests() {
    return (
        <section id="mock-tests" className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-100 bg-orange-50 text-orange-600 mb-4 backdrop-blur-sm">
                        <span className="text-xs font-bold tracking-wider uppercase">📚 MOCK TEST LIBRARY</span>
                        <span className="opacity-80 text-xs font-hindi">/ मॉक टेस्ट</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-graphite-900 mb-4">
                        अपनी <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600 font-hindi">परीक्षा</span> चुनें
                    </h2>
                    <p className="text-xl text-graphite-600 font-semibold mb-2">Choose Your Exam Category</p>
                    <p className="text-graphite-500 max-w-2xl mx-auto font-medium">
                        विशेषज्ञों द्वारा बनाए गए 1000+ मॉक टेस्ट, नवीनतम SSC पैटर्न के अनुसार।
                    </p>
                </div>

                {/* Mock Tests Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {mockTests.map((test, index) => (
                        <div
                            key={index}
                            className="group bg-white/70 backdrop-blur-md border border-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 relative flex flex-col items-center text-center cursor-pointer"
                        >
                            {/* Popular badge */}
                            {test.popular && (
                                <div className="absolute top-5 right-5 animate-pulse">
                                    <Sparkles size={18} className="text-amber-500 fill-amber-500" />
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${test.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                                <FileText size={28} className="text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-graphite-900 mb-1 group-hover:text-blue-600 transition-colors">{test.name}</h3>
                            <p className="text-sm text-blue-600 mb-1 font-hindi font-bold tracking-wide">{test.nameHi}</p>
                            <p className="text-xs text-graphite-400 mb-4 font-semibold">{test.subtitle}</p>

                            {/* Stats */}
                            <div className="flex items-center justify-center gap-4 mb-6 text-xs text-graphite-600 w-full border-t border-graphite-50 pt-4">
                                <span className="flex items-center gap-1.5 font-bold">
                                    <Clock size={14} className="text-blue-500" />
                                    {test.tests} <span className="font-hindi">टेस्ट</span>
                                </span>
                                <span className="flex items-center gap-1.5 font-bold">
                                    <Users size={14} className="text-emerald-500" />
                                    {test.students}
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button className={`w-full py-4 rounded-2xl bg-gradient-to-r ${test.gradient} text-white text-sm font-bold transition-all duration-500 flex items-center justify-center gap-2 group-hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] shadow-lg active:scale-95`}>
                                <span>Attempt</span>
                                <span className="font-hindi opacity-90">/ टेस्ट दें</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16">
                    <button className="bg-graphite-900 text-white px-10 py-5 rounded-3xl font-bold flex items-center gap-4 mx-auto hover:bg-black hover:scale-105 transition-all shadow-xl hover:shadow-graphite-900/20 active:scale-95 group">
                        <div className="text-left">
                            <span className="block text-lg">View All Mock Tests</span>
                            <span className="block text-xs opacity-60 font-hindi">सभी मॉक टेस्ट देखें</span>
                        </div>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}
