import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Play, ArrowRight, BarChart3, Sparkles } from 'lucide-react';

export default function MockTestCTA() {
    const features = [
        "Full-length CAT-pattern mock",
        "Detailed performance intelligence report",
        "Section-wise insights (VARC / DILR / QA)",
        "Clear “What to Fix Next” summary"
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-graphite-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
                    {/* Background acccents */}
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-olive/20 to-transparent pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-olive/10 blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-olive/20 bg-olive/10 text-olive">
                                <Sparkles size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Limited Free Access</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                                Start With a <span className="text-olive">Free</span> CAT Mock Test
                            </h2>

                            <div className="grid gap-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-olive/10 border border-olive/30 flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-all">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-white/80 font-bold tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link to="/register">
                                    <Button className="bg-white text-graphite-900 hover:bg-olive hover:text-white h-16 px-10 rounded-2xl text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group">
                                        Attempt Free CAT Mock Test Now
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="mt-4 text-white/40 text-sm font-bold flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4" />
                                    No credit card required. Instant analysis.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-olive/5 via-transparent to-transparent"></div>

                                <div className="relative space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-olive flex items-center justify-center shadow-lg">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-black">CAT Mock #1</p>
                                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Ready to attempt</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-xs font-black text-white/40 uppercase">
                                            <span>Structure</span>
                                            <span className="text-olive">Standard CAT</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 group-hover:border-olive/30 transition-colors">
                                                <p className="text-white font-black text-sm">VARC</p>
                                                <p className="text-[10px] text-white/40">40 min</p>
                                            </div>
                                            <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 group-hover:border-olive/30 transition-colors">
                                                <p className="text-white font-black text-sm">DILR</p>
                                                <p className="text-[10px] text-white/40">40 min</p>
                                            </div>
                                            <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5 group-hover:border-olive/30 transition-colors">
                                                <p className="text-white font-black text-sm">QA</p>
                                                <p className="text-[10px] text-white/40">40 min</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-olive/10 border border-olive/20">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-olive/20 flex items-center justify-center flex-shrink-0">
                                                <Sparkles className="w-4 h-4 text-olive" />
                                            </div>
                                            <p className="text-xs font-bold text-olive-200 leading-relaxed">
                                                AI-driven intelligence will be active during this mock to monitor your decision patterns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-olive rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
