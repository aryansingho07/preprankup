import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingMockTestCTA from '@/components/FloatingMockTestCTA';
import HeroSection from './components/HeroSection';
import SocialProofStrip from './components/SocialProofStrip';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ClaritySection from './components/ClaritySection';
import MockTestCTA from './components/MockTestCTA';
import ExamFocusSection from './components/ExamFocusSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import BootcampPlansSection from './components/BootcampPlansSection';
import ClosingSection from './components/ClosingSection';

// Easing function for smooth transitions
const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Interpolate between two colors
const interpolateColor = (color1: number[], color2: number[], factor: number): number[] => {
    return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
};

const Home = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
        setScrollProgress(progress);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Define color palette matching main page (pink/peach)
    const softPink = [255, 220, 225];
    const warmPeach = [255, 230, 220];
    const creamBase = [255, 252, 250];
    const pureWhite = [255, 255, 255];

    let colorBlend: number;
    if (scrollProgress <= 0.5) {
        colorBlend = easeInOutCubic(scrollProgress * 2);
    } else {
        colorBlend = 1 - easeInOutCubic((scrollProgress - 0.5) * 2);
    }

    const currentPink = interpolateColor(softPink, pureWhite, colorBlend);
    const currentPeach = interpolateColor(warmPeach, pureWhite, colorBlend);
    const currentCream = interpolateColor(creamBase, pureWhite, colorBlend);

    const pinkOpacity = Math.max(0.03, 0.55 * (1 - colorBlend * 0.95));
    const peachOpacity = Math.max(0.02, 0.45 * (1 - colorBlend * 0.92));

    const bgR = currentCream[0];
    const bgG = currentCream[1];
    const bgB = currentCream[2];

    return (
        <div
            className="min-h-screen overflow-x-hidden transition-colors duration-500 ease-out"
            style={{
                backgroundColor: `rgb(${bgR}, ${bgG}, ${bgB})`
            }}
        >
            <Navbar />
            <div className="relative">
                {/* Dynamic background layers */}
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        background: `
              radial-gradient(ellipse 120% 50% at 50% 15%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity}) 0%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity * 0.3}) 40%, 
                transparent 70%),
              radial-gradient(ellipse 100% 40% at 70% 8%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity}) 0%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity * 0.25}) 50%, 
                transparent 75%),
              radial-gradient(ellipse 90% 35% at 25% 12%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity * 0.85}) 0%, 
                transparent 65%)
            `,
                        transition: 'background 0.15s ease-out'
                    }}
                />

                <div className="relative z-10 pt-20">
                    <HeroSection />
                    <SocialProofStrip />
                    <ProblemSection />
                    <SolutionSection />
                    <ClaritySection />
                    <MockTestCTA />
                    <ExamFocusSection />
                    <DifferentiatorSection />
                    <BootcampPlansSection />
                    <ClosingSection />
                </div>
            </div>
            <Footer />
            <FloatingMockTestCTA />
        </div>
    );
};

export default Home;
