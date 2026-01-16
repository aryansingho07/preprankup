import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'SSC Exam Preparation',
    subtitle: 'Crack SSC with',
    description: 'AI-Powered Mock Tests',
    gradient: 'from-teal-500 via-teal-600 to-teal-700',
    icon: '📝',
  },
  {
    id: 2,
    title: 'CAT Exam Preparation',
    subtitle: 'Master CAT 2026 with',
    description: 'Smart Analytics',
    gradient: 'from-olive via-olive-dark to-graphite-800',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Banking Exam Preparation',
    subtitle: 'Ace Banking Exams with',
    description: 'Speed-Based Training',
    gradient: 'from-amber-500 via-amber-600 to-amber-700',
    icon: '🏦',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl mx-auto max-w-7xl mt-6">
      {/* Slides Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} rounded-3xl`}
            />
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl float-animation" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-16">
              <div className="text-6xl md:text-8xl mb-6 animate-scale-in">{slide.icon}</div>
              <p className="text-white/80 text-lg md:text-xl font-medium mb-2">
                {slide.subtitle}
              </p>
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4">
                {slide.description}
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-xl mb-8">
                Join thousands of aspirants preparing for {slide.title} with our AI-powered platform
              </p>
              <Button 
                size="lg" 
                className="bg-white text-graphite-900 hover:bg-cream-DEFAULT shadow-xl rounded-full px-8"
              >
                Start Preparing Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;