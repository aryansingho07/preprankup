import { Play, Sparkles, Target, TrendingUp, Award, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-12 pb-12 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 mb-6 transition-all hover:scale-105 cursor-default">
                            <Sparkles size={16} />
                            <span className="text-sm font-bold">AI-Powered Exam Prep</span>
                            <span className="opacity-80 text-sm font-hindi">| AI तैयारी</span>
                        </div>

                        {/* Hindi Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold leading-tight mb-3 text-graphite-900">
                            SSC परीक्षा में सफलता{' '}
                            <span className="text-blue-600">Smart Mock Tests</span>
                            {' '}से पाएं
                        </h1>

                        {/* English Headline */}
                        <p className="text-xl text-graphite-700 font-semibold mb-4">
                            Ace SSC Exams with Smart Mock Tests & AI Analysis
                        </p>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg text-graphite-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            असली SSC परीक्षा जैसे मॉक टेस्ट से अभ्यास करें और AI की मदद से अपनी रैंक सुधारें।
                            <span className="block text-sm mt-2 text-graphite-400">
                                Practice real exam-level mock tests and improve with AI-powered insights.
                            </span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <Link to="/plans?category=SSC" className="px-7 py-4 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 group">
                                <Play size={20} fill="white" className="group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <span className="block font-bold">2 Free Mock Tests</span>
                                    <span className="block text-xs opacity-90 font-hindi">2 मुफ्त मॉक टेस्ट</span>
                                </div>
                            </Link>
                            <button className="px-7 py-4 flex items-center justify-center gap-3 border-2 border-graphite-100 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white hover:border-blue-200 transition-all transform hover:-translate-y-1 group">
                                <Zap size={20} className="text-blue-600 group-hover:animate-pulse" />
                                <div className="text-left">
                                    <span className="block font-bold text-graphite-900">Explore Features</span>
                                    <span className="block text-xs text-graphite-400 font-hindi">विशेषताएं देखें</span>
                                </div>
                                <ArrowRight size={18} className="ml-1 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { val: '50K+', label: 'Active Students', hi: 'सक्रिय छात्र' },
                                { val: '1000+', label: 'Mock Tests', hi: 'मॉक टेस्ट' },
                                { val: '95%', label: 'Success Rate', hi: 'सफलता दर' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all hover:shadow-md hover:bg-white/60">
                                    <p className="text-2xl sm:text-3xl font-bold text-graphite-900">{stat.val}</p>
                                    <p className="text-xs sm:text-sm text-graphite-600 font-semibold">{stat.label}</p>
                                    <p className="text-[10px] text-graphite-400 font-hindi">{stat.hi}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Dashboard Preview */}
                    <div className="relative hidden lg:block">
                        <div className="bg-white/70 backdrop-blur-2xl p-6 border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] relative overflow-hidden group">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-200/50 transition-colors duration-700"></div>

                            {/* Dashboard Header - Premium Solid Theme */}
                            <div className="bg-black rounded-3xl p-6 mb-6 text-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="font-bold text-xl mb-1 font-hindi text-white">आपका प्रदर्शन</h3>
                                        <p className="text-sm text-white/50 font-medium">Your Performance Dashboard</p>
                                    </div>
                                    <span className="text-xs bg-white/10 backdrop-blur-md px-4 py-2 rounded-full font-bold border border-white/10 transition-colors group-hover:bg-white/20">↑ 15% This Week</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                                        <Target size={24} className="mb-3 text-blue-400" />
                                        <p className="text-3xl font-black">87%</p>
                                        <p className="text-xs text-white/50 font-medium font-hindi">Accuracy / सटीकता</p>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                                        <TrendingUp size={24} className="mb-3 text-blue-400" />
                                        <p className="text-3xl font-black">142</p>
                                        <p className="text-xs text-white/50 font-medium font-hindi">All India Rank</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Tests */}
                            <p className="text-sm font-bold text-graphite-900 mb-4 px-1 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Recent Tests <span className="font-hindi opacity-60">/ हाल के टेस्ट</span>
                                </span>
                                <span className="text-blue-600 font-bold text-xs cursor-pointer hover:underline">View All</span>
                            </p>
                            <div className="space-y-3">
                                {[
                                    { title: 'SSC CGL Tier I - Mock 5', time: '2 hours ago', score: '156/200', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                                    { title: 'SSC CHSL - Mock 3', time: 'Yesterday', score: '142/200', color: 'bg-graphite-100 text-graphite-900 border-graphite-200' }
                                ].map((test, i) => (
                                    <div key={i} className="flex items-center justify-between bg-white/80 rounded-2xl p-4 border border-graphite-50 shadow-sm hover:shadow-md transition-all cursor-pointer group/item">
                                        <div>
                                            <p className="text-sm font-bold text-graphite-900 group-hover/item:text-blue-600 transition-colors">{test.title}</p>
                                            <p className="text-xs text-graphite-400 font-medium">{test.time}</p>
                                        </div>
                                        <span className={`font-black ${test.color} border px-4 py-1.5 rounded-xl text-xs shadow-sm`}>{test.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl px-5 py-3 shadow-xl border border-white/50 rounded-2xl animate-bounce-slow z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                <span className="text-sm text-graphite-900 font-bold">2,341 Students Online</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-xl px-5 py-3 shadow-xl border border-white/50 rounded-2xl animate-float z-20">
                            <div className="flex items-center gap-3">
                                <Award size={20} className="text-blue-600" />
                                <span className="text-sm text-graphite-900 font-bold">AI Analysis Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
