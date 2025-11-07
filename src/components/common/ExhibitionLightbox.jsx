import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExhibitionLightbox = ({ exhibition, isOpen, onClose, onInquiry, allExhibitions, onPrevExhibition, onNextExhibition }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // router hooks must be called unconditionally (before any early return)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (exhibition) setCurrentIndex(0);
  }, [exhibition]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!exhibition) return;
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') {
        if (e.shiftKey && onNextExhibition) onNextExhibition();
        else setCurrentIndex((i) => (i + 1) % (exhibition.images?.length || 1));
      }
      if (e.key === 'ArrowLeft') {
        if (e.shiftKey && onPrevExhibition) onPrevExhibition();
        else setCurrentIndex((i) => (i - 1 + (exhibition.images?.length || 1)) % (exhibition.images?.length || 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [exhibition, onClose]);

  if (!exhibition) return null;

  const images = exhibition.images || [];
  const srcFor = (img) => (img && (img.startsWith('http') ? img : (import.meta.env.BASE_URL || '/') + img.replace(/^\//, '')));

  const prev = (e) => { e && e.stopPropagation(); setCurrentIndex((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e && e.stopPropagation(); setCurrentIndex((i) => (i + 1) % images.length); };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Exhibition navigation buttons (switch to previous/next exhibition) */}
            {allExhibitions && allExhibitions.length > 1 && (
              <>
                {onPrevExhibition && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full z-20"
                    onClick={(e) => { e.stopPropagation(); onPrevExhibition(); }}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {onNextExhibition && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full z-20"
                    onClick={(e) => { e.stopPropagation(); onNextExhibition(); }}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </>
            )}
            <div className="p-6 border-b flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-medium text-gray-900">{exhibition.title}</h3>
                <p className="text-gold mt-1">{exhibition.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="bg-black/10 text-black" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex-grow bg-gray-100 p-6 flex flex-col items-center justify-center">
              {images.length > 0 ? (
                <div className="relative w-full h-full max-h-[60vh] flex items-center justify-center">
                  <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2" onClick={prev}>
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <img src={srcFor(images[currentIndex])} alt={exhibition.title} className="max-h-[60vh] object-contain rounded" />

                  <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2" onClick={next}>
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <div className="text-gray-500">Keine Bilder verfügbar</div>
              )}

              {/* dots / thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-6 flex-wrap justify-center">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-10 h-10 overflow-hidden rounded ${i === currentIndex ? 'ring-2 ring-gold' : 'ring-0'}`}
                    >
                      <img src={srcFor(img)} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t">
              <div className="flex gap-3">
                <Button
                  className="bg-gold text-white flex-1"
                  onClick={() => {
                    try {
                      const msg = `Information zur Ausstellung:\n\"${exhibition.title}\"\nOrt: ${exhibition.location}\n\nIch interessiere mich für weitere Informationen.`;
                      localStorage.setItem('prefillMessage', msg);
                      // Dispatch an event so mounted ContactSection can pick up the prefill immediately
                      try {
                        window.dispatchEvent(new CustomEvent('exhibition:prefill', { detail: { message: msg } }));
                      } catch (e) {
                        // ignore
                      }
                    } catch (e) {
                      // ignore storage errors
                    }
                    // inform parent and close
                    onInquiry && onInquiry(exhibition);
                    onClose && onClose();
                    // after the modal is closed, ensure we're on the home route and then scroll to contact
                    const doScroll = () => {
                      try {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                      } catch (e) {
                        // ignore
                      }
                    };

                    if (location.pathname !== '/') {
                      // navigate to home first, then scroll after a short delay to allow route/layout to mount
                      navigate('/');
                      setTimeout(doScroll, 260);
                    } else {
                      setTimeout(doScroll, 180);
                    }
                  }}
                >
                  Mehr über diese Ausstellung erfahren
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionLightbox;
