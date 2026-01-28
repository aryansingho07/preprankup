import { AlertCircle, Clock, Target, BarChart, Zap } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        { icon: <Target className="w-5 h-5" />, text: "Poor question selection in CAT" },
        { icon: <Clock className="w-5 h-5" />, text: "Time mismanagement between VARC / DILR / QA" },
        { icon: <Zap className="w-5 h-5" />, text: "Over-attempting tough sets" },
        { icon: <AlertCircle className="w-5 h-5" />, text: "Accuracy drops under pressure" },
        { icon: <BarChart className="w-5 h-5" />, text: "Same mistakes repeat across attempts" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-graphite-900 leading-tight mb-8">
                        Most CAT Aspirants Don’t Fail Because They <span className="text-rose-500">Didn’t Study Enough</span>
                    </h2>

                    <div className="space-y-4 text-lg text-graphite-600 font-medium leading-relaxed">
                        <p>CAT aspirants study for months or even years.</p>
                        <p>They know concepts, solve PYQs, and take dozens of mocks.</p>
                        <p className="text-xl font-bold text-graphite-900 italic">Yet, their percentiles stagnate.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-graphite-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] -mr-32 -mt-32"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="text-rose-400 text-3xl font-black">Why?</span>
                            </h3>
                            <div className="space-y-6">
                                {problems.map((prob, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 group-hover/item:bg-rose-500/20 group-hover/item:scale-110 transition-all">
                                            {prob.icon}
                                        </div>
                                        <span className="text-white/80 font-bold group-hover/item:text-white transition-colors">{prob.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 lg:pl-8">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-olive rounded-full"></div>
                            <h4 className="text-3xl font-bold text-graphite-900 mb-6 italic leading-snug">
                                "This is not a syllabus problem. <br />
                                This is a <span className="text-olive">decision-making problem</span> in CAT."
                            </h4>
                        </div>

                        <p className="text-lg text-graphite-600 leading-relaxed font-medium">
                            The CAT entrance exam isn't just a test of what you know. It's a high-stakes decision game where your choice of what to skip is as important as what you attempt.
                        </p>

                        <div className="pt-4">
                            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-lg">
                                <div className="w-12 h-12 rounded-xl bg-olive flex items-center justify-center shadow-lg shadow-olive/20">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-graphite-900">Stop guessing.</p>
                                    <p className="text-xs font-bold text-graphite-500">Start measuring your intelligence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
