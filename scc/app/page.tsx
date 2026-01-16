import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MockTests from '@/components/MockTests';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MockTests />
      <About />
      <Blog />
      <Footer />
    </main>
  );
}
