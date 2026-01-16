import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingMockTestCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div
        className="relative flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(219,234,254,0.3) 50%, rgba(255,255,255,0.9) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-gray-800 text-sm whitespace-nowrap">
            Try our free mock tests!
          </span>
        </div>

        <Link to="/register">
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
          >
            Start Now →
          </Button>
        </Link>

        <button
          onClick={handleDismiss}
          className="ml-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default FloatingMockTestCTA;
