import { Target, ShieldCheck, Map } from 'lucide-react';

export default function ExamFocusSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-graphite-900 leading-tight mb-8">
                        Built Specifically for <span className="text-olive">CAT</span> Aspirants
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8" />,
                            title: "CAT (Common Admission Test)",
                            desc: "Deep alignment with the latest CAT pattern and difficulty levels."
                        },
                        {
                            icon: <Map className="w-8 h-8" />,
                            title: "CAT-level decision analysis",
                            desc: "Intelligence models trained specifically on CAT attempt patterns."
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8" />,
                            title: "MBA-focused framework",
                            desc: "Built for serious candidates targeting IIMs and top B-schools."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-olive/10 flex items-center justify-center text-olive mb-8 group-hover:bg-olive group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-graphite-900 mb-4">{item.title}</h3>
                            <p className="text-graphite-600 font-bold leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-black/5 bg-white/50 text-sm font-bold text-graphite-400">
                        <span className="w-2 h-2 rounded-full bg-graphite-400 animate-pulse"></span>
                        XAT, NMAT, SNAP and other MBA exams coming later — but CAT first.
                    </p>
                </div>
            </div>
        </section>
    );
}
