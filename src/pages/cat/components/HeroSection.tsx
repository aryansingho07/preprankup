import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Play, CheckCircle, BarChart3, Brain, Target, X, Volume2, VolumeX, Maximize, Minimize, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleVideoModal = (open: boolean) => {
        setIsVideoModalOpen(open);
        if (open) {
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(() => {
                        console.log('Autoplay prevented by browser');
                    });
                }
            }, 100);
        } else {
            setIsVideoPlaying(false);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsVideoPlaying(!isVideoPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (playerRef.current) {
            if (!isFullscreen) {
                if (playerRef.current.requestFullscreen) {
                    playerRef.current.requestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
            setIsFullscreen(!isFullscreen);
        }
    };

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full">
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 text-center lg:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-olive/20 bg-olive/10 text-olive-700 mb-4">
                                <Sparkles size={16} className="text-olive" />
                                <span className="text-sm font-bold tracking-tight">Performance Intelligence Layer</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-graphite-900 leading-[1.1] tracking-tight">
                                Performance Intelligence for <span className="text-olive">CAT Aspirants</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-graphite-700 leading-relaxed max-w-2xl font-medium">
                                Understand why you lose percentiles — and what exactly must change in your CAT attempts.
                            </p>

                            <p className="text-lg text-graphite-600 max-w-xl">
                                Built for serious CAT aspirants preparing for high-stakes MBA entrances who want clarity, not guesswork.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/register">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-graphite-900 text-white hover:bg-graphite-800 h-14 px-8 rounded-2xl text-lg font-bold shadow-xl shadow-graphite-900/10 transition-all hover:scale-105 active:scale-95"
                                >
                                    Attempt Free CAT Mock Test
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => handleVideoModal(true)}
                                className="w-full sm:w-auto border-olive/30 hover:bg-olive/5 h-14 px-8 rounded-2xl text-lg font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Play className="w-5 h-5 text-olive fill-olive" />
                                See How PrepRankUp for CAT Works
                            </Button>
                        </div>

                        {/* Quick Trust points */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-olive" />
                                <span className="text-sm font-bold text-graphite-600">Decision Analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-olive" />
                                <span className="text-sm font-bold text-graphite-600">Percentile Focused</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-olive" />
                                <span className="text-sm font-bold text-graphite-600">No Guesswork</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Modern Mockup */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="relative animate-float">
                            {/* Main Analysis Card */}
                            <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-8 border border-white/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-olive/5 via-transparent to-pink-500/5"></div>

                                <div className="relative flex items-center justify-between mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-graphite-900 flex items-center justify-center shadow-lg">
                                            <Brain className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-graphite-900 leading-tight">CAT Intelligence</h3>
                                            <p className="text-xs font-bold text-graphite-500 uppercase tracking-wider">Analysis Live</p>
                                        </div>
                                    </div>
                                    <div className="px-4 py-1.5 bg-olive/10 text-olive-700 rounded-full text-xs font-bold border border-olive/20 animate-pulse">
                                        Processing Attempts
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Attempt Breakdown */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: 'VARC', value: '98.2', color: 'bg-rose-400' },
                                            { label: 'DILR', value: '94.5', color: 'bg-olive' },
                                            { label: 'QA', value: '96.8', color: 'bg-graphite-600' }
                                        ].map((item) => (
                                            <div key={item.label} className="bg-white/50 p-4 rounded-3xl border border-black/5 text-center group hover:scale-105 transition-all duration-300">
                                                <div className={`w-2 h-2 rounded-full ${item.color} mx-auto mb-2`}></div>
                                                <p className="text-[10px] font-bold text-graphite-500 uppercase tracking-tighter mb-1">{item.label}</p>
                                                <p className="text-xl font-bold text-graphite-900">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Decision Insight */}
                                    <div className="p-6 bg-graphite-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-olive/20 blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-olive/40"></div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Target className="w-5 h-5 text-olive" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-olive-400 mb-1">Critical Mistake Found</p>
                                                <p className="text-sm text-white/80 font-medium leading-relaxed">
                                                    You spent 7.5 mins on DILR Set 3.
                                                    <span className="text-white block mt-1 font-bold">This set was un-attemptable under pressure.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section Pacing */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-xs font-bold text-graphite-500 uppercase">Section Pacing</span>
                                            <span className="text-xs font-bold text-olive">Optimal Range</span>
                                        </div>
                                        <div className="h-6 w-full bg-graphite-100 rounded-full overflow-hidden flex p-1">
                                            <div className="h-full bg-graphite-900 rounded-full w-[65%] shadow-lg transition-all duration-1000" style={{ transitionDelay: '1000ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-6 -right-6 bg-white shadow-2xl rounded-2xl p-4 border border-black/5 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 text-olive" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-graphite-500 uppercase tracking-tighter">Growth</p>
                                        <p className="text-lg font-bold text-graphite-900">+12.5% Tile</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={isVideoModalOpen} onOpenChange={handleVideoModal}>
                <DialogContent className="max-w-5xl w-full p-0 bg-black border-none overflow-hidden rounded-[2rem]">
                    <DialogHeader className="sr-only">
                        <DialogTitle>PrepRankUp for CAT Demo</DialogTitle>
                    </DialogHeader>

                    <div ref={playerRef} className="relative w-full aspect-video">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-contain"
                            poster="/PrepRankUp.webp"
                            muted={isMuted}
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                            onEnded={() => setIsVideoPlaying(false)}
                            controls={false}
                        >
                            <source src="/Demo Video.mp4" type="video/mp4" />
                        </video>

                        {/* Custom Video Controls Overlay */}
                        <div className="absolute inset-0 group">
                            {!isVideoPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors cursor-pointer" onClick={togglePlayPause}>
                                    <div className="w-24 h-24 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <Play className="w-10 h-10 text-white ml-2 fill-white" />
                                    </div>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <button onClick={togglePlayPause} className="hover:text-olive transition-colors">
                                            {isVideoPlaying ? <div className="flex gap-1"><div className="w-1 h-4 bg-white" /><div className="w-1 h-4 bg-white" /></div> : <Play className="w-5 h-5 fill-white" />}
                                        </button>
                                        <button onClick={toggleMute} className="hover:text-olive transition-colors">
                                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={toggleFullscreen} className="hover:text-olive transition-colors">
                                            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                                        </button>
                                        <button onClick={() => handleVideoModal(false)} className="hover:text-olive transition-colors">
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
