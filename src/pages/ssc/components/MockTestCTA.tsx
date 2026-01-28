import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Play, ArrowRight, BarChart3, Sparkles } from 'lucide-react';

export default function MockTestCTA() {
    const features = [
        { en: "Full-length SSC-pattern mock", hi: "पूरा SSC-पैटर्न मॉक टेस्ट" },
        { en: "Detailed performance intelligence report", hi: "विस्तृत परफॉर्मेंस रिपोर्ट" },
        { en: "Section-wise insights (Maths/Eng/Reasoning/GK)", hi: "सेक्शन-वार डीप एनालिसिस" },
        { en: "Clear “What to Fix Next” summary", hi: "स्पष्ट “अगली बार क्या सुधारें” समरी" }
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-graphite-900 rounded-[4rem] overflow-hidden relative shadow-2xl border border-white/5">
                    {/* Background acccents */}
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-olive/20 to-transparent pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-olive/10 blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-20">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-olive/20 bg-olive-500/10 text-olive">
                                <Sparkles size={18} />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Limited Free Access</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight">
                                    Start With a <span className="text-olive underline decoration-olive/30 underline-offset-8">Free</span> SSC Mock Test
                                </h2>
                                <p className="text-2xl font-bold text-olive-400 italic">
                                    (एक फ्री SSC मॉक टेस्ट के साथ शुरुआत करें)
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-olive/10 border border-olive/30 flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-all mt-1">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold text-lg tracking-tight">{feature.en}</span>
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">{feature.hi}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <Link to="/register">
                                    <Button className="bg-white text-graphite-900 hover:bg-olive hover:text-white h-20 px-12 rounded-[2.5rem] text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-0 group">
                                        <span>Attempt Free SSC Mock Test Now</span>
                                        <span className="text-xs font-black opacity-40 group-hover:opacity-100">(अभी फ्री मॉक टेस्ट शुरू करें)</span>
                                    </Button>
                                </Link>
                                <div className="mt-8 flex items-center gap-6">
                                    <p className="text-white/40 text-sm font-bold flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4" />
                                        No credit card required
                                    </p>
                                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                                    <p className="text-white/40 text-sm font-bold italic">
                                        Instant analysis report
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 shadow-ksw relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-olive/10 via-transparent to-transparent"></div>

                                <div className="relative space-y-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-olive flex items-center justify-center shadow-xl shadow-olive/20 rotate-3 group-hover:rotate-0 transition-transform">
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </div>
                                        <div>
                                            <p className="text-white text-2xl font-black">SSC Mock #1</p>
                                            <p className="text-olive-500 text-xs font-black uppercase tracking-[0.2em] animate-pulse">Ready to attempt</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between text-xs font-black text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
                                            <span>Full Length Mock</span>
                                            <span className="text-olive">CGL / CHSL Tier-1</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { label: 'Reasoning', time: '15 min' },
                                                { label: 'General Awareness', time: '10 min' },
                                                { label: 'Quantitative', time: '20 min' },
                                                { label: 'English', time: '15 min' }
                                            ].map((sec) => (
                                                <div key={sec.label} className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:border-olive/30 transition-colors">
                                                    <p className="text-white/80 font-black text-sm">{sec.label}</p>
                                                    <p className="text-[10px] text-olive-500 font-bold uppercase">{sec.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-[2rem] bg-olive/10 border border-olive/20 shadow-inner">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-olive/20 flex items-center justify-center flex-shrink-0">
                                                <Sparkles className="w-5 h-5 text-olive" />
                                            </div>
                                            <p className="text-sm font-bold text-olive-100/80 leading-relaxed italic">
                                                AI-driven intelligence will be active to monitor your behavior and skipping patterns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-olive rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-rose-500 rounded-full blur-[80px] opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
