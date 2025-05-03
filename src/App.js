import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Library from './components/sections/Library';
import Education from './components/sections/Education';
import Community from './components/sections/Community';
import MarketTicker from './components/ui/MarketTicker';
import FloatingAssistant from './components/ui/FloatingAssistant';
import ThemeToggle from './components/ui/ThemeToggle';
import Testimonials from './components/sections/Testimonials';
import PerformanceMetrics from './components/sections/PerformanceMetrics';
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <Library />
        <Education />  
        <Community />
        <MarketTicker />
        <div className="floating-buttons">
        <ThemeToggle />
        <FloatingAssistant />
      </div>
      <Testimonials />
      <PerformanceMetrics />
      </main>
    </div>
  );
}

export default App;