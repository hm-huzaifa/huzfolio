import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Home() {
  return (
      <div className="relative">
        <BackgroundAnimation />
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
  );
}

