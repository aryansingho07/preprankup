import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Plans', href: '/plans' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/20 backdrop-blur-2xl shadow-lg border-b border-white/30 py-3'
          : 'bg-white/10 backdrop-blur-xl py-5'
        }`}
      style={{
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(243,198,211,0.15) 50%, rgba(255,255,255,0.2) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(243,198,211,0.08) 100%)'
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-graphite-900 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-display font-bold text-xl text-graphite-900 tracking-tight">
            Prep<span className="text-olive">RankUp</span>
          </span>
        </Link>

        {/* Desktop Navigation - Dark Pill Style */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 bg-graphite-900/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-xl border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  transition-all duration-300 text-sm font-semibold px-4 py-2 rounded-full
                  ${isActive(link.href)
                    ? 'bg-olive text-graphite-900 shadow-lg shadow-olive/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-graphite-700 hover:text-olive transition-colors">
            Login
          </Link>
          <Link to="/register">
            <Button
              size="sm"
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-bold rounded-full px-6 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              Sign Up Free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-graphite-900 hover:bg-graphite-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl mt-2 mx-4 rounded-2xl p-4 animate-scale-in shadow-xl border border-graphite-100 overflow-hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  hover:bg-graphite-50 transition-all duration-200 text-sm font-bold py-3 px-4 rounded-xl
                  ${isActive(link.href) ? 'text-olive bg-olive/5' : 'text-graphite-600 hover:text-graphite-900'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-graphite-100 mt-2">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center border-graphite-200 rounded-xl h-12 font-bold">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl h-12 font-bold shadow-lg shadow-pink-500/10">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;