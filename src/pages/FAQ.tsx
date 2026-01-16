import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, MessageCircle, CreditCard, Settings, Brain, Sparkles, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'

const faqCategories = [
    {
        id: 'general',
        title: 'General Questions',
        icon: HelpCircle,
        color: 'bg-olive/10 text-olive',
        questions: [
            {
                question: 'What is PrepRankUp?',
                answer: 'PrepRankUp is an AI-powered CAT exam preparation platform that uses advanced behavioral analytics and personalized coaching to help students achieve their IIM dreams. Our platform features Athena, an advanced AI coach that provides deep performance analysis, SWOT assessments, and personalized study plans based on your unique test-taking patterns.'
            },
            {
                question: 'Who is Athena and how does the AI coaching work?',
                answer: 'Athena is our revolutionary AI coach powered by advanced machine learning algorithms. After each mock test, Athena analyzes your performance patterns, time management, accuracy trends, and behavioral data to provide comprehensive insights. She creates personalized SWOT analyses, actionable study plans, and strategic recommendations tailored specifically to your strengths and weaknesses.'
            },
            {
                question: 'How accurate are the mock tests compared to the actual CAT?',
                answer: 'Our mock tests are designed to closely mirror the actual CAT exam in terms of difficulty level, question patterns, time constraints, and interface. We continuously update our question bank based on latest CAT trends and feedback from successful candidates. Many of our users report that our mocks are slightly more challenging than the actual exam, which helps them perform better on test day.'
            },
            {
                question: 'Can I access PrepRankUp on mobile devices?',
                answer: 'Yes! PrepRankUp is fully responsive and works seamlessly on all devices including smartphones, tablets, laptops, and desktops. However, for the best exam experience, we recommend taking mock tests on a laptop or desktop computer as it closely simulates the actual CAT exam environment.'
            }
        ]
    },
    {
        id: 'plans',
        title: 'Plans & Payments',
        icon: CreditCard,
        color: 'bg-teal/10 text-teal',
        questions: [
            {
                question: 'What is included in the Free Plan?',
                answer: 'Our Free Plan includes access to 2 full-length CAT mock tests, basic performance analytics, detailed solutions with explanations, and access to our question review system. You can experience the quality of our platform and get a taste of Athena AI analysis before upgrading to a paid plan.'
            },
            {
                question: 'How does the "RankUp Promise" work?',
                answer: 'The RankUp Promise is PrepRankUp’s guarantee of real score improvement. Within the first seven days, you establish your baseline by attempting two trial mock tests. From there, you continue your preparation by completing at least 90% of the assigned mocks in your plan. After the exam, you submit your official scorecard within 15 days of the results. If your score does not improve by at least 20 percent or your percentile does not increase by at least 15 points compared to your baseline, you receive a full free renewal of the same subscription plan for the next exam cycle. In simple terms, you either achieve measurable improvement or get another full year of guided preparation at no extra cost.'
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major payment methods including Credit Cards (Visa, MasterCard, American Express), Debit Cards, Net Banking, UPI, and digital wallets like Paytm, PhonePe, and Google Pay. All payments are processed securely through Razorpay with bank-level encryption.'
            },
            {
                question: 'Can I upgrade or downgrade my plan anytime?',
                answer: 'Yes, you can upgrade your plan at any time. The price difference will be calculated pro-rata and you can pay the remaining amount. Downgrading is possible but may result in loss of access to premium features. Contact our support team for assistance with plan changes.'
            }
        ]
    },
    {
        id: 'technical',
        title: 'Technical Questions',
        icon: Settings,
        color: 'bg-graphite/10 text-graphite-700',
        questions: [
            {
                question: 'Which browser should I use for the best experience?',
                answer: 'We recommend using the latest versions of Google Chrome, Mozilla Firefox, or Safari for the best experience. These browsers provide optimal performance for our interactive features, real-time analytics, and seamless test-taking interface. Internet Explorer is not supported.'
            },
            {
                question: 'What if I get disconnected during a test?',
                answer: 'Don\'t worry! Our platform automatically saves your progress every few seconds. If you get disconnected, simply log back in and you can resume your test from where you left off. Your timer will continue from the exact point of disconnection, ensuring no time is lost.'
            },
            {
                question: 'How long does it take to generate Athena AI analysis?',
                answer: 'Athena AI analysis typically takes 30-60 seconds to generate after you submit a mock test. The AI processes your performance data, behavioral patterns, time allocation, and accuracy trends to create a comprehensive analysis. Please be patient as this detailed analysis is worth the wait!'
            },
            {
                question: 'Can I download my performance reports?',
                answer: 'Yes, you can download detailed PDF reports of your performance, including Athena\'s analysis, score trends, topic-wise breakdown, and personalized recommendations. These reports are great for offline review and tracking your preparation progress over time.'
            }
        ]
    }
]

