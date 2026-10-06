import { AboutSection } from './components/AboutSection.jsx';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { JoinSection } from './components/JoinSection.jsx';
import { PeaksSection } from './components/PeaksSection.jsx';

export default function App() {
  return (
    <div className="overflow-hidden bg-paper">
      <Header />
      <main id="top">
        <Hero />
        <AboutSection />
        <PeaksSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
