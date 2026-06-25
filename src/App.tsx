import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Work from './components/Work';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CTA from './components/CTA';
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Work />
      <Timeline />
      <Skills />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
