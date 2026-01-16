import { Star } from 'lucide-react';

const SuccessMetrics = () => {
  const testimonials = [
    {
      quote: "I was stuck at 75 percentile for months. PrepRankUp's AI revealed I was spending 40% too much time on RC passages. After following their pacing strategy, I jumped to 96 percentile.",
      name: 'Ankit Sharma',
      role: 'IIM Mumbai Aspirant',
      avatar: 'A',
      metric: '+21',
      metricLabel: 'Percentile',
    },
    {
      quote: "The behavioral analytics showed me I was second-guessing 60% of my correct answers. Once I stopped this habit, my accuracy shot up by 25%.",
      name: 'Shreya Gupta',
      role: 'IIM Bangalore Aspirant',
      avatar: 'S',
      metric: '+25%',
      metricLabel: 'Accuracy',
    },
    {
      quote: "PrepRankUp revealed I was losing focus after 45 minutes. Their focus training techniques changed everything.",
      name: 'Rajesh Kumar',
      role: 'IIM Calcutta Aspirant',
      avatar: 'R',
      metric: '95th',
      metricLabel: 'Percentile',
    },
    {
      quote: "The question-level analysis showed me I was wasting time on impossible questions while missing easy ones. This insight boosted my score by 12 marks.",
      name: 'Arjun Verma',
      role: 'IIM Lucknow Aspirant',
      avatar: 'AV',
      metric: '+12',
      metricLabel: 'Marks',
    },
    {
      quote: "I always ran out of time in VARC. The AI coach taught me smart reading techniques and now I finish with 10 minutes to spare.",
      name: 'Meera Patel',
      role: 'IIM Kozhikode Aspirant',
      avatar: 'M',
      metric: '40%',
      metricLabel: 'Faster',
    },
    {
      quote: "I was freezing during actual tests. The AI identified my anxiety triggers and gave me specific strategies. My test-day performance finally matched my potential.",
      name: 'Priya Singh',
      role: 'IIM Ahmedabad Aspirant',
      avatar: 'P',
      metric: '90+',
      metricLabel: 'Percentile',
    },
  ];

  // Split testimonials into two columns
  const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonials.filter((_, i) => i % 2 === 1);

  // Double for seamless loop
  const doubledLeft = [...leftColumn, ...leftColumn];
  const doubledRight = [...rightColumn, ...rightColumn];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-graphite-100/50 mb-4">
      <div className="flex items-start gap-4">
        {/* Metric */}
        <div className="flex-shrink-0 text-center w-16">
          <div className="text-2xl font-black text-graphite-950">{testimonial.metric}</div>
          <p className="text-[10px] font-bold text-graphite-700 uppercase tracking-tighter">{testimonial.metricLabel}</p>
        </div>

        {/* Divider */}
        <div className="w-px min-h-[80px] bg-graphite-200 flex-shrink-0" />

        {/* Quote */}
        <div className="flex-1">
          {/* Rating */}
          <div className="flex items-center gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-graphite-900 font-bold text-sm leading-relaxed mb-3 line-clamp-3">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-olive to-olive/80 flex items-center justify-center text-white font-bold text-xs">
              {testimonial.avatar}
            </div>
            <div>
              <div className="font-black text-graphite-950 text-sm leading-none mb-1">{testimonial.name}</div>
              <div className="text-xs font-bold text-graphite-700">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-950"></span>
              <span className="text-sm font-black text-graphite-950 tracking-wider uppercase">Hamare Vidyarthi (Our Students)</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 mb-2">
              Hamare Vidyarthiyon Ki Raaye
            </h2>
            <p className="text-graphite-700 text-sm font-bold mb-4 italic">What Our Students Say</p>
            <p className="text-graphite-800 font-bold mb-6 max-w-md">
              देखिये कैसे SSC और सरकारी परीक्षाओं के एस्पिरेंट्स ने अपनी तैयारी को बेहतर बनाया AI-powered insights के साथ।
              (See how SSC & Govt exam aspirants improved their preparation with AI insights.)
            </p>

            <button className="inline-flex items-center gap-2 bg-graphite-950 text-white px-7 py-3 rounded-full font-black hover:bg-graphite-900 transition-all text-sm shadow-xl hover:shadow-2xl">
              सभी प्रतिक्रियाएं देखें (See All Testimonials)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right - Vertical Scrolling Testimonials */}
          <div className="relative h-[500px] overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            {/* Two Column Layout */}
            <div className="flex gap-4 h-full">
              {/* Left Column - Scrolls Up */}
              <div className="flex-1 overflow-hidden">
                <div className="testimonial-scroll-up">
                  {doubledLeft.map((testimonial, index) => (
                    <TestimonialCard key={`left-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* Right Column - Scrolls Down */}
              <div className="flex-1 overflow-hidden">
                <div className="testimonial-scroll-down">
                  {doubledRight.map((testimonial, index) => (
                    <TestimonialCard key={`right-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .testimonial-scroll-up {
          animation: scrollUp 25s linear infinite;
        }
        
        .testimonial-scroll-down {
          animation: scrollDown 25s linear infinite;
        }
        
        .testimonial-scroll-up:hover,
        .testimonial-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SuccessMetrics;
