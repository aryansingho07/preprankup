import { FileText, BookOpen, Target, Clock, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const KeyFeaturesSection = () => {
  const practiceOptions = [
    {
      icon: FileText,
      iconBg: 'bg-gradient-to-br from-teal-400 to-teal-600',
      title: 'Previous Year Papers',
      subtitle: 'Solve real exam questions',
      stats: '500+ Papers',
      highlight: 'Most Popular',
    },
    {
      icon: BookOpen,
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
      title: 'Topic-wise Practice',
      subtitle: 'Master specific concepts',
      stats: '10,000+ Questions',
      highlight: 'AI Recommended',
    },
  ];

  const exams = [
    { name: 'CAT 2026', level: 'Expert', iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'SSC CGL', level: 'Advanced', iconBg: 'bg-gradient-to-br from-lime-400 to-green-500' },
    { name: 'IBPS PO', level: 'Advanced', iconBg: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { name: 'Railway', level: 'Intermediate', iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-500' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Left Side - Floating Cards */}
          <div className="relative h-[400px] hidden lg:block">
            {/* Practice Option Card 1 - Previous Year Papers */}
            <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/60 w-[280px] transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${practiceOptions[0].iconBg} rounded-2xl flex items-center justify-center shadow-lg shadow-teal-400/30`}>
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-graphite-900">{practiceOptions[0].title}</h3>
                  <p className="text-sm text-graphite-500">{practiceOptions[0].subtitle}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-graphite-900">{practiceOptions[0].stats}</span>
                <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-medium">
                  {practiceOptions[0].highlight}
                </span>
              </div>
            </div>

            {/* Practice Option Card 2 - Topic-wise */}
            <div className="absolute top-32 left-40 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/60 w-[300px] transform hover:-translate-y-2 transition-all duration-500 group">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-graphite-900">{practiceOptions[1].title}</span>
                <span className="text-xs bg-graphite-100 text-graphite-600 px-3 py-1 rounded-full">Weekly</span>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-graphite-500">Questions Solved</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-graphite-900">12,580</span>
                    <span className="text-xs text-emerald-500 font-medium">↑ High on Session 10</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-graphite-500">Accuracy Rate</span>
                  <span className="text-xl font-bold text-graphite-900 block">78.5%</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-2xl" />
            <div className="absolute top-20 right-0 w-20 h-20 bg-gradient-to-br from-rose-200/40 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Key Feature
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-graphite-900 leading-tight mb-4">
                Start With a<br />
                <span className="text-emerald-500">Free Mock Test</span>
              </h2>
              <p className="text-graphite-700 text-base font-bold mb-4 italic">
                फ्री मॉक टेस्ट से शुरुआत कीजिए। (Start with a Free Mock Test)
              </p>
              <p className="text-lg text-graphite-800 font-bold mb-4">
                <strong>तैयारी (Free) में क्या मिलेगा:</strong>
              </p>
              <ul className="text-graphite-800 font-semibold mb-4 space-y-2">
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> फुल-लेंथ मॉक टेस्ट (Full-length mock test)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> विस्तृत प्रदर्शन विश्लेषण (Detailed performance analysis)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> सेक्शन-वार इनसाइट्स (Section-wise insights)</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> "अगला क्या सुधारें" का स्पष्ट सारांश (Clear "What to Fix Next" summary)</li>
              </ul>
              <p className="text-graphite-700 text-sm font-bold italic">
                सिर्फ स्कोर नहीं — उचित स्पष्टीकरण। (Sirf score nahi — proper explanation.)
              </p>
            </div>

            {/* Exam Selection Cards */}
            <div className="grid grid-cols-2 gap-4">
              {exams.map((exam) => (
                <div
                  key={exam.name}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${exam.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-graphite-900">{exam.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-graphite-500">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {exam.level}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-graphite-800 to-graphite-950 hover:from-graphite-700 hover:to-graphite-900 text-white px-10 py-7 rounded-full text-xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 transition-all duration-300"
            >
              अभ्यास शुरू करें (Start Practicing)
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-rose-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-100/30 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default KeyFeaturesSection;
