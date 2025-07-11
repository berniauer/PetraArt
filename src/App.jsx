import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import EmotionalTextSection from '@/components/sections/EmotionalTextSection';
import GallerySection from '@/components/sections/GallerySection';
import ArtistSection from '@/components/sections/ArtistSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>PetraArt</title>
        <meta name="description" content="Entdecken Sie einzigartige, abstrakte Kunstwerke, die Ihrem Zuhause eine Seele geben. Jedes Bild ist ein handgemaltes Original voller Energie und Persönlichkeit." />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Helmet> 
      
      <div className="min-h-screen bg-white font-stolzl">
        <Header />
        <main>
          <HeroSection />
          <EmotionalTextSection />
          <GallerySection />
          <ArtistSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;