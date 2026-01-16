import { Button } from '@/components/ui/button';
import { Star, Users, BookOpen, Award, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(222 39% 11%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
        {/* Top Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2.5 rounded-full border border-graphite-100">
            <span className="text-sm font-medium text-graphite-600">✨ Recognized by DPIIT (Startup India)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up text-graphite-900 leading-tight">
            Performance Intelligence
            <br />
            <span className="text-olive">for High-Stakes Exams</span>
          </h1>
          <p className="text-graphite-400 text-sm md:text-base max-w-xl mx-auto mb-2 animate-slide-up delay-50 italic">
            हाई-स्टेक्स एग्जाम्स के लिए परफॉर्मेंस इंटेलिजेंस
          </p>

          <p className="text-graphite-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-2 animate-slide-up delay-100">
            Understand why you lose marks — and what exactly must change in your decisions.
          </p>
          <p className="text-graphite-500 text-sm md:text-base font-medium max-w-xl mx-auto mb-6 animate-slide-up delay-100 italic">
            सिर्फ स्कोर नहीं — समझिए गलती कहाँ हुई और अगला अटेम्प्ट कैसे बेहतर हो।
          </p>

          <p className="text-graphite-700 text-base font-semibold max-w-xl mx-auto mb-2 animate-slide-up delay-150">
            Built for SSC and Government exam aspirants who prepare seriously, but want clarity — not guesswork.
          </p>
          <p className="text-graphite-600 text-sm font-medium max-w-lg mx-auto mb-10 animate-slide-up delay-150 italic">
            उन एस्पिरेंट्स के लिए जो मेहनत करते हैं, पर क्लैरिटी चाहते हैं।
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg border border-white/20"
              >
                🎯 Attempt Free Mock Test
              </Button>
            </Link>
            <Link to="/plans">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-10 py-7 rounded-full transition-all duration-300 hover:-translate-y-1 text-lg"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
          <p className="text-graphite-600 text-xs font-semibold mt-3 animate-slide-up delay-200">
            Free mock + detailed performance analysis
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative max-w-5xl mx-auto animate-slide-up delay-300">
          {/* Main Dashboard Card */}
          <div className="dashboard-card p-6 md:p-8 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-graphite-900 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-graphite-900">Promotion Analysis</h3>
                  <p className="text-sm text-graphite-500">Your exam preparation dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">Live</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left - Score Card */}
              <div className="bg-gradient-to-br from-graphite-50 to-white rounded-2xl p-5 border border-graphite-100">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-olive" />
                  <span className="text-sm font-medium text-graphite-600">Score Target</span>
                </div>
                <div className="text-5xl font-bold text-graphite-900 mb-2">% 86</div>
                <p className="text-sm text-graphite-500">+12% from last month</p>

                {/* Mini Progress Bars */}
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'Quant', value: 78, color: 'bg-teal-500' },
                    { label: 'DILR', value: 85, color: 'bg-olive' },
                    { label: 'VARC', value: 92, color: 'bg-amber-500' },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-graphite-600">{item.label}</span>
                        <span className="font-medium text-graphite-900">{item.value}%</span>
                      </div>
                      <div className="h-1.5 bg-graphite-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-700`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle - Activity */}
              <div className="bg-gradient-to-br from-graphite-50 to-white rounded-2xl p-5 border border-graphite-100">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-graphite-600">Recent Activity</span>
                </div>

                <div className="space-y-3">
                  {[
                    { exam: 'CAT Mock #12', score: '94/120', time: '2h ago', status: 'completed' },
                    { exam: 'SSC Practice', score: '78/100', time: '5h ago', status: 'completed' },
                    { exam: 'Banking Quiz', score: 'In Progress', time: 'Now', status: 'active' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-graphite-100 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-graphite-900">{item.exam}</p>
                        <p className="text-xs text-graphite-500">{item.time}</p>
                      </div>
                      <span className={`text-sm font-semibold ${item.status === 'active' ? 'text-olive' : 'text-graphite-700'}`}>
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Revenue/Stats */}
              <div className="bg-gradient-to-br from-graphite-50 to-white rounded-2xl p-5 border border-graphite-100">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-medium text-graphite-600">My Analytics</span>
                </div>

                <div className="text-4xl font-bold text-graphite-900 mb-1">$24,120</div>
                <p className="text-sm text-graphite-500 mb-4">Tests Completed</p>

                {/* Bar Chart Visual */}
                <div className="flex items-end gap-2 h-20">
                  {[65, 80, 45, 90, 70, 85, 55].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-sm transition-all duration-500 hover:from-olive hover:to-olive-light"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats - Positioned around dashboard */}
          <div className="absolute -top-4 -right-4 stat-card rounded-2xl px-5 py-4 float-animation hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-graphite-500">Mock Tests</p>
                <p className="text-xl font-bold text-graphite-900">500+</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 stat-card rounded-2xl px-5 py-4 float-animation delay-300 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-olive/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-olive-dark" />
              </div>
              <div>
                <p className="text-sm text-graphite-500">Active Aspirants</p>
                <p className="text-xl font-bold text-graphite-900">50,000+</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/4 -right-8 stat-card rounded-2xl px-5 py-4 float-animation delay-500 hidden xl:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-graphite-500">Exams Covered</p>
                <p className="text-xl font-bold text-graphite-900">15+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-24 animate-fade-in delay-500">
          <p className="text-center text-sm font-bold text-graphite-500 mb-10 tracking-widest uppercase">Trusted by aspirants from top institutes</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              { name: 'Cracku', src: '/Cracku.png' },
              { name: 'TIME Institute', src: '/TIME Institute.png' },
              { name: 'Hitbullseye', src: '/Hitbullseye.png' },
              { name: 'Career Launcher', src: '/Career Launcher.png' },
              { name: 'MBA Guru', src: '/MBA Guru.png' },
              { name: 'Toprankers', src: '/Toprankers.png' },
            ].map((logo) => (
              <div
                key={logo.name}
                className="flex items-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-12 w-auto object-contain cursor-pointer"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;