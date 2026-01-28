import { useState } from 'react';
import { Calendar, MessageCircle, Zap, Sparkles, ShieldCheck, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingCardProps {
    title: string;
    subtitle?: string;
    isOnline?: boolean;
    language?: string;
    startDate?: string;
    endDate?: string;
    currentPrice: number;
    originalPrice: number;
    discountPercent: number;
    tokens?: number;
    features: string[];
    isPopular?: boolean;
    batchImage?: string;
    batchOverlayText?: string;
    premiumFeaturesLabel?: string;
}

export default function PricingCard({
    title,
    subtitle,
    isOnline = true,
    language = "Hinglish",
    startDate = "29 Jan, 2026",
    endDate = "30 Mar, 2027",
    currentPrice,
    originalPrice,
    discountPercent,
    tokens,
    features,
    batchImage,
    batchOverlayText = "COMPLETE BATCH WITH TEST SERIES",
    premiumFeaturesLabel = "Premium Features Included"
}: PricingCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full hover:shadow-3xl transition-all duration-500 group ${isExpanded ? 'ring-2 ring-[#5C5EE6]/20' : ''}`}>
            {/* Top Banner */}
            {isOnline && (
                <div className="bg-[#5C5EE6] text-white py-1.5 px-6 text-[10px] font-black tracking-[0.2em] relative">
                    <span className="relative z-10">ONLINE</span>
                    <div className="absolute top-0 right-0 h-full w-12 bg-white/10 skew-x-[30deg] translate-x-6"></div>
                </div>
            )}

            {/* Header Image Area */}
            <div className={`relative h-56 w-full shrink-0 overflow-hidden ${batchImage ? '' : 'bg-gradient-to-br from-[#E0E7FF] to-[#F5F3FF]'}`}>
                {batchImage ? (
                    <img src={batchImage} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <div className="space-y-2">
                            <h4 className="text-[#4F46E5] font-black text-xl leading-tight uppercase tracking-tighter">
                                {title}
                            </h4>
                            <div className="bg-[#4F46E5]/10 text-[#4F46E5] text-[10px] font-black px-4 py-1 rounded-sm inline-block uppercase">
                                {batchOverlayText}
                            </div>
                        </div>
                        {/* Placeholder for people images as seen in the mockup */}
                        <div className="mt-6 flex -space-x-3 opacity-80">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-t from-gray-400 to-gray-200"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title & Language Row */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-black text-graphite-900 leading-tight line-clamp-2">
                            {title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-md text-[10px] uppercase tracking-wider border-none">
                            {language}
                        </Badge>
                        <button className="text-emerald-500 hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 fill-emerald-500 text-white" />
                        </button>
                    </div>
                </div>

                {/* Date Selection */}
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>Starts on <span className="text-gray-900">{startDate}</span></span>
                    <span className="mx-1">•</span>
                    <span>Ends on <span className="text-gray-900">{endDate}</span></span>
                </div>

                {/* Premium Features Bar */}
                <div className="bg-[#1A1A1A] rounded-xl p-3 mb-6 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2 text-white/90 text-[10px] font-black uppercase tracking-widest pl-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        {premiumFeaturesLabel}
                    </div>
                    <div className="bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-black px-5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center gap-2 border border-white/20">
                        {tokens ? `${tokens} TOKENS` : 'INFINITY'}
                        <Sparkles className="w-3 h-3 fill-black" />
                    </div>
                </div>

                {/* Expandable Section */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50/50 rounded-2xl p-5 border border-dashed border-gray-200">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">What's included:</h4>
                        <ul className="space-y-3">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-600 leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Instant Activation</span>
                            <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-black text-[9px] uppercase tracking-tighter">Results Guaranteed</Badge>
                        </div>
                    </div>
                </div>

                {/* Pricing Area */}
                <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-[#5C5EE6]">₹{currentPrice.toLocaleString()}</span>
                            <span className="text-gray-400 line-through text-sm font-bold">₹{originalPrice.toLocaleString()}</span>
                        </div>
                        <div className="bg-[#DCFCE7] text-[#166534] px-4 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1">
                            <Zap className="w-3 h-3 fill-[#166534]" />
                            {discountPercent}% OFF
                        </div>
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">(FOR FULL BATCH)</p>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`h-14 rounded-2xl border-2 border-[#5C5EE6] text-[#5C5EE6] font-black text-xs uppercase tracking-widest transition-all ${isExpanded ? 'bg-[#5C5EE6] text-white' : 'hover:bg-[#5C5EE6]/5'}`}
                        >
                            {isExpanded ? (
                                <span className="flex items-center gap-2">COLLAPSE <ChevronUp className="w-4 h-4" /></span>
                            ) : (
                                <span className="flex items-center gap-2">EXPLORE <ChevronDown className="w-4 h-4" /></span>
                            )}
                        </Button>
                        <Button className="h-14 rounded-2xl bg-[#5C5EE6] hover:bg-[#4F46E5] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-[#5C5EE6]/20 transition-all active:scale-95">
                            BUY NOW
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