export default function FAQ() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Structured Data for FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "name": "PrepRankUp CAT Preparation - Frequently Asked Questions",
                        "description": "Common questions and answers about PrepRankUp's AI-powered CAT preparation platform",
                        "url": "https://preprankup.com/faq",
                        "mainEntity": faqCategories.flatMap(cat =>
                            cat.questions.map(q => ({
                                "@type": "Question",
                                "name": q.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": q.answer
                                }
                            }))
                        )
                    })
                }}
            />

            <Navbar />

            <div className="pt-16 lg:pt-20">
                {/* Hero Section */}
                <div className="bg-graphite text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-olive/5 pointer-events-none" />
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Brain className="w-8 h-8 text-olive" />
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
                                Frequently Asked <span className="text-olive">Questions</span>
                            </h1>
                            <Sparkles className="w-8 h-8 text-olive" />
                        </div>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Everything you need to know about PrepRankUp's AI-powered platform
                            and how we help CAT aspirants achieve their IIM dreams.
                        </p>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Quick Links */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-display font-bold text-graphite mb-8">Quick Navigation</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {faqCategories.map((category) => {
                                const Icon = category.icon
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                        className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-olive/30 hover:shadow-premium transition-all group text-left w-full"
                                    >
                                        <div className={`p-3 rounded-xl ${category.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-graphite group-hover:text-olive transition-colors">
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {category.questions.length} questions
                                            </p>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* FAQ Categories */}
                    <div className="space-y-16">
                        {faqCategories.map((category) => {
                            const Icon = category.icon
                            return (
                                <div key={category.id} id={category.id} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-3 rounded-xl ${category.color}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-display font-bold text-graphite">{category.title}</h2>
                                            <Badge variant="secondary" className="mt-1 bg-white border-gray-100 text-gray-600">
                                                {category.questions.length} Questions
                                            </Badge>
                                        </div>
                                    </div>

                                    <Card className="overflow-hidden border-none shadow-premium bg-white rounded-3xl">
                                        <CardContent className="p-0">
                                            <Accordion type="single" collapsible className="w-full">
                                                {category.questions.map((faq, index) => (
                                                    <AccordionItem
                                                        key={index}
                                                        value={`${category.id}-${index}`}
                                                        className="border-b border-gray-50 last:border-b-0 px-2"
                                                    >
                                                        <AccordionTrigger className="px-6 py-6 text-left hover:no-underline text-graphite group">
                                                            <span className="font-semibold text-lg group-data-[state=open]:text-olive transition-colors pr-4">
                                                                {faq.question}
                                                            </span>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-6 pb-6">
                                                            <div className="text-gray-600 leading-relaxed text-base">
                                                                {faq.answer}
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>

                    {/* Contact Support Section */}
                    <Card className="mt-24 bg-graphite text-white border-none rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-olive/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <CardContent className="p-10 md:p-16 text-center relative z-10">
                            <div className="inline-flex p-4 rounded-2xl bg-olive/20 mb-8">
                                <MessageCircle className="w-10 h-10 text-olive" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                                Our support team is here to help! If you couldn't find the answer you're looking for,
                                don't hesitate to reach out to us. We typically respond within 2-4 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button
                                    size="lg"
                                    className="bg-olive hover:bg-olive-dark text-white font-bold rounded-2xl px-10 py-7 h-auto text-lg shadow-lg shadow-olive/20 transition-all hover:-translate-y-1"
                                    asChild
                                >
                                    <a href="https://preprankup.com/contact-us/" target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="w-6 h-6 mr-2" />
                                        Contact Support
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl px-10 py-7 h-auto text-lg backdrop-blur-sm transition-all hover:-translate-y-1"
                                    asChild
                                >
                                    <a href="mailto:support@preprankup.com">
                                        <Mail className="w-6 h-6 mr-2" />
                                        Email Us
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    )
}
