import { useEffect, useRef } from 'react';

const SocialProofSection = () => {
  const partners = [
    { name: 'Career Launcher', logo: '/Career Launcher.png' },
    { name: 'Cracku', logo: '/Cracku.png' },
    { name: 'Hitbullseye', logo: '/Hitbullseye.png' },
    { name: 'MBA Guru', logo: '/MBA Guru.png' },
    { name: 'TIME Institute', logo: '/TIME Institute.png' },
    { name: 'TopRankers', logo: '/Toprankers.png' },
  ];

  const stats = [
    { value: '95%', label: 'Accuracy Improvement' },
    { value: '50+', label: 'Mock Tests' },
    { value: '24/7', label: 'AI Analysis' },
    { value: '1K+', label: 'Active Students' },
  ];

  // Double the partners for seamless loop
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-16 relative overflow-hidden">

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-md border border-graphite-200 px-4 py-2 rounded-full">
              <span className="text-lg">🏛️</span>
              <span className="text-sm font-semibold text-graphite-900">Recognized by Government of India (DPIIT – Startup India)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-md border border-graphite-200 px-4 py-2 rounded-full">
              <span className="text-lg">📝</span>
              <span className="text-sm font-semibold text-graphite-900">Designed for SSC & Government Exams</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-md border border-graphite-200 px-4 py-2 rounded-full">
              <span className="text-lg">🎯</span>
              <span className="text-sm font-semibold text-graphite-900">Built on decision-analysis, not content hype</span>
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 mb-4">
            Built on <span className="text-olive">Decision-Analysis</span>, Not Content Hype
          </h2>
          <p className="text-graphite-800 text-lg font-medium max-w-2xl mx-auto mb-2">
            Designed for SSC & Government Exams.
          </p>
          <p className="text-graphite-700 text-base font-semibold max-w-xl mx-auto italic">
            भरोसा क्लेम्स से नहीं, एक्यूरेसी से बनता है।
          </p>
        </div>

        {/* Infinite Scrolling Logo Carousel */}
        <div className="relative mb-16">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="logo-carousel flex gap-6 md:gap-8">
              {doubledPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl shadow-md border border-graphite-100 flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-olive/50 cursor-pointer">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      loading="lazy"
                    />
                    <span className="text-xs text-graphite-500 mt-1 hidden md:block truncate max-w-full">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-graphite-50 cursor-default"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-graphite-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-carousel {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        .logo-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProofSection;
