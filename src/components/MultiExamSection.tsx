import { Brain, BarChart3, Target, Monitor, ChevronRight } from 'lucide-react';

const MultiExamSection = () => {
  const features = [
    {
      icon: Brain,
      iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
      iconShadow: 'shadow-blue-400/30',
      title: 'Time Spent Per Question',
      description: 'Track exactly how much time you spend on each question. Identify where time gets misallocated and optimize your exam strategy.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      iconShadow: 'shadow-emerald-400/30',
      title: 'Question Selection & Skipping',
      description: 'Analyze your question selection behavior. Learn which questions to attempt and which to skip for maximum score optimization.',
    },
    {
      icon: Target,
      iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600',
      iconShadow: 'shadow-amber-400/30',
      title: 'Accuracy Under Pressure',
      description: 'Measure how your accuracy changes under exam pressure. Understand patterns in fatigue and panic that affect your performance.',
    },
    {
      icon: Monitor,
      iconBg: 'bg-gradient-to-br from-rose-400 to-rose-600',
      iconShadow: 'shadow-rose-400/30',
      title: 'Repeated Decision Mistakes',
      description: 'Identify the same mistakes that repeat again and again. Break the cycle with targeted insights on your decision patterns.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-graphite-900 leading-tight mb-4">
            Most Aspirants Don't Fail Because<br />
            <span className="text-blue-500">They Didn't Study Enough</span>
          </h2>
          <p className="text-graphite-700 text-base font-bold max-w-lg mx-auto mb-6 italic">
            ज्यादातर एस्पिरेंट्स इसलिए नहीं हारते क्योंकि पढ़ाई कम थी।
          </p>
          <p className="text-lg text-graphite-800 font-medium mb-4">
            SSC और सरकारी परीक्षाओं में, लाखों एस्पिरेंट्स सालों से ईमानदारी से तैयारी करते हैं।
            वे क्लासेस अटेंड करते हैं, सवाल सॉल्व करते हैं, और रेगुलरली मॉक टेस्ट देते हैं।
            फिर भी, मार्क्स रैंक में कन्वर्ट नहीं होते। <strong>क्यों?</strong>
          </p>
          <p className="text-base text-graphite-700 font-bold mb-4">
            Because under exam pressure: time gets misallocated, wrong questions get attempted,
            accuracy drops, fatigue and panic take over. The same mistakes repeat — again and again.
          </p>
          <p className="text-graphite-800 font-black mb-2 text-xl">
            ये सिलेबस का प्रॉब्लम नहीं है। ये एग्जीक्यूशन का प्रॉब्लम है।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg ${feature.iconShadow} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-graphite-900 mb-3">{feature.title}</h3>
              <p className="text-graphite-800 font-semibold leading-relaxed mb-4">{feature.description}</p>

              {/* Learn More Link */}
              <div className="flex items-center gap-1 text-blue-600 font-bold text-sm group-hover:gap-2 transition-all duration-300">
                <span>और जानें (Learn More)</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-rose-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default MultiExamSection;