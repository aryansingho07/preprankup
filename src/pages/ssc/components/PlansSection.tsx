import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';
import PricingCard from '@/components/PricingCard';

export default function PlansSection() {
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

        const section = document.getElementById('ssc-plans');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            title: 'SSC Starter (Lite)',
            subtitle: 'Core Analysis Essentials',
            isOnline: true,
            language: 'Hinglish',
            startDate: 'Immediate',
            endDate: '30 Days Access',
            currentPrice: 299,
            originalPrice: 399,
            discountPercent: 25,
            tokens: 10,
            batchOverlayText: '10 PREMIUM MOCKS',
            features: [
                '10 Premium SSC Mock Tests',
                'Core AI Performance Analysis',
                'Basic Section-wise Insights',
                'Question-wise Time Tracking',
                'Mobile & Desktop Access',
                'Instant Result Generation',
                '30 Days Validity'
            ]
        },
        {
            title: 'SSC Pro (Rank Booster)',
            subtitle: 'Advanced Performance Suite',
            isOnline: true,
            language: 'Hinglish',
            startDate: 'Immediate',
            endDate: '60 Days Access',
            currentPrice: 899,
            originalPrice: 1249,
            discountPercent: 28,
            tokens: 50,
            popular: true,
            batchOverlayText: '50 PREMIUM MOCKS',
            features: [
                '50 Premium SSC Mock Tests',
                'Advanced AI Analytics',
                'Weakness Identification',
                'Speed vs Accuracy Tuning',
                'Comparative Rank Analysis',
                'Priority Support',
                '60 Days Validity'
            ]
        },
        {
            title: 'SSC Elite (Infinity)',
            subtitle: 'Elite Intelligence Suite',
            isOnline: true,
            language: 'Hindi',
            startDate: 'Immediate',
            endDate: '90 Days Access',
            currentPrice: 1299,
            originalPrice: 1999,
            discountPercent: 35,
            tokens: 500,
            batchOverlayText: 'UNLIMITED MOCKS',
            features: [
                'Unlimited SSC Mock Tests',
                'Elite Intelligence Suite',
                'Score Prediction Model',
                'Advanced Strategy Roadmap',
                'VIP AI Access',
                '1-on-1 Performance Mentoring',
                '90 Days Validity'
            ]
        }
    ];

    return (
        <section id="ssc-plans" className="py-24 relative overflow-hidden bg-white/50">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-graphite-900 mb-6 tracking-tight">
                        Simple Plans. <span className="text-[#5C5EE6] underline underline-offset-8 decoration-black/5">Long-Term Value.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-bold italic mb-12">
                        (सरल प्लान्स। दीर्घकालिक मूल्य।)
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <PricingCard {...plan} />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/pricing">
                        <Button variant="ghost" className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] hover:text-[#5C5EE6] transition-all flex items-center gap-3 mx-auto px-8 py-4 rounded-full border border-black/5 hover:bg-white hover:shadow-lg">
                            <Award className="w-4 h-4" />
                            Compare All SSC Preparation Plans
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] -mr-64 -mt-64 transition-all"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] -ml-64 -mb-64 transition-all"></div>
        </section>
    );
}
