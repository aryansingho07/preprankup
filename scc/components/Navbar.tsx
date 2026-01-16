'use client';

import { useState, useEffect } from 'react';
import { Menu, X, User, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', nameHi: 'विशेषताएं', href: '/#features' },
    { name: 'Mock Tests', nameHi: 'मॉक टेस्ट', href: '/#mock-tests' },
    { name: 'Pricing', nameHi: 'कीमत', href: '/pricing' },
    { name: 'About', nameHi: 'हमारे बारे में', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black">
                Preprank<span className="text-blue-600">up</span>
              </span>
              <span className="text-[10px] text-gray-400 hindi-text -mt-0.5">प्रेप रैंक अप</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium group transition-colors hover:text-blue-600">
                <span>{link.name}</span>
                <span className="block text-[10px] text-gray-400 hindi-text group-hover:text-blue-600">{link.nameHi}</span>
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-secondary text-sm flex items-center gap-2 py-2.5 px-4 bg-transparent border border-gray-200">
              <User size={18} />
              <div className="text-left">
                <span className="block leading-tight font-semibold">Dashboard</span>
                <span className="block text-[9px] opacity-70 hindi-text font-normal">डैशबोर्ड</span>
              </div>
            </button>
            <Link href="/pricing" className="btn-blue text-sm flex items-center gap-2 py-2.5 px-5 bg-blue-600 text-white rounded-lg">
              <Sparkles size={18} />
              <div className="text-left">
                <span className="block leading-tight font-semibold">Free Mock Test</span>
                <span className="block text-[9px] opacity-90 hindi-text font-normal">मुफ्त टेस्ट</span>
              </div>
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-black hover:text-blue-600 transition-colors py-2 border-b border-gray-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-semibold">{link.name}</span>
                <span className="ml-2 text-sm text-gray-400 hindi-text font-normal">{link.nameHi}</span>
              </Link>
            ))}
            <div className="pt-3 space-y-3">
              <button className="w-full text-sm flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-semibold">
                <User size={18} />
                Dashboard / डैशबोर्ड
              </button>
              <Link href="/pricing" className="w-full text-sm flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-semibold">
                <Sparkles size={18} />
                Free Mock Test / मुफ्त टेस्ट
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

