import { Brain, MousePointer2, Clock, Split, Zap, AlertCircle } from 'lucide-react';

export default function SolutionSection() {
    const measurements = [
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Time spent per question",
            hindi: "हर प्रश्न पर खर्च समय",
            desc: "Understand exactly where your seconds are going."
        },
        {
            icon: <MousePointer2 className="w-5 h-5" />,
            title: "Question selection & skipping",
            hindi: "प्रश्न चयन और छोड़ना",
            desc: "Analysis of which questions you should have skipped."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Accuracy under pressure",
            hindi: "दबाव में सटीकता",
            desc: "Identify how pressure impacts your decision making."
        },
        {
            icon: <Split className="w-5 h-5" />,
            title: "Section-wise pacing",
            hindi: "सेक्शन-वार गति",
            desc: "Reasoning, Quant, English, GK/GS flow analysis."
        },
        {
            icon: <AlertCircle className="w-5 h-5" />,
            title: "Repeated decision mistakes",
            hindi: "बार-बार होने वाली निर्णय गलतियाँ",
            desc: "Fix the habits that hurt your score every time."
        },
        {
            icon: <Brain className="w-5 h-5" />,
            title: "Performance Intelligence",
            hindi: "परफ़ॉर्मेंस इंटेलिजेंस",
            desc: "Beyond marks - understanding YOUR attempt behavior."
        },
    ];

    return (
        <section className="py-24 bg-white/50 backdrop-blur-sm relative border-y border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 bg-olive/10 border border-olive/30 px-6 py-2 rounded-full mb-8 animate-pulse">
                        <Brain className="w-5 h-5 text-olive" />
                        <span className="text-sm font-black text-olive uppercase tracking-[0.2em]">What PrepRankUp Does</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-graphite-900 leading-[1.1] mb-8 tracking-tighter">
                        PrepRankUp Is Not a Coaching Platform. <br className="hidden md:block" />
                        <span className="text-olive underline decoration-olive/20 underline-offset-8 italic">Not Just Another SSC Test Series.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-olive-700 font-bold mb-12 italic">
                        (PrepRankUp कोई कोचिंग प्लेटफ़ॉर्म नहीं है। और न ही यह सिर्फ एक और SSC टेस्ट सीरीज़ है।)
                    </p>

                    <div className="p-10 md:p-16 rounded-[4rem] bg-graphite-900 text-white shadow-[0_0_60px_-15px_rgba(132,163,83,0.4)] relative overflow-hidden group mb-16 border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-olive/30 via-transparent to-rose-500/10 opacity-50"></div>
                        <div className="relative z-10 space-y-10">
                            <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
                                PrepRankUp is a performance intelligence layer that analyzes <span className="text-olive italic underline decoration-olive/30">how you attempt</span> SSC exams, not just your marks.
                            </p>
                            <p className="text-lg md:text-2xl text-white/50 italic font-bold">
                                (PrepRankUp एक परफ़ॉर्मेंस इंटेलिजेंस लेयर है जो यह विश्लेषण करती है कि आप SSC परीक्षाएँ कैसे देते हैं, न कि केवल आपके नंबर।)
                            </p>

                            <div className="flex flex-wrap justify-center gap-6 pt-6">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-3 h-3 rounded-full bg-olive animate-pulse shadow-[0_0_10px_rgba(132,163,83,1)]"></div>
                                        <span className="text-lg md:text-xl font-black tracking-tight">We don’t ask what you studied.</span>
                                    </div>
                                    <span className="text-xs font-black text-olive-400 uppercase tracking-widest">हम यह नहीं पूछते कि आपने क्या पढ़ा है।</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-3 h-3 rounded-full bg-olive animate-pulse shadow-[0_0_10px_rgba(132,163,83,1)]"></div>
                                        <span className="text-lg md:text-xl font-black tracking-tight">We analyze how you attempted the paper.</span>
                                    </div>
                                    <span className="text-xs font-black text-olive-400 uppercase tracking-widest">हम विश्लेषण करते हैं कि आपने पेपर कैसे हल किया।</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-black text-graphite-900 tracking-tight flex items-center gap-4">
                                <div className="w-3 h-10 bg-olive rounded-full"></div>
                                What We Measure (SSC-Specific)
                            </h3>
                            <p className="text-lg font-bold text-olive-600 ml-7">(हम क्या मापते हैं - SSC के लिए)</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {measurements.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-olive/5 rounded-bl-[4rem] group-hover:bg-olive/10 transition-colors"></div>
                                <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center text-olive mb-6 group-hover:bg-olive group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-lg shadow-olive/5">
                                    {item.icon}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xl font-black text-graphite-900 leading-tight mb-1">{item.title}</h4>
                                        <p className="text-sm font-bold text-olive-600">{item.hindi}</p>
                                    </div>
                                    <p className="text-graphite-500 font-bold text-sm leading-relaxed border-t border-black/5 pt-4">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
