import { AlertCircle, Clock, Target, BarChart, Zap, BatteryLow } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        {
            icon: <Clock className="w-5 h-5" />,
            text: "Poor time allocation per section",
            hindi: "सेक्शन-वार समय का गलत वितरण"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Wrong question selection",
            hindi: "गलत प्रश्नों का चुनाव (ईगो पर लेना)"
        },
        {
            icon: <AlertCircle className="w-5 h-5" />,
            text: "Accuracy drops under pressure",
            hindi: "दबाव में सिली मिस्टेक्स और कम सटीकता"
        },
        {
            icon: <BatteryLow className="w-5 h-5" />,
            text: "Fatigue during long SSC papers",
            hindi: "लंबे पेपर के दौरान मानसिक थकान"
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            text: "Same mistakes repeated in every attempt",
            hindi: "हर प्रयास में वही गलतियां दोहराना"
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-graphite-900 leading-tight mb-8">
                        Most SSC Aspirants Don’t Fail Because They <span className="text-rose-500 underline decoration-rose-200 underline-offset-8">Didn’t Study Enough</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-rose-600 font-bold mb-8">
                        (अधिकांश SSC अभ्यर्थी इसलिए असफल नहीं होते कि उन्होंने पर्याप्त पढ़ाई नहीं की)
                    </p>

                    <div className="space-y-6 text-lg md:text-xl text-graphite-600 font-medium leading-relaxed bg-white/50 p-8 rounded-[2.5rem] border border-black/5 shadow-inner">
                        <p>Lakhs of aspirants prepare seriously for SSC exams. They attend classes, solve PYQs, and give dozens of mocks.</p>
                        <p className="text-graphite-400 italic">(लाखों अभ्यर्थी SSC परीक्षाओं के लिए गंभीरता से तैयारी करते हैं। वे क्लासेस ज्वाइन करते हैं, PYQs सॉल्व करते हैं और ढेरों मॉक देते हैं।)</p>
                        <p className="text-2xl font-black text-graphite-900 mt-4 pt-4 border-t border-black/5">Still, marks don’t convert into selection.</p>
                        <p className="text-xl font-bold text-olive-600 italic underline decoration-olive/20 underline-offset-4">(फिर भी, उनके नंबर सिलेक्शन में नहीं बदल पाते।)</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-graphite-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-white/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] -mr-32 -mt-32"></div>
                        <div className="relative">
                            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
                                <span className="text-rose-400 text-4xl font-black">Why?</span>
                                <span className="text-rose-400/60 text-xl font-medium">(क्यों?)</span>
                            </h3>
                            <div className="space-y-8">
                                {problems.map((prob, idx) => (
                                    <div key={idx} className="flex items-start gap-5 group/item">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-rose-400 group-hover/item:bg-rose-500/20 group-hover/item:scale-110 transition-all flex-shrink-0 shadow-lg border border-white/5">
                                            {prob.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white text-lg font-bold group-hover/item:text-rose-200 transition-colors uppercase tracking-tight">{prob.text}</p>
                                            <p className="text-white/50 text-sm font-medium group-hover/item:text-white/80 transition-colors">{prob.hindi}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10 lg:pl-8">
                        <div className="relative p-8 bg-olive/5 rounded-[2.5rem] border-l-8 border-olive/30">
                            <h4 className="text-3xl md:text-4xl font-black text-graphite-900 mb-6 italic leading-tight">
                                "This is not a syllabus problem. <br />
                                This is an <span className="text-olive underline decoration-olive/20 underline-offset-4">execution problem</span> in SSC exams."
                            </h4>
                            <p className="text-xl font-bold text-olive-700 italic">
                                (यह सिलेबस की समस्या नहीं है। यह SSC परीक्षाओं में परफॉरमेंस की समस्या है।)
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-graphite-600 leading-relaxed font-medium">
                                SSC exams are not just about what you know. They are high-speed decision games where your choice of which question to skip is as critical as what you attempt.
                            </p>
                            <p className="text-md text-graphite-500 italic">
                                SSC परीक्षाएं सिर्फ आपके ज्ञान की परीक्षा नहीं हैं। ये बहुत तेज़ गति वाले निर्णय लेने का खेल हैं जहाँ यह चुनना कि कौन सा प्रश्न छोड़ना है, उतना ही महत्वपूर्ण है जितना कि उसे हल करना।
                            </p>
                        </div>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-black/5 shadow-2xl hover:scale-105 transition-transform">
                                <div className="w-14 h-14 rounded-2xl bg-olive flex items-center justify-center shadow-xl shadow-olive/20">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="text-lg font-black text-graphite-900">Stop guessing.</p>
                                    <p className="text-xs font-bold text-graphite-500 uppercase tracking-widest">Start measuring your intelligence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
