import { Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';

const blogs = [
    {
        title: 'SSC CGL 2025: Complete Strategy',
        titleHi: 'SSC CGL 2025: संपूर्ण रणनीति',
        excerptHi: 'हमारी व्यापक तैयारी रणनीति से SSC CGL परीक्षा में महारत हासिल करें।',
        category: 'Strategy',
        categoryHi: 'रणनीति',
        date: '2 Jan, 2026',
        readTime: '8 min',
        author: 'Priya Sharma',
        gradient: 'from-blue-600 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
    },
    {
        title: 'SSC CGL 2024 Cutoff Analysis',
        titleHi: 'SSC CGL 2024 कटऑफ विश्लेषण',
        excerptHi: 'पिछले साल के कटऑफ ट्रेंड्स का विस्तृत विश्लेषण।',
        category: 'Cutoff',
        categoryHi: 'कटऑफ',
        date: '28 Dec, 2025',
        readTime: '6 min',
        author: 'Rahul Verma',
        gradient: 'from-orange-500 to-red-600',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
        title: 'Why Mock Tests Are Essential',
        titleHi: 'मॉक टेस्ट क्यों जरूरी हैं',
        excerptHi: 'जानें कैसे नियमित मॉक टेस्ट अभ्यास से प्रदर्शन बेहतर होता है।',
        category: 'Tips',
        categoryHi: 'टिप्स',
        date: '25 Dec, 2025',
        readTime: '5 min',
        author: 'Neha Gupta',
        gradient: 'from-emerald-500 to-teal-600',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80'
    },
    {
        title: 'Top 10 Mistakes to Avoid',
        titleHi: 'SSC में 10 बड़ी गलतियां',
        excerptHi: 'उन सामान्य गलतियों से सीखें जो कीमती अंक खर्च कर सकती हैं।',
        category: 'Tips',
        categoryHi: 'टिप्स',
        date: '22 Dec, 2025',
        readTime: '7 min',
        author: 'Amit Kumar',
        gradient: 'from-purple-500 to-pink-500',
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80'
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-100 bg-pink-50 text-pink-600 mb-4 backdrop-blur-sm shadow-sm">
                        <BookOpen size={16} />
                        <span className="text-xs font-bold tracking-wider uppercase">LATEST FROM BLOG</span>
                        <span className="opacity-80 text-xs font-hindi">/ ब्लॉग</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-graphite-900 mb-4">
                        विशेषज्ञ <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600">टिप्स</span> और मार्गदर्शन
                    </h2>
                    <p className="text-xl text-graphite-600 font-semibold mb-2">Expert Insights & Exam Tips</p>
                    <p className="text-graphite-500 max-w-2xl mx-auto">
                        नवीनतम परीक्षा रणनीतियां, कटऑफ विश्लेषण और तैयारी टिप्स हमारे विशेषज्ञों से।
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <article
                            key={index}
                            className="group bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 cursor-pointer flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-tr ${blog.gradient} opacity-20 mix-blend-overlay`}></div>
                                <span className={`absolute top-4 left-4 text-[10px] font-bold text-white bg-gradient-to-r ${blog.gradient} px-4 py-1.5 rounded-full shadow-lg`}>
                                    {blog.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-lg font-bold text-graphite-900 mb-1 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-blue-600 mb-3 font-hindi font-bold tracking-wide line-clamp-1">{blog.titleHi}</p>
                                <p className="text-sm text-graphite-500 mb-6 line-clamp-2 font-medium">
                                    {blog.excerptHi}
                                </p>

                                {/* Meta */}
                                <div className="mt-auto pt-4 border-t border-graphite-50">
                                    <div className="flex items-center justify-between text-[11px] font-bold text-graphite-400">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-graphite-100 flex items-center justify-center">
                                                <User size={12} className="text-graphite-400" />
                                            </div>
                                            <span>{blog.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={12} />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-graphite-300 mt-2 font-bold uppercase tracking-wider">
                                        <Calendar size={10} />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-5 rounded-2xl bg-white border-2 border-graphite-100 text-graphite-900 font-bold flex items-center gap-4 mx-auto hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md active:scale-95 group">
                        <div className="text-left">
                            <span className="block text-lg">Read All Articles</span>
                            <span className="block text-xs opacity-60 font-hindi">सभी लेख पढ़ें</span>
                        </div>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
