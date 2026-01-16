import { Lightbulb, RefreshCw, ClipboardCheck, CheckCircle, Copy, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyPrepRankUp = () => {
  const reasons = [
    {
      icon: Copy,
      title: 'No Content Overload',
      description: 'We focus on performance intelligence, not endless content. Quality analysis over quantity of materials.',
    },
    {
      icon: Settings,
      title: 'No Generic Tips',
      description: 'Get specific, actionable insights tailored to your exam performance. No vague advice that applies to everyone.',
    },
    {
      icon: RefreshCw,
      title: 'No False Guarantees',
      description: 'We don\'t promise miracles. We provide honest, data-driven insights that help you improve genuinely.',
    },
    {
      icon: CheckCircle,
      title: 'Deep Focus on Decision Quality',
      description: 'We analyze how you make decisions during exams, not just whether your answers are right or wrong.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-graphite-200 px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-olive-dark" />
              <span className="text-sm font-bold text-graphite-900 leading-none">Only Features</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-graphite-900 leading-tight">
              Why PrepRankUp
              <br />
              <span className="text-olive">Works</span>
            </h2>

            <p className="text-lg text-graphite-800 font-medium mb-4">
              PrepRankUp is not a coaching platform. Not a content platform. It's a performance intelligence layer
              that brings clarity where confusion has become normal.
            </p>
            <p className="text-graphite-700 text-base font-bold mb-10 italic">
              ज्यादा पढ़ना सॉल्यूशन नहीं होता। बेहतर डिसीजन्स सॉल्यूशन होते हैं। (Zyada padhna solution nahi hota. Behtar decisions solution hote hain.)
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-graphite-200 flex items-center justify-center flex-shrink-0 group-hover:bg-olive/20 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-graphite-900 group-hover:text-olive-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-graphite-900 mb-1">{reason.title}</h4>
                    <p className="text-sm font-semibold text-graphite-700">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="float-card rounded-3xl p-6 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-graphite-500">Tue, Oct Order Trips</p>
                  <h4 className="font-semibold text-graphite-900">Statistics</h4>
                </div>
                <div className="flex items-center gap-2 bg-graphite-100 rounded-lg px-3 py-1.5">
                  <span className="text-xs text-graphite-600">Weekly</span>
                </div>
              </div>

              {/* Bar Chart Visual */}
              <div className="flex items-end justify-between gap-3 h-48 mb-6 px-4">
                {[
                  { day: 'Mon', h1: 40, h2: 60, h3: 30 },
                  { day: 'Tue', h1: 50, h2: 45, h3: 55 },
                  { day: 'Wed', h1: 35, h2: 70, h3: 45 },
                  { day: 'Thu', h1: 60, h2: 55, h3: 40 },
                  { day: 'Fri', h1: 45, h2: 50, h3: 65 },
                  { day: 'Sat', h1: 55, h2: 40, h3: 50 },
                  { day: 'Sun', h1: 70, h2: 65, h3: 35 },
                ].map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex gap-0.5 items-end h-40">
                      <div
                        className="flex-1 bg-graphite-900 rounded-t-sm transition-all duration-500"
                        style={{ height: `${item.h1}%` }}
                      />
                      <div
                        className="flex-1 bg-amber-400 rounded-t-sm transition-all duration-500"
                        style={{ height: `${item.h2}%` }}
                      />
                      <div
                        className="flex-1 bg-rose-300 rounded-t-sm transition-all duration-500"
                        style={{ height: `${item.h3}%` }}
                      />
                    </div>
                    <span className="text-xs text-graphite-500">{item.day}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6">
                {[
                  { label: 'SSC', color: 'bg-graphite-900' },
                  { label: 'CAT', color: 'bg-amber-400' },
                  { label: 'Banking', color: 'bg-rose-300' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-xs text-graphite-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-olive/20 to-olive/5 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrepRankUp;