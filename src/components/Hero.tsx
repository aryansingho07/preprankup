'use client';

import { ArrowRight, Play, Sparkles, Target, TrendingUp, Award, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
            {/* Professional background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
                <div className="absolute top-40 left-10 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 mb-6">
                            <Sparkles size={16} />
                            <span className="text-sm font-bold">AI-Powered Exam Prep</span>
                            <span className="opacity-80 hindi-text text-sm">| AI तैयारी</span>
                        </div>

                        {/* Hindi Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-black">
                            SSC परीक्षा में सफलता{' '}
                            <span className="text-blue-600">Smart Mock Tests</span>
                            {' '}से पाएं
                        </h1>

                        {/* English Headline */}
                        <p className="text-lg text-gray-700 mb-4">
                            Ace SSC Exams with Smart Mock Tests & AI Analysis
                        </p>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            असली SSC परीक्षा जैसे मॉक टेस्ट से अभ्यास करें और AI की मदद से अपनी रैंक सुधारें।
                            <span className="block text-sm mt-2 text-gray-400">
                                Practice real exam-level mock tests and improve with AI-powered insights.
                            </span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <Link href="/pricing" className="btn-blue text-base px-7 py-4 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all">
                                <Play size={20} fill="white" />
                                <div className="text-left">
                                    <span className="block font-bold">2 Free Mock Tests</span>
                                    <span className="block text-xs opacity-90 hindi-text">2 मुफ्त मॉक टेस्ट</span>
                                </div>
                            </Link>
                            <button className="text-base px-7 py-4 flex items-center justify-center gap-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                                <Zap size={20} className="text-blue-600" />
                                <div className="text-left">
                                    <span className="block font-bold text-black">Explore Features</span>
                                    <span className="block text-xs text-gray-400 hindi-text">विशेषताएं देखें</span>
                                </div>
                            </button>
                        </div>

                        {/* Professional Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center lg:text-left p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl sm:text-3xl font-bold text-black">50K+</p>
                                <p className="text-xs sm:text-sm text-gray-600">Active Students</p>
                                <p className="text-xs text-gray-400 hindi-text">सक्रिय छात्र</p>
                            </div>
                            <div className="text-center lg:text-left p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl sm:text-3xl font-bold text-black">1000+</p>
                                <p className="text-xs sm:text-sm text-gray-600">Mock Tests</p>
                                <p className="text-xs text-gray-400 hindi-text">मॉक टेस्ट</p>
                            </div>
                            <div className="text-center lg:text-left p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <p className="text-2xl sm:text-3xl font-bold text-black">95%</p>
                                <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
                                <p className="text-xs text-gray-400 hindi-text">सफलता दर</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Dashboard Preview */}
                    <div className="relative hidden lg:block">
                        <div className="glass-card p-6 bg-white border border-gray-100 shadow-2xl rounded-3xl">
                            {/* Dashboard Header - Solid Black Theme */}
                            <div className="bg-black rounded-2xl p-5 mb-5 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">आपका प्रदर्शन</h3>
                                        <p className="text-xs opacity-80 font-medium">Your Performance Dashboard</p>
                                    </div>
                                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">↑ 15% This Week</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <Target size={22} className="mb-2 text-blue-400" />
                                        <p className="text-2xl font-black">87%</p>
                                        <p className="text-xs opacity-80 font-medium">Accuracy / सटीकता</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                        <TrendingUp size={22} className="mb-2 text-blue-400" />
                                        <p className="text-2xl font-black">142</p>
                                        <p className="text-xs opacity-80 font-medium">All India Rank</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Tests */}
                            <p className="text-sm font-bold text-black mb-3 px-1">Recent Tests / हाल के टेस्ट</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <div>
                                        <p className="text-sm font-bold text-black">SSC CGL Tier I - Mock 5</p>
                                        <p className="text-xs text-gray-400">2 hours ago</p>
                                    </div>
                                    <span className="text-blue-600 font-black bg-blue-50 px-3 py-1 rounded-lg">156/200</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <div>
                                        <p className="text-sm font-bold text-black">SSC CHSL - Mock 3</p>
                                        <p className="text-xs text-gray-400">Yesterday</p>
                                    </div>
                                    <span className="text-black font-black bg-gray-200 px-3 py-1 rounded-lg">142/200</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-3 -right-3 glass-card px-4 py-2.5 shadow-xl bg-white border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-black font-bold">2,341 Students Online</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-3 -left-3 glass-card px-4 py-2.5 shadow-xl bg-white border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-2">
                                <Award size={18} className="text-blue-600" />
                                <span className="text-sm text-black font-bold">AI Analysis Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
