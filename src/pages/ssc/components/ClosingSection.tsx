import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MousePointer2, Sparkles, Brain } from 'lucide-react';

export default function ClosingSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-white/40">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="space-y-16">
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-graphite-900 text-white shadow-2xl rotate-1 group hover:rotate-0 transition-transform">
                            <Brain className="w-6 h-6 text-olive" />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-xs font-black tracking-[0.3em] uppercase mb-1">Performance Protocol</span>
                                <span className="text-[10px] font-bold text-olive-400">SSC INTELLIGENCE</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-7xl font-black text-graphite-900 leading-tight tracking-tighter">
                                Built With <span className="text-olive underline decoration-black/5 underline-offset-8">Restraint</span>. <br />
                                Backed by Thinking.
                            </h2>
                            <p className="text-2xl md:text-3xl font-bold text-olive-700 italic">
                                (संयम के साथ निर्मित। विचार से समर्थित।)
                            </p>
                        </div>

                        <div className="space-y-8 text-xl md:text-2xl text-graphite-600 font-bold leading-relaxed max-w-3xl mx-auto">
                            <div className="p-8 rounded-[3rem] bg-white border border-black/5 shadow-xl space-y-4">
                                <p>
                                    PrepRankUp exists to bring clarity where confusion has become normal in SSC preparation.
                                </p>
                                <p className="text-sm font-black text-graphite-400 italic">
                                    (PrepRankUp का जन्म एसएससी की तैयारी में स्पष्टता लाने के लिए हुआ है, जहाँ अक्सर केवल भ्रम ही मिलता है।)
                                </p>
                            </div>

                            <div className="p-8 rounded-[3rem] bg-olive-500/5 border-l-8 border-olive/30 text-left md:text-center space-y-4">
                                <p className="text-graphite-900 leading-snug">
                                    If you are serious about SSC exams and want to understand your performance honestly,
                                    <span className="text-olive italic font-black"> this platform is built for you.</span>
                                </p>
                                <p className="text-sm font-bold text-olive-700 italic">
                                    (यदि आप एसएससी परीक्षाओं के प्रति गंभीर हैं और अपने स्कोर को ईमानदारी से समझना चाहते हैं, तो यह मंच आपके लिए ही बना है।)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10">
                        <Link to="/register">
                            <Button size="lg" className="bg-graphite-900 text-white hover:bg-olive hover:text-white h-24 px-16 rounded-[3rem] text-2xl md:text-3xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-0 group">
                                <span>Attempt Free SSC Mock Test</span>
                                <span className="text-xs font-black opacity-40 group-hover:opacity-100">(फ्री एसएससी मॉक टेस्ट दें)</span>
                                <MousePointer2 className="w-8 h-8 absolute right-8 group-hover:rotate-12 transition-transform hidden md:block" />
                            </Button>
                        </Link>
                        <p className="mt-10 text-graphite-400 font-black text-sm flex items-center justify-center gap-3">
                            <Sparkles className="w-5 h-5 text-olive animate-pulse" />
                            Join the ranks of serious SSC aspirants tomorrow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative background blobs */}
            <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-olive/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
}
