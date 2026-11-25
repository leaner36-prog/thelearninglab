import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { WhyUs } from '@/components/WhyUs';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Booking } from '@/components/Booking';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
