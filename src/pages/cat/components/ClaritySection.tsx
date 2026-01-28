import { ArrowRight, CheckCircle2, Target, Zap, Clock, ShieldAlert } from 'lucide-react';

export default function ClaritySection() {
    const deliverables = [
        { icon: <ShieldAlert className="w-5 h-5" />, text: "Which questions you should have skipped", color: "text-rose-500" },
        { icon: <Target className="w-5 h-5" />, text: "Which DILR sets were wrong choices", color: "text-olive" },
        { icon: <Clock className="w-5 h-5" />, text: "Where time was wasted", color: "text-amber-500" },
        { icon: <Zap className="w-5 h-5" />, text: "Why accuracy dropped in QA or VARC", color: "text-blue-500" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-graphite-900 leading-[1.1] tracking-tight">
                                Know Exactly What to <span className="text-olive">Change</span> in Your Next CAT Attempt
                            </h2>
                            <p className="text-xl text-graphite-600 font-bold leading-relaxed">
                                No generic advice. <br className="hidden md:block" />
                                <span className="text-graphite-900 underline decoration-olive/30 underline-offset-8">Only CAT-specific, decision-level guidance.</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg font-black text-graphite-900 uppercase tracking-wider">After Every CAT Mock, You Get:</p>
                            <div className="grid gap-4">
                                {deliverables.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 rounded-3xl bg-white border border-black/5 shadow-sm group hover:scale-[1.02] transition-all">
                                        <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-graphite-800 font-bold">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-olive/10 border border-olive/20 relative group">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-[2rem] bg-olive text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-olive/20 rotate-3 group-hover:rotate-0 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-graphite-900 mb-2">1–2 high-impact changes</p>
                                    <p className="text-graphite-600 font-bold">Specifically curated for your next attempt to maximize percentile growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative pt-12 lg:pt-0">
                        {/* Illustrative Mock Analysis Card */}
                        <div className="bg-graphite-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-between group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-olive/20 blur-[100px] transition-all group-hover:bg-olive/40"></div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-olive uppercase tracking-[0.2em]">PrepRankUp Intelligence</p>
                                        <h3 className="text-2xl font-black text-white">Post-Mock Roadmap</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                        <Target className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-8 h-8 rounded-full border-2 border-olive flex items-center justify-center text-olive font-black text-xs">1</div>
                                        <div>
                                            <p className="text-white font-bold text-lg mb-2">Set Selection Fix</p>
                                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                                You attempted Set 2 (DILR) which had a success rate of only 12%.
                                                <span className="text-olive block mt-2">Replace this with Set 4 (Arrangements) in next mock.</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white/40 font-black text-xs group-hover:border-olive group-hover:text-olive transition-all">2</div>
                                        <div>
                                            <p className="text-white font-bold text-lg mb-2">VARC Time Flush</p>
                                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                                Your time leakage was highest in RC 3. Total waste: 4:12 mins.
                                                <span className="text-olive block mt-2">Tactic: Strict CAP at 8 mins per RC.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-white/60 italic">Ready for next attempt?</span>
                                    <button className="flex items-center gap-2 text-olive font-black text-sm uppercase tracking-wider group/btn">
                                        Go to Practice <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
