import { ArrowRight, CheckCircle2, Target, Zap, Clock, ShieldAlert } from 'lucide-react';

export default function ClaritySection() {
    const deliverables = [
        {
            icon: <ShieldAlert className="w-5 h-5" />,
            text: "Which questions you should have skipped",
            hindi: "कौन से प्रश्न छोड़ने चाहिए थे",
            color: "text-rose-500"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            text: "Where you wasted time",
            hindi: "कहाँ समय बर्बाद हुआ",
            color: "text-amber-500"
        },
        {
            icon: <Zap className="w-5 h-5" />,
            text: "Why accuracy dropped",
            hindi: "सटीकता क्यों कम हुई",
            color: "text-blue-500"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Which habits are hurting your score",
            hindi: "कौन सी आदतें स्कोर खराब कर रही हैं",
            color: "text-olive"
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-graphite-900 leading-[1.1] tracking-tight">
                                Know Exactly What to <span className="text-olive underline decoration-olive/20 underline-offset-8">Change</span> in Your Next SSC Attempt
                            </h2>
                            <p className="text-xl md:text-2xl text-olive-700 font-bold italic">
                                (जानें कि आपके अगले SSC प्रयास में वास्तव में क्या बदलना है)
                            </p>
                            <p className="text-xl text-graphite-600 font-bold leading-relaxed">
                                No generic tips. <br className="hidden md:block" />
                                <span className="text-graphite-900 underline decoration-olive/30 underline-offset-8">Only specific, SSC-focused guidance.</span>
                                <br />
                                <span className="text-sm font-bold text-graphite-400 mt-2 block">(कोई सामान्य सुझाव नहीं। केवल विशेष, SSC-केंद्रित मार्गदर्शन।)</span>
                            </p>
                        </div>

                        <div className="space-y-8">
                            <p className="text-lg font-black text-graphite-900 uppercase tracking-[0.15em] border-b-2 border-olive/10 pb-2">After Every SSC Mock, You Learn:</p>
                            <div className="grid gap-6">
                                {deliverables.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-black/5 shadow-lg group hover:scale-[1.02] transition-all">
                                        <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-md`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-graphite-900 font-black text-lg">{item.text}</span>
                                            <span className="text-olive-600 font-bold text-sm tracking-tight">{item.hindi}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-[3rem] bg-olive/10 border border-olive/20 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-olive/10 blur-[50px] -mr-16 -mt-16"></div>
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-olive text-white flex items-center justify-center flex-shrink-0 shadow-xl shadow-olive/20 rotate-3 group-hover:rotate-0 transition-transform">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-graphite-900 mb-2">The 1–2 decisions that matter most</p>
                                    <p className="text-graphite-600 font-bold">Specifically curated for your next attempt to maximize score growth.</p>
                                    <p className="text-olive-700 font-bold mt-2 text-sm italic">(वे 1-2 बड़े निर्णय जो अगले मॉक में आपका स्कोर बढ़ाने के लिए सबसे महत्वपूर्ण हैं।)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative pt-12 lg:pt-0">
                        {/* Illustrative SSC Analysis Card */}
                        <div className="bg-graphite-900 rounded-[3.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col justify-between group border border-white/5">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-olive/20 blur-[100px] transition-all group-hover:bg-olive/40"></div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-rose-400 uppercase tracking-[0.2em]">PrepRankUp AI Analysis</p>
                                        <h3 className="text-2xl font-black text-white">Next Attempt Strategy</h3>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">(अगले प्रयास की रणनीति)</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10 shadow-lg">
                                        <Target className="w-7 h-7" />
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-6">
                                        <div className="w-10 h-10 rounded-full border-2 border-olive flex items-center justify-center text-olive font-black text-sm shadow-lg shadow-olive/5">1</div>
                                        <div>
                                            <p className="text-white font-bold text-xl mb-2">Maths Speed Trap</p>
                                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                                You spent 12 mins on just 4 "Moderate" Arithmetic questions.
                                                <span className="text-rose-400 block mt-2 font-bold animate-pulse">Efficiency Leak: High</span>
                                                <span className="text-olive block mt-1 font-bold">Action: Set 45s timer per Quant question.</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white/40 font-black text-sm group-hover:border-olive group-hover:text-olive transition-all">2</div>
                                        <div>
                                            <p className="text-white font-bold text-xl mb-2">Reasoning Ego-Hit</p>
                                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                                You attempted a complex "Coded Inequality" twice. Spent 3:15. Result: Wrong.
                                                <span className="text-olive block mt-2 font-bold">Strategy: If no logic in 20s, skip immediately.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-12 bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <span className="text-sm font-bold text-white italic block">Ready to boost your score?</span>
                                        <span className="text-[10px] font-black text-olive uppercase underline tracking-tighter">(क्या आप तैयार हैं?)</span>
                                    </div>
                                    <button className="flex items-center gap-3 bg-olive text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider group/btn hover:bg-olive-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-olive/20">
                                        Compare Progress <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
