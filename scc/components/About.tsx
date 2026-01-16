import { CheckCircle, Award, BookOpen, Lightbulb, Target, TrendingUp, Rocket } from 'lucide-react';

const benefits = [
    { en: 'AI-powered personalized study plans', hi: 'AI से व्यक्तिगत अध्ययन योजना', color: 'text-blue-500' },
    { en: 'Real exam environment simulation', hi: 'असली परीक्षा जैसा माहौल', color: 'text-purple-500' },
    { en: 'Detailed performance analytics', hi: 'विस्तृत प्रदर्शन विश्लेषण', color: 'text-green-500' },
    { en: 'Expert-designed question bank', hi: 'विशेषज्ञों द्वारा बनाए प्रश्न', color: 'text-orange-500' },
    { en: 'Regular content updates', hi: 'नियमित कंटेंट अपडेट', color: 'text-pink-500' },
    { en: '24/7 access on any device', hi: 'किसी भी डिवाइस पर 24/7 एक्सेस', color: 'text-cyan-500' }
];

export default function About() {
    return (
        <section id="about" className="py-20 lg:py-28 relative section-gradient">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="badge badge-green mb-4">
                            <Rocket size={16} />
                            <span>ABOUT PREPRANKUP</span>
                            <span className="opacity-80 hindi-text">/ हमारे बारे में</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-3 text-[#1E3A5F]">
                            SSC <span className="gradient-text">सफलता</span> का रास्ता
                        </h2>
                        <p className="text-lg text-[#475569] mb-6">Your Gateway to SSC Success</p>

                        <div className="space-y-4 text-[#475569] mb-8 leading-relaxed">
                            <p>
                                <strong className="text-[#1E3A5F]">SSC (कर्मचारी चयन आयोग)</strong> विभिन्न सरकारी विभागों में भर्ती के लिए परीक्षाएं आयोजित करता है।
                                लाखों उम्मीदवारों के बीच प्रतिस्पर्धा में, स्मार्ट तैयारी ही सफलता की कुंजी है।
                            </p>
                            <p>
                                <strong className="text-[#8B5CF6]">PrepRankUp</strong> उन SSC उम्मीदवारों के लिए है जो
                                AI तकनीक और विशेषज्ञ कंटेंट से स्मार्ट तैयारी करना चाहते हैं।
                            </p>
                        </div>

                        {/* Colorful Benefits List */}
                        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-sm bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                                    <CheckCircle size={18} className={`${benefit.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <span className="text-[#1E3A5F] font-medium">{benefit.en}</span>
                                        <span className="block text-xs text-[#94A3B8] hindi-text">{benefit.hi}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="btn-gradient px-8 py-4 text-base">
                            <span className="block font-semibold">Start Your Journey Today</span>
                            <span className="block text-xs opacity-90 hindi-text">आज ही शुरू करें</span>
                        </button>
                    </div>

                    {/* Right Content - Colorful Stats */}
                    <div className="relative">
                        <div className="glass-card p-8">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="stat-card bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                                    <Award size={36} className="text-[#F97316] mx-auto mb-3" />
                                    <p className="text-3xl font-bold text-[#1E3A5F] mb-1">50,000+</p>
                                    <p className="text-sm text-[#475569]">Happy Students</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">खुश छात्र</p>
                                </div>
                                <div className="stat-card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                                    <BookOpen size={36} className="text-[#3B82F6] mx-auto mb-3" />
                                    <p className="text-3xl font-bold text-[#1E3A5F] mb-1">1,000+</p>
                                    <p className="text-sm text-[#475569]">Mock Tests</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">मॉक टेस्ट</p>
                                </div>
                                <div className="stat-card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                                    <Target size={36} className="text-[#10B981] mx-auto mb-3" />
                                    <p className="text-3xl font-bold text-[#1E3A5F] mb-1">95%</p>
                                    <p className="text-sm text-[#475569]">Success Rate</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">सफलता दर</p>
                                </div>
                                <div className="stat-card bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                                    <TrendingUp size={36} className="text-[#8B5CF6] mx-auto mb-3" />
                                    <p className="text-3xl font-bold text-[#1E3A5F] mb-1">142</p>
                                    <p className="text-sm text-[#475569]">Top Rankers</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">टॉप रैंकर्स</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 left-4 glass-card px-4 py-3 float-animation shadow-lg bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
                            <div className="flex items-center gap-3">
                                <Lightbulb size={22} className="text-amber-500" />
                                <div>
                                    <p className="text-sm font-semibold text-[#1E3A5F]">Smart Learning</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">स्मार्ट लर्निंग</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 right-4 glass-card px-4 py-3 float-animation shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <CheckCircle size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#1E3A5F]">Proven Results</p>
                                    <p className="text-xs text-[#94A3B8] hindi-text">सिद्ध परिणाम</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
