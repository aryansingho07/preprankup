import { Bot, Brain, TrendingUp, MessageCircle, Target, Zap, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AISection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Instant Doubt Resolution',
      description: 'Get step-by-step explanations for any question, anytime.',
    },
    {
      icon: Target,
      title: 'Daily Study Plans',
      description: 'AI recommends which exam and topics to focus on each day.',
    },
    {
      icon: Brain,
      title: 'Weak Area Detection',
      description: 'Identifies patterns in your mistakes and suggests improvements.',
    },
    {
      icon: TrendingUp,
      title: 'Rank Prediction',
      description: 'Predicts your expected rank based on current performance.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="ai">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Activity Card Preview */}
          <div className="relative order-2 lg:order-1">
            {/* Main Activity Card */}
            <div className="float-card rounded-3xl p-6 max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-graphite-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-graphite-700" />
                  </div>
                  <span className="font-bold text-graphite-900 leading-none">Recent Activity</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-graphite-700">Live</span>
                </div>
              </div>

              {/* Activity Items */}
              <div className="space-y-4">
                {/* SSC Performance */}
                <div className="bg-graphite-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-graphite-600">SSC CGL Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-lg">
                      📊
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-graphite-900 text-sm">Quantitative Aptitude</p>
                      <p className="text-xs font-semibold text-graphite-700">Accuracy: 87% • Speed: +12%</p>
                    </div>
                    <span className="font-black text-emerald-700 text-sm italic">↑ 15%</span>
                  </div>
                </div>

                {/* CAT Performance */}
                <div className="bg-graphite-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-graphite-600">CAT Mock Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-olive to-olive-dark flex items-center justify-center text-white text-lg">
                      🎯
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-graphite-900 text-sm">DILR Section</p>
                      <p className="text-xs font-semibold text-graphite-700">Percentile: 94.5 • Rank: 850</p>
                    </div>
                    <span className="font-black text-emerald-700 text-sm italic">↑ 8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI Accuracy Card */}
            <div className="absolute -right-4 top-8 stat-card rounded-xl p-3 float-animation hidden lg:block">
              <div className="text-xs font-bold text-emerald-600">98.5% Accurate</div>
              <div className="text-xs text-graphite-500">AI Predictions</div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-graphite-100 px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-graphite-600">What PrepRankUp Does</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-graphite-900 leading-tight">
              Know Exactly What to
              <br />
              <span className="text-olive">Change in Your Next Attempt</span>
            </h2>
            <p className="text-graphite-700 text-base font-bold mb-6 italic">
              अगला अटेम्प्ट बेहतर कैसे बनाना है — बिल्कुल स्पष्ट रूप से।
            </p>

            <p className="text-lg text-graphite-800 font-medium mb-4">
              PrepRankUp is not a coaching platform. Not a content platform. It's a performance intelligence layer
              that analyzes how you attempt an exam — not just how many marks you score.
            </p>
            <p className="text-graphite-700 text-base font-bold mb-6 italic">
              हम यह नहीं पूछते कि आपने क्या पढ़ा। हम यह समझते हैं कि आपने एग्जाम कैसे अटेम्प्ट किया।
            </p>
            <p className="text-sm text-graphite-800 font-bold mb-8">
              <strong>What We Measure:</strong> Time spent per question, Question selection & skipping behavior,
              Accuracy under pressure, Section-wise pacing, Repeated decision mistakes.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {[
                { title: 'Which questions you should have skipped', desc: 'Identify where time was wasted on low-yield questions.' },
                { title: 'Why accuracy dropped', desc: 'Understand which habits are hurting your rank.' },
                { title: 'What decisions matter most', desc: 'Get specific guidance, not general advice.' },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-olive/30 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-olive-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-graphite-900">{feature.title}</h4>
                    <p className="text-sm font-semibold text-graphite-700">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-graphite-950 hover:bg-graphite-900 text-white font-bold rounded-full px-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              और जानें (Know More)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;