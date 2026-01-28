import { Brain, MousePointer2, Clock, Split, Zap, AlertCircle } from 'lucide-react';

export default function SolutionSection() {
    const measurements = [
        { icon: <Clock className="w-5 h-5" />, title: "Time per question", desc: "Granular breakdown of every second spent" },
        { icon: <Split className="w-5 h-5" />, title: "Set selection in DILR", desc: "Analysis of set choice vs difficulty" },
        { icon: <MousePointer2 className="w-5 h-5" />, title: "Skipped vs attempted", desc: "Value analysis of your skipping choices" },
        { icon: <Zap className="w-5 h-5" />, title: "Accuracy vs speed", desc: "The trade-offs killing your percentile" },
        { icon: <Brain className="w-5 h-5" />, title: "Section-wise pacing", desc: "Flow analysis across VARC / DILR / QA" },
        { icon: <AlertCircle className="w-5 h-5" />, title: "Repeated mistakes", desc: "Identification of decision patterns" },
    ];

    return (
        <section className="py-24 bg-white/50 backdrop-blur-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-olive/10 border border-olive/30 px-6 py-2 rounded-full mb-8 animate-pulse">
                        <Zap className="w-5 h-5 text-olive" />
                        <span className="text-sm font-black text-olive uppercase tracking-[0.2em]">What PrepRankUp Does</span>
                    </div>

                    <h2 className="text-3xl md:text-6xl font-black text-graphite-900 leading-[1.1] mb-12 tracking-tighter">
                        PrepRankUp Is Not a Coaching Platform. <br className="hidden md:block" />
                        <span className="text-olive underline decoration-olive/20 underline-offset-8 italic">Not Just Another CAT Test Series.</span>
                    </h2>

                    <div className="p-10 md:p-16 rounded-[4rem] bg-graphite-900 text-white shadow-[0_0_60px_-15px_rgba(132,163,83,0.4)] relative overflow-hidden group mb-12 border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-olive/30 via-transparent to-rose-500/10 opacity-40"></div>
                        <div className="relative z-10 space-y-10">
                            <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
                                PrepRankUp is a performance intelligence layer for CAT that analyzes <span className="text-olive italic underline decoration-olive/30">how you attempt</span> exams.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    "Question Selection", "Time Allocation", "Pressure Management"
                                ].map((tag) => (
                                    <div key={tag} className="flex items-center gap-3 px-8 py-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors">
                                        <div className="w-2.5 h-2.5 rounded-full bg-olive animate-pulse shadow-[0_0_10px_rgba(132,163,83,0.8)]"></div>
                                        <span className="text-lg font-black tracking-tight">{tag}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-2xl md:text-3xl text-olive font-black italic tracking-tighter leading-snug">
                                    "We don’t ask what you studied. <br className="md:hidden" />
                                    We analyze how you attempted CAT."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-graphite-900 tracking-tight flex items-center gap-4">
                            <div className="w-2 h-8 bg-olive rounded-full"></div>
                            What We Measure (CAT-Specific)
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {measurements.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-6 group-hover:bg-olive group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-black text-graphite-900 mb-2">{item.title}</h4>
                                <p className="text-graphite-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
