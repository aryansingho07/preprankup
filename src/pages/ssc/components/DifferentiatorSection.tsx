import { Ban, Target, Repeat, Zap } from 'lucide-react';

export default function DifferentiatorSection() {
    const points = [
        {
            icon: <Ban className="w-5 h-5" />,
            text: "No content overload — focus only on attempt strategy",
            hindi: "कोई कंटेंट ओवरलोड नहीं - केवल रणनीति पर ध्यान"
        },
        {
            icon: <Ban className="w-5 h-5" />,
            text: "No false percentile guarantees — pure honest data",
            hindi: "कोई झूठे वादे नहीं - केवल ईमानदार डेटा विश्लेषण"
        },
        {
            icon: <Ban className="w-5 h-5" />,
            text: "No generic motivational noise — precision intelligence",
            hindi: "बिना मतलब का शोर नहीं - केवल स्पष्ट मार्गदर्शन"
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Deep focus on SSC decision quality",
            hindi: "सही प्रश्न चुनने की क्षमता पर गहरा ध्यान"
        },
        {
            icon: <Repeat className="w-5 h-5" />,
            text: "Built for repeated SSC attempts and improvement",
            hindi: "हर प्रयास के साथ सुधार के लिए बनाया गया"
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/60 backdrop-blur-2xl rounded-[4rem] border border-black/5 p-8 md:p-20 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-olive/5 blur-[80px] -ml-32 -mt-32"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 relative">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-graphite-900 leading-tight">
                                    Why PrepRankUp Is <span className="text-olive">Different</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-olive-700 font-bold italic">
                                    (PrepRankUp क्यों अलग है)
                                </p>
                            </div>

                            <div className="space-y-8">
                                {points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                                            {point.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-graphite-700 font-black text-lg group-hover:text-graphite-900 transition-colors tracking-tight uppercase">{point.text}</p>
                                            <p className="text-olive-600 font-bold text-sm">{point.hindi}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-graphite-900 rounded-[3.5rem] p-12 text-center relative group overflow-hidden shadow-2xl border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-olive/20 via-transparent to-rose-500/10"></div>
                            <div className="relative z-10 space-y-10">
                                <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center mx-auto shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700 border border-white/10">
                                    <Zap className="w-12 h-12 text-olive" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-5xl font-black text-white leading-tight italic decoration-olive/30 decoration-8 underline-offset-[16px] underline">
                                        "Studying more is not the solution. <br className="hidden md:block" />
                                        Making better <span className="text-olive">SSC decisions</span> is."
                                    </h3>
                                    <p className="text-xl md:text-2xl text-olive-400 font-bold italic pt-4">
                                        (ज़्यादा पढ़ाई समाधान नहीं है। बेहतर SSC निर्णय लेना ही समाधान है।)
                                    </p>
                                </div>
                                <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em] pt-8">
                                    The Performance Intelligence Framework
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
