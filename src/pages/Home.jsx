import FloatingNav from '../components/FloatingNav';
import ClientCarousel from '../components/ClientCarousel';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#111111', minHeight: '100vh' }}>
      <FloatingNav />
      <Hero />
      <ClientCarousel />
      <Footer />
    </div>
  );
}
