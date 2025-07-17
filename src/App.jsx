// App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/sections/Footer';

import HeroSection from '@/components/sections/HeroSection';
import EmotionalTextSection from '@/components/sections/EmotionalTextSection';
import GallerySection from '@/components/sections/GallerySection';
import ArtistSection from '@/components/sections/ArtistSection';
import ContactSection from '@/components/sections/ContactSection';

import ReferencesPage from '@/pages/references'; // Deine Timeline-Seite

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="de" />
        <title>PetraArt</title>
        <meta
          name="description"
          content="Entdecken Sie einzigartige, abstrakte Kunstwerke, die Ihrem Zuhause eine Seele geben. Jedes Bild ist ein handgemaltes Original voller Energie und Persönlichkeit."
        />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Helmet>

      <div className="min-h-screen bg-white font-stolzl">
        <Header />

        <main>
          <Routes>
            {/* Home-Route mit allen Sections */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <EmotionalTextSection />
                  <GallerySection />
                  <ArtistSection />
                  <ContactSection />
                </>
              }
            />

            {/* Referenzen-/Werdegang-Seite */}
            <Route
              path="/references"
              element={<ReferencesPage />}
            />
          </Routes>
        </main>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
