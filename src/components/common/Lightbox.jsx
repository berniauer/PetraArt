import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ artwork, onClose, onInquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (artwork) {
      setCurrentIndex(0);
    }
  }, [artwork]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!artwork) return;
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowRight') {
        nextImage();
      }
      if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, currentIndex]);

  if (!artwork) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artwork.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artwork.images.length) % artwork.images.length);
  };

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-2xl flex flex-col lg:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative lg:w-2/3 w-full h-1/2 lg:h-full bg-gray-100 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={artwork.images[currentIndex]}
                  alt={`${artwork.title} - Ansicht ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {artwork.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {artwork.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-gold' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 w-full h-1/2 lg:h-full flex flex-col p-8 overflow-y-auto">
              <div className="flex-grow">
                <h2 className="text-3xl font-light text-gray-900 mb-2">{artwork.title}</h2>
                <p className="text-gold text-lg mb-6">{artwork.price}</p>
                <div className="space-y-4 text-gray-600 mb-6">
                    <div>
                        <p className="font-medium text-gray-800">Details</p>
                        <p>{artwork.details.dimensions} • {artwork.details.technique} • {artwork.details.year}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Beschreibung</p>
                        <p>{artwork.emotionalDescription}</p>
                    </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Button
                  className="w-full bg-gold hover:bg-gold text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={onInquiry}
                >
                  Kunstwerk anfragen
                </Button>
              </div>
            </div>
            
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/20 text-white hover:bg-black/40 rounded-full"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;