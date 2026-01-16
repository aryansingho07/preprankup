import { FileText, Clock, Target, Gauge, CheckCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const MockTestSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can I prepare for multiple exams with one account?',
      answer: 'Yes! Our Multi-Exam Ecosystem allows you to prepare for SSC, JEE, CAT, Banking, Railway, and more under a single unified profile. Switch between exams seamlessly while the platform adapts scoring, timing, and sections based on each exam\'s specific rules.'
    },
    {
      question: 'How does the AI-powered performance analysis work?',
      answer: 'Our AI analyzes your mock test performance to identify weak topics, predict your rank, and create personalized study plans. It tracks your progress across all exams and provides actionable insights to improve your scores.'
    },
    {
      question: 'What exams does PrepRankUp support?',
      answer: 'We support 15+ competitive exams including CAT, SSC CGL, SSC CHSL, JEE Main, Banking (IBPS, SBI), Railway (RRB), and UPSC. Each exam has tailored mock tests with authentic patterns and AI-driven evaluation.'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="mock-tests">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white shadow-md border border-graphite-200 px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4 text-olive-dark" />
            <span className="text-sm font-bold text-graphite-900 leading-none">अक्सर पूछे जाने वाले सवाल (FAQs)</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-graphite-900">
            PrepRankUp FAQs
          </h2>
          <p className="text-graphite-700 text-sm font-bold mb-4 italic">Frequently Asked Questions</p>
          <p className="text-lg text-graphite-800 font-medium">
            हमारे Multi-Exam Ecosystem के बारे में सवाल हैं?
            यहाँ कॉम्पिटिटिव एग्जाम्स की तैयारी करने वाले एस्पिरेंट्स के सबसे आम सवालों के जवाब हैं।
            (Got questions? Here are answers to common questions from aspirants.)
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-graphite-950 text-white rounded-full font-bold shadow-lg hover:bg-graphite-900 transition-all">
            सामान्य (General)
          </button>
          <button className="px-6 py-3 bg-white text-graphite-900 rounded-full font-bold shadow-md border border-graphite-200 hover:bg-graphite-50 transition-all">
            परीक्षा और टेस्ट (Exams & Tests)
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-graphite-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-bold text-lg text-graphite-900 group-hover:text-olive-dark transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-graphite-900 text-white' : 'bg-graphite-100 text-graphite-600'
                  }`}>
                  {openFaq === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}>
                <p className="text-graphite-800 font-semibold leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { value: '50K+', label: 'Questions', icon: '📝' },
            { value: '500+', label: 'Mock Tests', icon: '📋' },
            { value: '15+', label: 'Exam Types', icon: '🎯' },
            { value: '99.9%', label: 'Uptime', icon: '⚡' },
          ].map((stat) => (
            <div key={stat.label} className="premium-card rounded-2xl p-5 text-center border border-graphite-200 shadow-sm">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-olive-dark">{stat.value}</div>
              <div className="text-sm font-bold text-graphite-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockTestSection;