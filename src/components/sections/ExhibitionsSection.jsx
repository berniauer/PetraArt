import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExhibitionLightbox from '@/components/common/ExhibitionLightbox';
// no toast here for exhibition inquiries; ContactSection will show confirmation

const ExhibitionsSection = () => {
  const [exhibitions, setExhibitions] = useState([]);
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  

  useEffect(() => {
    // load the generated index.json from public
    const url = (import.meta.env.BASE_URL || '/') + 'art/Ausstellungen/index.json';
    fetch(url)
      .then((r) => r.json())
      .then((data) => setExhibitions(data))
      .catch(() => setExhibitions([]));
  }, []);

  const handleExhibitionClick = (exhibition) => {
    setSelectedExhibition(exhibition);
  };

  const handleCloseLightbox = () => {
    setSelectedExhibition(null);
  };

  // Store prefill message for contact form. Do not show a snackbar here.
  const handleInquiry = (exhibition) => {
    try {
      const msg = `Information zur Ausstellung:\n\"${exhibition.title}\"\nOrt: ${exhibition.location}\n\nIch interessiere mich für weitere Informationen.`;
      localStorage.setItem('prefillMessage', msg);
    } catch (e) {
      // ignore storage errors
    }
  };

  // Exhibition Navigation in Lightbox (switch between exhibitions)
  const handlePrevExhibition = () => {
    if (selectedExhibition && exhibitions.length > 0) {
      const currentIndex = exhibitions.findIndex(ex => ex.folder === selectedExhibition.folder);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : exhibitions.length - 1;
      setSelectedExhibition(exhibitions[prevIndex]);
    }
  };

  const handleNextExhibition = () => {
    if (selectedExhibition && exhibitions.length > 0) {
      const currentIndex = exhibitions.findIndex(ex => ex.folder === selectedExhibition.folder);
      const nextIndex = currentIndex < exhibitions.length - 1 ? currentIndex + 1 : 0;
      setSelectedExhibition(exhibitions[nextIndex]);
    }
  };

  return (
    <>
      <div className="section-divider"></div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Meine <span className="text-gold">Ausstellungen.</span>
            </h2>
          </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={`${exhibition.folder}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => handleExhibitionClick(exhibition)}
              >
                {/* Simple card: title, location (flex-grow) + first image anchored to bottom */}
                <div className="px-6 py-6 flex-grow">
                  <h3 className="text-xl font-medium text-gray-900 mb-1 line-clamp-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-gold font-medium mb-4">
                    {exhibition.location}
                  </p>
                </div>

                {exhibition.images && exhibition.images.length > 0 && (
                  <div className="px-6 pb-6 pt-0 mt-auto">
                    <div className="w-full h-48 overflow-hidden rounded-md">
                      <img
                        src={(exhibition.images[0].startsWith('http') ? exhibition.images[0] : (import.meta.env.BASE_URL || '/') + exhibition.images[0].replace(/^\//, ''))}
                        alt={exhibition.title}
                        className="w-full h-full object-cover object-bottom"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ExhibitionLightbox
        exhibition={selectedExhibition}
        isOpen={!!selectedExhibition}
        onClose={handleCloseLightbox}
        onInquiry={handleInquiry}
        allExhibitions={exhibitions}
        onPrevExhibition={handlePrevExhibition}
        onNextExhibition={handleNextExhibition}
      />
    </section>
    </>
  );
};

export default ExhibitionsSection;
