import { Ban, Target, Repeat, Zap } from 'lucide-react';

export default function DifferentiatorSection() {
    const points = [
        { icon: <Ban className="w-5 h-5" />, text: "No content overload — we focus only on attempt strategy" },
        { icon: <Ban className="w-5 h-5" />, text: "No fake percentile guarantees — only honest data" },
        { icon: <Ban className="w-5 h-5" />, text: "No motivational noise — pure precision intelligence" },
        { icon: <Target className="w-5 h-5" />, text: "Deep focus on CAT decision quality" },
        { icon: <Repeat className="w-5 h-5" />, text: "Built for repeat attempts and systematic improvement" },
    ];

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-black/5 p-8 md:p-16 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-olive/5 blur-[80px] -ml-32 -mt-32"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 relative">
                            <h2 className="text-3xl md:text-5xl font-black text-graphite-900 leading-tight">
                                Why PrepRankUp Works
                            </h2>
                            <div className="space-y-6">
                                {points.map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-all">
                                            {point.icon}
                                        </div>
                                        <span className="text-graphite-700 font-bold group-hover:text-graphite-900 transition-colors">{point.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-graphite-900 rounded-[2.5rem] p-12 text-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-olive/20 to-transparent"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 rounded-[2rem] bg-white/10 flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <Zap className="w-10 h-10 text-olive" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight italic decoration-olive decoration-4 underline-offset-[12px] underline">
                                    "Scoring more questions is not the solution. <br className="hidden md:block" />
                                    Making better <span className="text-olive">CAT decisions</span> is."
                                </h3>
                                <p className="text-white/40 text-sm font-bold uppercase tracking-[0.3em] pt-4">
                                    The Athena Intelligence Framework
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
