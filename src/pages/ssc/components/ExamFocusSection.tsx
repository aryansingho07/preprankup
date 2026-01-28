import { Target, ShieldCheck, Map, Calculator, Languages, UserCheck, Search } from 'lucide-react';

export default function ExamFocusSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-graphite-900 leading-tight mb-6">
                        Built First for <span className="text-olive">SSC Exams</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-olive-700 font-bold italic mb-8">
                        (सबसे पहले SSC परीक्षाओं के लिए निर्मित)
                    </p>
                    <p className="text-lg text-graphite-600 font-bold max-w-2xl mx-auto">
                        Every SSC exam has a different pattern. PrepRankUp analyzes behavior accordingly.
                        <br />
                        <span className="text-sm font-bold text-graphite-400 mt-2 block">(हर SSC परीक्षा का पैटर्न अलग होता है। PrepRankUp उसी के अनुसार व्यवहार का विश्लेषण करता है।)</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8" />,
                            title: "SSC CGL",
                            desc: "Combined Graduate Level. Intelligence for Tier-1 & Tier-2.",
                            hindi: "ग्रेजुएट लेवल परीक्षाओं के लिए"
                        },
                        {
                            icon: <Calculator className="w-8 h-8" />,
                            title: "SSC CHSL",
                            desc: "Higher Secondary Level. Pacing for 60-min speed game.",
                            hindi: "स्पीड और एक्यूरेसी का खेल"
                        },
                        {
                            icon: <Search className="w-8 h-8" />,
                            title: "SSC MTS",
                            desc: "Multi Tasking Staff. High accuracy models for tough cut-offs.",
                            hindi: "हाई कट-ऑफ के लिए सटीकता"
                        },
                        {
                            icon: <UserCheck className="w-8 h-8" />,
                            title: "SSC GD & Others",
                            desc: "GD Constable, CPO & other SSC-conducted exams.",
                            hindi: "सभी SSC परीक्षाओं के लिए"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-olive/5 rounded-bl-[4rem] group-hover:bg-olive/10 transition-colors"></div>
                            <div className="w-16 h-16 rounded-[1.5rem] bg-olive/10 flex items-center justify-center text-olive mb-8 group-hover:bg-olive group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-graphite-900 mb-2">{item.title}</h3>
                            <p className="text-sm font-bold text-olive-600 mb-4">{item.hindi}</p>
                            <p className="text-graphite-500 font-bold text-sm leading-relaxed border-t border-black/5 pt-4">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 rounded-[2rem] border border-black/5 bg-white/80 backdrop-blur-xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-olive" />
                            <span className="text-sm font-black text-graphite-900 uppercase tracking-widest leading-none">SSC-Specific framework</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-black/10"></div>
                        <p className="text-sm font-bold text-graphite-500 leading-none">
                            Intelligence models trained specifically on SSC attempt patterns, not generic mocks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
