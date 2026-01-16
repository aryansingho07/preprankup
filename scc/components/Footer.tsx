import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Mock Tests', nameHi: 'मॉक टेस्ट', href: '#mock-tests' },
        { name: 'Features', nameHi: 'विशेषताएं', href: '#features' },
        { name: 'Pricing', nameHi: 'मूल्य', href: '#' },
        { name: 'Success Stories', nameHi: 'सफलता की कहानियां', href: '#' },
    ],
    exams: [
        { name: 'SSC CGL', href: '#' },
        { name: 'SSC CHSL', href: '#' },
        { name: 'SSC MTS', href: '#' },
        { name: 'SSC GD', href: '#' },
        { name: 'Delhi Police', href: '#' }
    ],
    resources: [
        { name: 'Blog', nameHi: 'ब्लॉग', href: '#blog' },
        { name: 'Study Material', nameHi: 'अध्ययन सामग्री', href: '#' },
        { name: 'Current Affairs', nameHi: 'करंट अफेयर्स', href: '#' },
        { name: 'Syllabus', nameHi: 'सिलेबस', href: '#' }
    ],
    company: [
        { name: 'About Us', nameHi: 'हमारे बारे में', href: '#about' },
        { name: 'Contact', nameHi: 'संपर्क', href: '#' },
        { name: 'Privacy Policy', nameHi: 'गोपनीयता', href: '#' },
        { name: 'Terms', nameHi: 'शर्तें', href: '#' }
    ]
};

const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600' }
];

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-8 bg-gradient-to-br from-[#1E3A5F] via-[#2C5282] to-[#1E3A5F] text-white">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="container-custom relative z-10">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 lg:p-10 mb-14 backdrop-blur-sm border border-white/10">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="mb-6 lg:mb-0 text-center lg:text-left">
                            <h3 className="text-xl font-bold mb-2">🔔 अपडेट रहें / Stay Updated</h3>
                            <p className="text-white/80">
                                नवीनतम परीक्षा सूचनाएं और टिप्स सीधे अपने इनबॉक्स में पाएं।
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                            <input
                                type="email"
                                placeholder="अपना ईमेल / Enter email"
                                className="px-5 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white min-w-0 sm:min-w-[260px]"
                            />
                            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg">
                                Subscribe / सब्सक्राइब
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold">
                                    Preprank<span className="text-blue-400">up</span>
                                </span>
                                <p className="text-xs text-white/60 hindi-text">प्रेप रैंक अप</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 mb-4 max-w-xs leading-relaxed">
                            भारत का प्रमुख AI-पावर्ड SSC परीक्षा तैयारी प्लेटफॉर्म। स्मार्ट मॉक टेस्ट और सिद्ध परिणाम।
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2.5 text-sm text-white/70">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-blue-400" />
                                <span>support@preprankup.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-green-400" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-orange-400" />
                                <span>नई दिल्ली / New Delhi</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold mb-4 text-blue-300">Product / प्रोडक्ट</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-purple-300">Exams / परीक्षाएं</h4>
                        <ul className="space-y-2">
                            {footerLinks.exams.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-green-300">Resources / संसाधन</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-orange-300">Company / कंपनी</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Colorful Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left flex items-center gap-2">
                        <p className="text-sm text-white/60">
                            © 2026 Preprankup. Made with
                        </p>
                        <Heart size={14} className="text-pink-500 fill-pink-500" />
                        <p className="text-sm text-white/60">in India</p>
                    </div>

                    {/* Colorful Social Links */}
                    <div className="flex items-center gap-2.5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all ${social.color}`}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
