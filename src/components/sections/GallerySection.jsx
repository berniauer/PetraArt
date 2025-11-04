import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Lightbox from '@/components/common/Lightbox';
import artworks from '@/lib/artworks';

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // responsive items per page: desktop 3, tablet 2, mobile 1
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3; // lg and above
      if (w >= 768) return 2; // md
      return 1; // sm
    };

    const apply = () => {
      const newCount = calc();
      setItemsPerPage((prev) => {
        if (prev === newCount) return prev;
        // adjust startIndex so it's aligned to the new page size
        setStartIndex((si) => {
          const page = Math.floor(si / newCount);
          const newStart = page * newCount;
          // ensure bounds
          return Math.min(newStart, Math.max(0, artworks.length - newCount));
        });
        return newCount;
      });
    };

    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    const newStartIndex = startIndex + itemsPerPage;
    if (newStartIndex < artworks.length) {
      setStartIndex(newStartIndex);
    }
  };
  
  const prevPage = () => {
    const newStartIndex = startIndex - itemsPerPage;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };
  
  const getCurrentArtworks = () => {
    return artworks.slice(startIndex, startIndex + itemsPerPage);
  };
  
  const canGoNext = startIndex + itemsPerPage < artworks.length;
  const canGoPrev = startIndex > 0;
  
  // Artwork Navigation in Lightbox
  const handlePrevArtwork = () => {
    if (selectedArtwork) {
      const currentIndex = artworks.findIndex(art => art.id === selectedArtwork.id);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1;
      setSelectedArtwork(artworks[prevIndex]);
    }
  };
  
  const handleNextArtwork = () => {
    if (selectedArtwork) {
      const currentIndex = artworks.findIndex(art => art.id === selectedArtwork.id);
      const nextIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0;
      setSelectedArtwork(artworks[nextIndex]);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedArtwork(null);
  };
  
  const handleInquiry = () => {
    handleCloseLightbox();
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  }

  return (
    <>
      <div className="section-divider"></div>
      <section id="gallery" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Kunst mit <span className="text-gold">Persönlichkeit.</span>
            </h2>
          </motion.div>

          <div className="relative">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {getCurrentArtworks().map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <div className="relative overflow-hidden rounded-2xl art-shadow group-hover:shadow-2xl transition-all duration-500">
                    <div style={{ aspectRatio: '3/4' }} className="w-full bg-gray-50 flex items-center justify-center">
                      <img
                        alt={`${artwork.title} - Abstraktes Kunstwerk von Petra Fimberger`}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        src={import.meta.env.BASE_URL + encodeURI(artwork.images[0].replace(/^\//, ''))}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-medium mb-2">{artwork.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{artwork.details.dimensions}</p>
                      <div className="flex justify-end items-center">
                        <div className="bg-white text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-md text-sm">
                          Details ansehen
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            {canGoPrev && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full z-10"
                onClick={prevPage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}
            
            {canGoNext && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full z-10"
                onClick={nextPage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
            
            {/* Dot Indicators */}
            {artworks.length > itemsPerPage && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.ceil(artworks.length / itemsPerPage) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setStartIndex(index * itemsPerPage)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(startIndex / itemsPerPage) === index ? 'bg-gold' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Lightbox
        artwork={selectedArtwork}
        onClose={handleCloseLightbox}
        onInquiry={handleInquiry}
        allArtworks={artworks}
        onPrevArtwork={handlePrevArtwork}
        onNextArtwork={handleNextArtwork}
      />
    </>
  );
};

export default GallerySection;