import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Target, TrendingUp, Crown, Clock, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function BootcampPlansSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        const section = document.getElementById('bootcamp-plans');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: 'lite',
            title: 'Bootcamp Lite',
            duration: '30 Days',
            price: '₹499',
            originalPrice: '₹624',
            icon: Target,
            color: 'graphite',
            badge: 'Decision Entry',
            badgeColor: 'bg-graphite-600',
            features: [
                '5 Premium CAT Mock Tests',
                'Core AI Performance Analysis',
                'Basic Section-wise Insights',
                'Question-wise Time Analysis',
                'Athena AI Coach Access',
                '30 Days Validity'
            ]
        },
        {
            name: '30-day',
            title: 'Bootcamp Starter',
            duration: '30 Days',
            price: '₹999',
            originalPrice: '₹1,249',
            icon: Target,
            color: 'olive',
            badge: 'Quick Growth',
            badgeColor: 'bg-olive',
            features: [
                '15 Premium CAT Mock Tests',
                'Full AI Performance Suite',
                'Detailed Section Insights',
                'Personalized Decision Maps',
                'Athena AI Coach Access',
                '30 Days Validity'
            ]
        },
        {
            name: '60-day',
            title: 'Bootcamp Pro',
            duration: '60 Days',
            price: '₹1,799',
            originalPrice: '₹2,249',
            icon: TrendingUp,
            color: 'olive',
            badge: 'Most Popular',
            badgeColor: 'bg-olive',
            popular: true,
            features: [
                '30 Premium CAT Mock Tests',
                'Advanced AI Analytics',
                'Weakness Identification',
                'Speed vs Accuracy Tuning',
                'Priority Athena AI Access',
                '60 Days Validity'
            ]
        },
        {
            name: '90-day',
            title: 'Bootcamp Elite',
            duration: '90 Days',
            price: '₹2,499',
            originalPrice: '₹3,124',
            icon: Crown,
            color: 'graphite',
            badge: 'Best Value',
            badgeColor: 'bg-graphite-900',
            features: [
                '45 Premium CAT Mock Tests',
                'Elite Intelligence Suite',
                'Percentile Prediction',
                'Advanced Strategy Roadmap',
                'VIP Athena AI Access',
                '90 Days Validity'
            ]
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            graphite: {
                bg: 'bg-graphite-900',
                text: 'text-graphite-900',
                border: 'border-graphite-900/10',
                icon: 'bg-graphite-50'
            },
            olive: {
                bg: 'bg-olive',
                text: 'text-olive',
                border: 'border-olive/20',
                icon: 'bg-olive/10'
            }
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.graphite;
    };

    return (
        <section
            id="bootcamp-plans"
            className="py-24 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h2 className="text-3xl md:text-5xl font-black text-graphite-900 mb-8 tracking-tighter">
                        Simple Plans for the <span className="text-olive underline underline-offset-8 decoration-black/5">Full CAT Journey</span>
                    </h2>

                    <div className="p-8 rounded-[2.5rem] bg-white border border-black/5 shadow-xl max-w-4xl mx-auto mb-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-olive/5 blur-3xl group-hover:bg-olive/10 transition-colors"></div>
                        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10">
                            <div className="space-y-4 text-left">
                                <p className="text-lg font-black text-graphite-900">Plans are designed for:</p>
                                <div className="space-y-3">
                                    {[
                                        "Multiple CAT mock attempts",
                                        "Attempt-to-attempt improvement",
                                        "Long-term percentile growth"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-olive" />
                                            <span className="font-bold text-graphite-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-px h-24 bg-black/5 hidden md:block"></div>
                            <div className="text-left md:text-center space-y-2">
                                <p className="text-xl font-black text-graphite-900 uppercase tracking-widest leading-tight">
                                    Not pay-per-mock. <br />
                                    <span className="text-3xl text-olive">Pay for clarity.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        const colors = getColorClasses(plan.color);

                        return (
                            <div
                                key={plan.name}
                                className={`group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] border transition-all duration-500 transform ${plan.popular
                                    ? 'border-olive shadow-2xl scale-100 md:scale-105 z-10'
                                    : `${colors.border} hover:border-olive/30 shadow-lg`
                                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-olive text-white px-6 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-12 h-12 rounded-2xl ${colors.icon} flex items-center justify-center ${colors.text} shadow-sm group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-graphite-900">{plan.title}</h3>
                                            <p className="text-xs font-bold text-graphite-400">{plan.duration}</p>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black text-graphite-900">{plan.price}</span>
                                            <span className="text-sm font-bold text-graphite-400 line-through">{plan.originalPrice}</span>
                                        </div>
                                        <p className="text-xs font-bold text-olive uppercase tracking-widest mt-1 italic">Launch Special</p>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                                                <span className="text-xs font-bold text-graphite-600 leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/plans">
                                        <Button className={`w-full h-14 rounded-2xl font-black text-sm transition-all group-hover:scale-[1.02] active:scale-95 ${plan.popular ? 'bg-olive text-white shadow-xl shadow-olive/20 hover:bg-olive-600' : 'bg-graphite-900 text-white shadow-xl shadow-graphite-900/10 hover:bg-graphite-800'}`}>
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link to="/plans">
                        <Button variant="ghost" className="text-graphite-500 font-black tracking-widest uppercase text-xs hover:text-olive transition-colors flex items-center gap-2 mx-auto">
                            <Award className="w-4 h-4" />
                            Compare All CAT Plans
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-olive/5 blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-olive/10"></div>
        </section>
    );
}
