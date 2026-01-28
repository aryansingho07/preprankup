import { ShieldCheck, Zap, Heart } from 'lucide-react';

export default function SocialProofStrip() {
    return (
        <div className="w-full bg-white/40 backdrop-blur-md border-y border-black/5 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-4">
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center transition-all group-hover:bg-olive/20 group-hover:rotate-12">
                            <ShieldCheck className="w-5 h-5 text-olive" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-graphite-900 leading-tight">Designed specifically for SSC exams</span>
                            <span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider">विशेष रूप से SSC परीक्षाओं के लिए</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center transition-all group-hover:bg-olive/20 group-hover:rotate-12">
                            <Zap className="w-5 h-5 text-olive" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-graphite-900 leading-tight">Built on decision-analysis, not content hype</span>
                            <span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider">निर्णय-विश्लेषण पर आधारित</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center transition-all group-hover:bg-olive/20 group-hover:rotate-12">
                            <Heart className="w-5 h-5 text-olive" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-graphite-900 leading-tight">Accuracy-focused, not false promises</span>
                            <span className="text-[10px] font-bold text-olive-600 uppercase tracking-wider">सटीकता पर केंद्रित, झूठे वादे नहीं</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
