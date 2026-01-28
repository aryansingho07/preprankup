import { ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export default function SocialProofStrip() {
    return (
        <div className="w-full bg-white/40 backdrop-blur-md border-y border-black/5 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
                    <div className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center transition-colors group-hover:bg-olive/20">
                            <ShieldCheck className="w-4 h-4 text-olive" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-graphite-600 tracking-tight">Designed specifically for CAT & MBA entrance exams</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center transition-colors group-hover:bg-olive/20">
                            <Zap className="w-4 h-4 text-olive" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-graphite-600 tracking-tight">Built on decision-analysis, not shortcuts</span>
                    </div>

                    <div className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-olive/10 flex items-center justify-center transition-colors group-hover:bg-olive/20">
                            <TrendingUp className="w-4 h-4 text-olive" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-graphite-600 tracking-tight">Focused on percentile improvement, not just scores</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
