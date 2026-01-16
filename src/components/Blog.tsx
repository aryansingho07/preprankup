import { Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';

const blogs = [
    {
        title: 'SSC CGL 2025: Complete Strategy',
        titleHi: 'SSC CGL 2025: संपूर्ण रणनीति',
        excerptHi: 'हमारी व्यापक तैयारी रणनीति से SSC CGL परीक्षा में महारत हासिल करें।',
        category: 'Strategy',
        categoryHi: 'रणनीति',
        date: '2 जनवरी, 2026',
        readTime: '8 मिनट',
        author: 'प्रिया शर्मा',
        color: 'from-blue-500 to-purple-500',
        bgColor: 'from-blue-50 to-purple-50',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop'
    },
    {
        title: 'SSC CGL 2024 Cutoff Analysis',
        titleHi: 'SSC CGL 2024 कटऑफ विश्लेषण',
        excerptHi: 'पिछले साल के कटऑफ ट्रेंड्स का विस्तृत विश्लेषण।',
        category: 'Cutoff',
        categoryHi: 'कटऑफ',
        date: '28 दिसंबर, 2025',
        readTime: '6 मिनट',
        author: 'राहुल वर्मा',
        color: 'from-orange-500 to-pink-500',
        bgColor: 'from-orange-50 to-pink-50',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
        title: 'Why Mock Tests Are Essential',
        titleHi: 'मॉक टेस्ट क्यों जरूरी हैं',
        excerptHi: 'जानें कैसे नियमित मॉक टेस्ट अभ्यास से प्रदर्शन बेहतर होता है।',
        category: 'Tips',
        categoryHi: 'टिप्स',
        date: '25 दिसंबर, 2025',
        readTime: '5 मिनट',
        author: 'नेहा गुप्ता',
        color: 'from-green-500 to-teal-500',
        bgColor: 'from-green-50 to-teal-50',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=250&fit=crop'
    },
    {
        title: 'Top 10 Mistakes to Avoid',
        titleHi: 'SSC में 10 बड़ी गलतियां',
        excerptHi: 'उन सामान्य गलतियों से सीखें जो कीमती अंक खर्च कर सकती हैं।',
        category: 'Tips',
        categoryHi: 'टिप्स',
        date: '22 दिसंबर, 2025',
        readTime: '7 मिनट',
        author: 'अमित कुमार',
        color: 'from-purple-500 to-indigo-500',
        bgColor: 'from-purple-50 to-indigo-50',
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=250&fit=crop'
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 lg:py-28 relative bg-white">
            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="badge badge-pink mb-4">
                        <BookOpen size={16} />
                        <span>LATEST FROM BLOG</span>
                        <span className="opacity-80 hindi-text">/ ब्लॉग</span>
                    </div>
                    <h2 className="section-title">
                        विशेषज्ञ <span className="gradient-text">टिप्स</span> और मार्गदर्शन
                    </h2>
                    <p className="text-lg text-[#475569] mb-2">Expert Insights & Exam Tips</p>
                    <p className="section-subtitle">
                        नवीनतम परीक्षा रणनीतियां, कटऑफ विश्लेषण और तैयारी टिप्स हमारे विशेषज्ञों से।
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {blogs.map((blog, index) => (
                        <article
                            key={index}
                            className="blog-card glass-card overflow-hidden group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${blog.color} opacity-60`}></div>
                                <span className="absolute top-3 left-3 text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    {blog.category} / {blog.categoryHi}
                                </span>
                            </div>

                            {/* Content */}
                            <div className={`p-5 bg-gradient-to-b ${blog.bgColor}`}>
                                <h3 className="text-base font-bold text-[#1E3A5F] mb-1 line-clamp-2 group-hover:text-[#8B5CF6] transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-[#8B5CF6] mb-2 hindi-text font-medium line-clamp-1">{blog.titleHi}</p>
                                <p className="text-sm text-[#475569] mb-3 line-clamp-2">
                                    {blog.excerptHi}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-3 border-t border-gray-200/50">
                                    <div className="flex items-center gap-2">
                                        <User size={12} />
                                        <span className="hindi-text">{blog.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={12} />
                                        <span className="hindi-text">{blog.readTime}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mt-2">
                                    <Calendar size={12} />
                                    <span className="hindi-text">{blog.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="btn-secondary px-8 py-4 text-base flex items-center gap-3 mx-auto">
                        <div>
                            <span className="block font-semibold">Read All Articles</span>
                            <span className="block text-xs opacity-70 hindi-text">सभी लेख पढ़ें</span>
                        </div>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
