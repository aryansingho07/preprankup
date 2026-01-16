import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import ExamSelectionCards from '@/components/ExamSelectionCards';
import MultiExamSection from '@/components/MultiExamSection';
import AISection from '@/components/AISection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import MockTestSection from '@/components/MockTestSection';
import WhyPrepRankUp from '@/components/WhyPrepRankUp';
import SuccessMetrics from '@/components/SuccessMetrics';
import Footer from '@/components/Footer';
import FloatingMockTestCTA from '@/components/FloatingMockTestCTA';

// Easing function for smooth transitions
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Interpolate between two colors
const interpolateColor = (color1: number[], color2: number[], factor: number): number[] => {
  return color1.map((c, i) => Math.round(c + (color2[i] - c) * factor));
};

const Index = () => {
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

  // Define color palette matching reference image (RGB values)
  const softPink = [255, 220, 225]; // Soft pink/salmon - #FFDCE1
  const warmPeach = [255, 230, 220]; // Warm peach/coral - #FFE6DC
  const creamBase = [255, 252, 250]; // Cream white - #FFFCFA
  const pureWhite = [255, 255, 255]; // Pure white - #FFFFFF

  // Calculate eased transition values
  // Phase 1: 0-0.5 scroll -> fade from pink-cream to white
  // Phase 2: 0.5-1.0 scroll -> fade from white back to pink-cream

  let colorBlend: number;
  if (scrollProgress <= 0.5) {
    // Fading to white (0 at start, 1 at middle)
    colorBlend = easeInOutCubic(scrollProgress * 2);
  } else {
    // Returning to pink-cream (1 at middle, 0 at end)
    colorBlend = 1 - easeInOutCubic((scrollProgress - 0.5) * 2);
  }

  // Calculate current colors based on blend factor
  // When colorBlend = 0, use full pink-peach colors
  // When colorBlend = 1, use pure white
  const currentPink = interpolateColor(softPink, pureWhite, colorBlend);
  const currentPeach = interpolateColor(warmPeach, pureWhite, colorBlend);
  const currentCream = interpolateColor(creamBase, pureWhite, colorBlend);

  // Calculate opacities for gradient layers (more subtle, premium feel)
  const pinkOpacity = Math.max(0.03, 0.55 * (1 - colorBlend * 0.95));
  const peachOpacity = Math.max(0.02, 0.45 * (1 - colorBlend * 0.92));
  const ambientOpacity = Math.max(0.01, 0.3 * (1 - colorBlend * 0.88));

  // Background color - smooth transition from cream to pure white and back
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
        {/* Dynamic multi-layer gradient overlay with smooth scroll transitions */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              /* Primary hero glow - centered pink */
              radial-gradient(ellipse 120% 50% at 50% 15%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity}) 0%, 
                rgba(${currentPink.join(',')}, ${pinkOpacity * 0.3}) 40%, 
                transparent 70%),
              
              /* Secondary warm peach accent */
              radial-gradient(ellipse 100% 40% at 70% 8%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity}) 0%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity * 0.25}) 50%, 
                transparent 75%),
              
              /* Left side peach glow */
              radial-gradient(ellipse 90% 35% at 25% 12%, 
                rgba(${currentPeach.join(',')}, ${peachOpacity * 0.85}) 0%, 
                transparent 65%),
              
              /* Ambient mid-section glow */
              radial-gradient(ellipse 160% 60% at 30% 30%, 
                rgba(${currentPink.join(',')}, ${ambientOpacity}) 0%, 
                transparent 60%),
              radial-gradient(ellipse 140% 55% at 80% 35%, 
                rgba(${currentPeach.join(',')}, ${ambientOpacity * 0.9}) 0%, 
                transparent 55%),
              
              /* Center ambient diffusion */
              radial-gradient(ellipse 180% 70% at 50% 50%, 
                rgba(${currentCream.join(',')}, ${ambientOpacity * 2.5}) 0%, 
                transparent 60%),
              
              /* Lower ambient zones */
              radial-gradient(ellipse 200% 80% at 40% 75%, 
                rgba(${currentPink.join(',')}, ${ambientOpacity * 0.5}) 0%, 
                transparent 55%),
              radial-gradient(ellipse 180% 70% at 70% 85%, 
                rgba(${currentPeach.join(',')}, ${ambientOpacity * 0.4}) 0%, 
                transparent 50%)
            `,
            transition: 'background 0.15s ease-out'
          }}
        />

        {/* Secondary ambient layer for depth */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(circle 900px at 30% 15%, 
                rgba(${currentPink.join(',')}, ${ambientOpacity * 0.6}) 0%, 
                transparent 60%),
              radial-gradient(circle 700px at 70% 20%, 
                rgba(${currentPeach.join(',')}, ${ambientOpacity * 0.5}) 0%, 
                transparent 55%),
              radial-gradient(circle 800px at 20% 50%, 
                rgba(${currentPink.join(',')}, ${ambientOpacity * 0.4}) 0%, 
                transparent 50%),
              radial-gradient(circle 750px at 85% 55%, 
                rgba(${currentPeach.join(',')}, ${ambientOpacity * 0.35}) 0%, 
                transparent 50%),
              radial-gradient(circle 850px at 50% 80%, 
                rgba(${currentPink.join(',')}, ${ambientOpacity * 0.3}) 0%, 
                transparent 55%)
            `,
            transition: 'background 0.15s ease-out'
          }}
        />

        {/* Content layer */}
        <div className="relative z-10">
          <HeroSection />
          <SocialProofSection />
          <ExamSelectionCards />
          <KeyFeaturesSection />
          <AISection />
          <MultiExamSection />
          <MockTestSection />
          <WhyPrepRankUp />
          <SuccessMetrics />
        </div>
      </div>
      <Footer />
      <FloatingMockTestCTA />
    </div>
  );
};

export default Index;
