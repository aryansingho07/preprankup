import { useState, useEffect } from 'react';
import { Calendar, Clock, TrendingUp, Zap } from 'lucide-react';

interface ExamCard {
  id: string;
  name: string;
  icon: string;
  level: 'Beginner' | 'Advanced' | 'Expert';
  examDate: Date;
  gradient: string;
  progress: number;
}

const exams: ExamCard[] = [
  {
    id: 'ssc-cgl',
    name: 'SSC CGL 2026',
    icon: '📝',
    level: 'Advanced',
    examDate: new Date('2026-06-15'),
    gradient: 'from-olive to-olive-dark',
    progress: 68,
  },
  {
    id: 'ssc-chsl',
    name: 'SSC CHSL 2026',
    icon: '📋',
    level: 'Advanced',
    examDate: new Date('2026-07-20'),
    gradient: 'from-teal-500 to-teal-600',
    progress: 45,
  },
  {
    id: 'ssc-mts',
    name: 'SSC MTS 2026',
    icon: '📄',
    level: 'Beginner',
    examDate: new Date('2026-05-10'),
    gradient: 'from-emerald-500 to-emerald-600',
    progress: 55,
  },
  {
    id: 'govt-other',
    name: 'Other Govt Exams',
    icon: '🏛️',
    level: 'Advanced',
    examDate: new Date('2026-08-15'),
    gradient: 'from-amber-500 to-amber-600',
    progress: 32,
  },
];

const calculateTimeLeft = (examDate: Date) => {
  const now = new Date();
  const difference = examDate.getTime() - now.getTime();

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
  };
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-emerald-100 text-emerald-700';
    case 'Advanced':
      return 'bg-teal-100 text-teal-700';
    case 'Expert':
      return 'bg-olive/20 text-olive-dark';
    default:
      return 'bg-sand text-graphite-600';
  }
};

const ExamCard = ({ exam, index }: { exam: ExamCard; index: number }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(exam.examDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(exam.examDate));
    }, 60000);

    return () => clearInterval(timer);
  }, [exam.examDate]);

  return (
    <div
      className="group relative card-3d rounded-2xl p-6 cursor-pointer overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${exam.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exam.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {exam.icon}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(exam.level)}`}>
            {exam.level}
          </span>
        </div>

        {/* Exam Name */}
        <h3 className="font-display text-xl font-bold text-graphite-900 mb-1">{exam.name}</h3>
        <div className="flex items-center gap-2 text-graphite-700 font-medium text-sm mb-5">
          <Calendar className="w-4 h-4" />
          <span>{exam.examDate.toLocaleDateString('hi-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        {/* Countdown Timer */}
        <div className="bg-graphite-50 rounded-xl p-4 mb-5 border border-graphite-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-teal-700" />
            <span className="text-sm font-bold text-graphite-900">समय शेष (Time Remaining)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-2xl font-black text-teal-700 animate-countdown">{timeLeft.days}</div>
              <div className="text-[10px] font-bold text-graphite-600 uppercase tracking-wider">दिन (Days)</div>
            </div>
            <div className="text-graphite-400 font-bold">:</div>
            <div className="text-center">
              <div className="text-2xl font-black text-teal-700">{timeLeft.hours}</div>
              <div className="text-[10px] font-bold text-graphite-600 uppercase tracking-wider">घंटे (Hrs)</div>
            </div>
            <div className="text-graphite-400 font-bold">:</div>
            <div className="text-center">
              <div className="text-2xl font-black text-teal-700">{timeLeft.minutes}</div>
              <div className="text-[10px] font-bold text-graphite-600 uppercase tracking-wider">मिनट (Mins)</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-graphite-700 font-bold flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              तैयारी की स्थिति (Preparation Progress)
            </span>
            <span className="font-bold text-graphite-900">{exam.progress}%</span>
          </div>
          <div className="h-2 bg-graphite-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${exam.gradient} rounded-full transition-all duration-500`}
              style={{ width: `${exam.progress}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <button className={`w-full mt-5 py-3 rounded-xl bg-gradient-to-r ${exam.gradient} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2`}>
          <Zap className="w-4 h-4" />
          तैयारी शुरू करें
        </button>
      </div>
    </div>
  );
};

const ExamSelectionCards = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="exams">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white shadow-md border border-graphite-100 px-5 py-2.5 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-graphite-600">Exams We Support</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-graphite-900">
            Built First for
            <span className="text-olive"> SSC & Government Exams</span>
          </h2>
          <p className="text-graphite-700 text-base font-bold mb-4 italic">
            पहला फोकस: एसएससी और सरकारी परीक्षाएँ
          </p>
          <p className="text-lg text-graphite-800 font-medium">
            SSC (CGL, CHSL, MTS, आदि) और अन्य सरकारी परीक्षाएँ।
            हर एग्जाम का बिहेवियर अलग होता है। प्रेपरैंकअप उसी के हिसाब से एनालिसिस करता है।
          </p>
          <p className="text-sm font-bold text-graphite-600 mt-2 uppercase tracking-wide">(Other exams coming soon)</p>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {exams.map((exam, index) => (
            <ExamCard key={exam.id} exam={exam} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamSelectionCards;