import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Check, Star, Zap, Crown, SlidersHorizontal } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Category = 'CAT' | 'SSC' | 'Bank' | 'UPSC'

const categories: { id: Category; name: string }[] = [
    { id: 'CAT', name: 'CAT / MBA' },
    { id: 'SSC', name: 'SSC CGL / CHSL' },
    { id: 'Bank', name: 'Banking / IBPS' },
    { id: 'UPSC', name: 'UPSC / CSAT' },
]

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
    const [activeCategory, setActiveCategory] = useState<Category>('CAT')

    const plans = [
        {
            name: 'Starter',
            description: `Perfect for testing the waters for ${activeCategory}`,
            icon: Star,
            price: { monthly: 0, yearly: 0 },
            originalPrice: { monthly: null, yearly: null },
            features: [
                '5 Mock Tests per month',
                'Basic score and percentile',
                'Simple performance reports',
                'Community forum access',
                'Mobile app access',
            ],
            limitations: [
                'No AI behavioral analysis',
                'No personalized insights',
                'Limited test history',
            ],
            cta: 'Start Free',
            ctaVariant: 'outline' as const,
            popular: false,
            color: 'olive',
        },
        {
            name: 'Pro',
            description: `For serious ${activeCategory} aspirants ready to breakthrough`,
            icon: Zap,
            price: { monthly: 999, yearly: 799 },
            originalPrice: { monthly: 1499, yearly: 1199 },
            features: [
                'Unlimited Mock Tests',
                'Full AI SWOT Analysis by Athena',
                'Hidden pattern detection (focus loss, pacing, etc.)',
                'Performance vs. 1000+ students',
                'Detailed weakness breakdown',
                'Time management insights',
                'Email support within 24 hours',
                'Progress tracking dashboard',
            ],
            limitations: [],
            cta: 'Subscribe to Pro',
            ctaVariant: 'default' as const,
            popular: true,
            color: 'green',
        },
        {
            name: 'Elite',
            description: `Complete AI coaching for 95+ percentile in ${activeCategory}`,
            icon: Crown,
            price: { monthly: 1999, yearly: 1599 },
            originalPrice: { monthly: 2999, yearly: 2399 },
            features: [
                'Everything in Pro',
                'Weekly one-on-one AI coaching calls',
                'Personalized daily study plans',
                'Question-level difficulty optimization',
                'Exam day strategy sessions',
                'Priority phone support',
                'Custom practice problem sets',
                'Test anxiety management techniques',
                'Dedicated success manager',
            ],
            limitations: [],
            cta: 'Subscribe to Elite',
            ctaVariant: 'default' as const,
            popular: false,
            color: 'purple',
        },
    ]

    const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'hover') => {
        const colorMap = {
            olive: {
                bg: 'bg-olive',
                text: 'text-olive-dark',
                border: 'border-olive',
                hover: 'hover:bg-olive-dark',
            },
            green: {
                bg: 'bg-emerald-500',
                text: 'text-emerald-600',
                border: 'border-emerald-500',
                hover: 'hover:bg-emerald-600',
            },
            purple: {
                bg: 'bg-purple-500',
                text: 'text-purple-600',
                border: 'border-purple-500',
                hover: 'hover:bg-purple-600',
            },
        }
        return colorMap[color as keyof typeof colorMap]?.[variant] || ''
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <section id="pricing" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white w-full">
                <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    {/* Enhanced Section Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-graphite-900 via-olive-dark to-graphite-800 bg-clip-text text-transparent mb-6">
                            Choose Your Success Plan
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                            Get started for free, then unlock advanced AI coaching as you progress.
                            <span className="block mt-2 font-medium text-gray-700">All plans include our money-back guarantee.</span>
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            <div className="flex items-center gap-2 mr-4 text-gray-500 font-medium">
                                <SlidersHorizontal className="w-5 h-5" />
                                <span>Exam Category:</span>
                            </div>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat.id
                                        ? 'bg-graphite-900 text-white border-graphite-900 shadow-md'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-olive hover:bg-olive/5'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Enhanced Billing Toggle */}
                        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-2 shadow-lg">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${billingCycle === 'monthly'
                                    ? 'bg-graphite-900 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 relative ${billingCycle === 'yearly'
                                    ? 'bg-graphite-900 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                Yearly
                                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                    20% off
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Enhanced Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
                        {plans.map((plan) => {
                            const Icon = plan.icon
                            const price = plan.price[billingCycle]
                            const originalPrice = plan.originalPrice[billingCycle]

                            return (
                                <div
                                    key={plan.name}
                                    className={`relative bg-white/95 backdrop-blur-sm rounded-3xl border-2 transition-all duration-500 group ${plan.popular
                                        ? 'border-green-400/50 shadow-2xl scale-100 md:scale-105 ring-4 ring-green-500/10'
                                        : 'border-gray-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-2xl hover:-translate-y-1'
                                        }`}
                                >
                                    {/* Enhanced Popular Badge */}
                                    {plan.popular && (
                                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-2xl text-sm font-bold shadow-lg animate-pulse">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-8 lg:p-10">
                                        {/* Enhanced Plan Header */}
                                        <div className="text-center mb-8 lg:mb-10">
                                            <div className={`inline-flex items-center justify-center w-18 h-18 lg:w-20 lg:h-20 ${getColorClasses(plan.color, 'bg')} rounded-3xl mb-6 shadow-lg`}>
                                                <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                                            <p className="text-gray-600 text-base leading-relaxed">{plan.description}</p>
                                        </div>

                                        {/* Enhanced Pricing Display */}
                                        <div className="text-center mb-8 lg:mb-10">
                                            <div className="flex items-baseline justify-center">
                                                <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                    ₹{price.toLocaleString()}
                                                </span>
                                                {price > 0 && (
                                                    <span className="text-gray-600 ml-3 text-lg lg:text-xl font-medium">
                                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                                    </span>
                                                )}
                                            </div>
                                            {originalPrice && originalPrice > price && (
                                                <div className="flex items-center justify-center mt-3">
                                                    <span className="text-gray-500 line-through text-xl mr-3">
                                                        ₹{originalPrice.toLocaleString()}
                                                    </span>
                                                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                                                        Save ₹{(originalPrice - price).toLocaleString()}
                                                    </span>
                                                </div>
                                            )}
                                            {price === 0 && (
                                                <div className="text-green-600 font-bold text-lg mt-3 flex items-center justify-center">
                                                    <Star className="w-5 h-5 mr-2 fill-current" />
                                                    Forever Free
                                                </div>
                                            )}
                                        </div>

                                        {/* Enhanced Features List */}
                                        <div className="space-y-4 mb-10">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start group/item">
                                                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-4 group-hover/item:scale-110 transition-transform duration-200" />
                                                    <span className="text-gray-700 text-base leading-relaxed font-medium">{feature}</span>
                                                </div>
                                            ))}
                                            {plan.limitations.map((limitation, limitIndex) => (
                                                <div key={limitIndex} className="flex items-start opacity-50">
                                                    <div className="w-6 h-6 flex-shrink-0 mt-1 mr-4">
                                                        <div className="w-4 h-4 border-2 border-gray-400 rounded-sm mt-1 mx-auto"></div>
                                                    </div>
                                                    <span className="text-gray-500 text-base leading-relaxed">{limitation}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Enhanced CTA Button */}
                                        <Link to="/register" className="block">
                                            <Button
                                                variant={plan.ctaVariant}
                                                className={`w-full py-4 text-lg font-bold transition-all duration-300 relative overflow-hidden ${plan.ctaVariant === 'default'
                                                    ? `bg-gradient-to-r ${plan.color === 'green' ? 'from-green-500 to-emerald-600' : plan.color === 'purple' ? 'from-purple-500 to-indigo-600' : 'from-blue-500 to-indigo-600'} text-white shadow-lg hover:shadow-xl`
                                                    : `border-2 ${getColorClasses(plan.color, 'border')} ${getColorClasses(plan.color, 'text')} hover:bg-gray-50 hover:scale-[1.02]`
                                                    } ${plan.popular ? 'ring-2 ring-green-400/50' : ''}`}
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    {plan.cta}
                                                    {plan.popular && <Zap className="w-5 h-5 ml-2" />}
                                                </span>
                                            </Button>
                                        </Link>

                                        {/* Enhanced Additional Info */}
                                        {plan.cta.includes('Free') && (
                                            <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                                                ✨ No credit card required
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Enhanced Money Back Guarantee */}
                    <div className="text-center mt-20 p-10 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl shadow-sm">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-md">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                30-Day Money-Back Guarantee
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Not satisfied with your score improvement? Get a full refund within 30 days.
                                <span className="block mt-2 font-semibold text-blue-800">We're confident our AI coaching will help you achieve your {activeCategory} goals.</span>
                            </p>
                        </div>
                    </div>

                    {/* FAQ Link */}
                    <div className="text-center mt-8">
                        <Link to="/faq" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                            Have questions about our plans?
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
