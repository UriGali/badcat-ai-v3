import FloatingNav from './components/FloatingNav';
import VideoWall from './components/VideoWall';
import ClientCarousel from './components/ClientCarousel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#111111', minHeight: '100vh' }}>
      <FloatingNav />
      <VideoWall />
      <ClientCarousel />
      <Footer />
    </div>
  );
}
