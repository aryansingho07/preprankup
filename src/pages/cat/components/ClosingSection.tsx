import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MousePointer2, Sparkles, Brain } from 'lucide-react';

export default function ClosingSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="space-y-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-graphite-900 text-white shadow-xl rotate-1 group">
                        <Brain className="w-5 h-5 text-olive" />
                        <span className="text-sm font-black tracking-widest uppercase">The Athena Protocol</span>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-graphite-900 leading-tight tracking-tighter">
                            Built With <span className="text-olive underline decoration-black/5 underline-offset-8">Restraint</span>. <br />
                            Backed by Thinking.
                        </h2>

                        <div className="space-y-6 text-xl text-graphite-600 font-bold leading-relaxed max-w-2xl mx-auto">
                            <p>
                                PrepRankUp exists to bring clarity to CAT preparation —
                                where confusion and random advice are common.
                            </p>
                            <p className="text-graphite-900 border-l-4 border-olive pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                                If you are serious about CAT, and want honest insight into your performance,
                                <span className="text-olive italic"> this platform is built for you.</span>
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Link to="/register">
                            <Button size="lg" className="bg-graphite-900 text-white hover:bg-olive hover:text-white h-20 px-12 rounded-[2rem] text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4 group">
                                Start Your CAT Analysis Now
                                <MousePointer2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </Link>
                        <p className="mt-8 text-graphite-400 font-bold text-sm flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4 text-olive" />
                            Join the top 1% of serious CAT aspirants.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative background blobs */}
            <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-olive/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-48 -left-48 w-96 h-96 bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
}
