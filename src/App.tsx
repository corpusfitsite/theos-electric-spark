// main/src/pages/Index.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import ReviewsSection from '@/components/ReviewsSection'; // 1. Importe o novo componente
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
        <ReviewsSection /> {/* 2. Adicione-o aqui */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
