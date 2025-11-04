import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ artwork, onClose, onInquiry, allArtworks, onPrevArtwork, onNextArtwork }) => {
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
        if (e.shiftKey && onNextArtwork) {
          onNextArtwork();
        } else {
          nextImage();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (e.shiftKey && onPrevArtwork) {
          onPrevArtwork();
        } else {
          prevImage();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, currentIndex, onNextArtwork, onPrevArtwork]);
  
  // Touch / gesture handling for mobile (refs and mount guard must be declared
  // before any early return so the hooks order doesn't change between renders)
  const imgTouchStartX = useRef(null);
  const imgTouchStartY = useRef(null);
  const textTouchStartX = useRef(null);
  const textTouchStartY = useRef(null);
  const TOUCH_THRESHOLD = 50; // px

  // Prevent the same tap that opened the lightbox from immediately closing it
  const mountedAt = useRef(null);
  useEffect(() => {
    if (artwork) {
      mountedAt.current = Date.now();
      // helpful debug log when testing on device
      // eslint-disable-next-line no-console
      console.log('Lightbox mounted at', mountedAt.current, 'for artwork', artwork?.id);
    } else {
      mountedAt.current = null;
    }
  }, [artwork]);

  if (!artwork) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artwork.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artwork.images.length) % artwork.images.length);
  };

  const handleImageTouchStart = (e) => {
    const t = e.touches[0];
    imgTouchStartX.current = t.clientX;
    imgTouchStartY.current = t.clientY;
  };

  const handleImageTouchEnd = (e) => {
    if (imgTouchStartX.current === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - imgTouchStartX.current;
    const dy = t.clientY - imgTouchStartY.current;
    imgTouchStartX.current = null;
    imgTouchStartY.current = null;

    // horizontal swipe only
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > TOUCH_THRESHOLD) {
      if (dx < 0) {
        // swipe left => next image
        nextImage();
      } else {
        // swipe right => prev image
        prevImage();
      }
    }
  };

  const handleTextTouchStart = (e) => {
    const t = e.touches[0];
    textTouchStartX.current = t.clientX;
    textTouchStartY.current = t.clientY;
  };

  const handleTextTouchEnd = (e) => {
    if (textTouchStartX.current === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - textTouchStartX.current;
    const dy = t.clientY - textTouchStartY.current;
    textTouchStartX.current = null;
    textTouchStartY.current = null;

    // horizontal swipe should navigate artworks (only when mostly horizontal)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > TOUCH_THRESHOLD) {
      if (dx < 0) {
        // swipe left => next artwork
        if (onNextArtwork) onNextArtwork();
      } else {
        // swipe right => prev artwork
        if (onPrevArtwork) onPrevArtwork();
      }
    }
  };

  const handleOverlayClick = (e) => {
    // ignore clicks that happen within 300ms of mount (likely the same tap that opened it)
    if (mountedAt.current && Date.now() - mountedAt.current < 300) {
      // eslint-disable-next-line no-console
      console.log('Ignored overlay click immediately after mount');
      return;
    }
    onClose && onClose();
  };

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full rounded-2xl flex flex-row overflow-hidden"
            style={{ width: '70vw', height: '70vh', maxWidth: '1100px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-3/5 h-full bg-gray-100 flex items-center justify-center"
              onTouchStart={handleImageTouchStart}
              onTouchEnd={handleImageTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={(artwork.images[currentIndex]?.startsWith('http')
                    ? artwork.images[currentIndex]
                    : import.meta.env.BASE_URL + encodeURI(artwork.images[currentIndex].replace(/^\//, '')))}
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

            <div
              className="w-2/5 h-full flex flex-col p-8 overflow-y-auto"
              onTouchStart={handleTextTouchStart}
              onTouchEnd={handleTextTouchEnd}
            >
              <div className="flex-grow">
                <h2 className="text-3xl font-light text-gray-900 mb-6">{artwork.title}</h2>
                <div className="space-y-4 text-gray-600 mb-6">
                    <div>
                        <p className="font-medium text-gray-800">Details</p>
                        <p>{artwork.details.dimensions} • {artwork.details.technique}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Beschreibung</p>
                        <p>{artwork.emotionalDescription}</p>
                    </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Button
                  className="w-full bg-gold hover:bg-gold text-white py-3 md:py-4 text-base md:text-lg leading-tight rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            
            {/* Artwork Navigation Buttons */}
            {allArtworks && allArtworks.length > 1 && (
              <>
                {onPrevArtwork && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full z-20"
                    onClick={onPrevArtwork}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}
                
                {onNextArtwork && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full z-20"
                    onClick={onNextArtwork}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;