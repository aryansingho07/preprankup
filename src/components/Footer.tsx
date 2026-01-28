import { Button } from '@/components/ui/button';
import {
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  ArrowRight,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Product': ['Pricing', 'FAQ', 'Support'],
    'Legal Information': ['Privacy Policy', 'Terms of Service', 'Cookies Policy'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const getHref = (link: string) => {
    switch (link) {
      case 'Pricing': return '/plans';
      case 'FAQ': return '/faq';
      case 'Support': return '/support';
      case 'Privacy Policy': return '/privacy';
      case 'Terms of Service': return '/terms';
      case 'Cookies Policy': return '/cookies';
      case 'Home': return '/';
      default: return '#';
    }
  };

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(255,246,236,0.3) 0%, rgba(243,198,211,0.25) 30%, rgba(247,214,193,0.2) 60%, rgba(255,246,236,1) 100%)'
    }}>
      {/* CTA Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-graphite-900">
            Built With Restraint.
            <br />
            Backed by Thinking.
          </h2>
          <p className="text-graphite-700 text-base font-bold mb-6 italic">
            शोर से नहीं, समझ से बनाया गया प्लेटफॉर्म। (Shor se nahi, samajh se banaaya gaya platform.)
          </p>
          <p className="text-lg text-graphite-800 font-medium max-w-2xl mx-auto mb-4">
            PrepRankUp exists to bring clarity where confusion has become normal.
            If you are serious about SSC or government exams — and want to understand your performance honestly —
            this platform is built for you.
          </p>
          <p className="text-graphite-700 text-base font-bold mb-8 italic">
            अगर आप सीरियस हैं, हम भी सीरियस हैं। (Agar aap serious hain, hum bhi serious hain.)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
              >
                🎯 मुफ्त अभ्यास शुरू करें (Attempt Free Mock Test)
              </Button>
            </Link>
            <Link to="/plans">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white font-bold px-10 rounded-full transition-all duration-300"
              >
                योजनाएं देखें (View Plans)
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-graphite-900 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-display font-bold text-xl text-graphite-900">
                Prep<span className="text-olive">RankUp</span>
              </span>
            </a>
            <p className="text-graphite-800 font-semibold mb-6 max-w-sm">
              Performance Intelligence for Aspirants Who Think Seriously.
              Built for SSC & Government exam aspirants who want clarity — not guesswork.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-graphite-900 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={getHref(link)}
                      className="text-graphite-600 hover:text-graphite-900 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-graphite-200 pt-8">
          {/* Top Row - Logo and Nav */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-graphite-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-display font-semibold text-graphite-900">PrepRankUp</span>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6">
              {['Home', 'Exams', 'Mock Tests', 'About Us'].map((link) => (
                <a
                  key={link}
                  href={getHref(link)}
                  className="text-sm text-graphite-600 hover:text-graphite-900 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-graphite-200 flex items-center justify-center text-graphite-500 hover:text-graphite-900 hover:border-graphite-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row - Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-graphite-500">
            <p>© 2024 PrepRankUp. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="hover:text-graphite-900 transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-graphite-900 transition-colors">Privacy Policy</a>
              <a href="/cookies" className="hover:text-graphite-900 transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;