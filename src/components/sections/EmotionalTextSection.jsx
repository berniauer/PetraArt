import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/art/Process/image1.webp',
  '/art/Process/image2.webp',
  '/art/Process/image3.webp',
  '/art/Process/image4.webp',
];
const EmotionalTextSection = () => {
  const [view, setView] = useState('text');
  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="section-divider mb-12"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Wenn Stil allein
            <span className="text-gold block">nicht genug ist.</span>
          </h2>

          {/* Toggle for desktop */}
          <div className="hidden md:flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-500">Ansicht:</span>
            <div className="inline-flex rounded-md bg-gray-100 p-1">
              <button
                className={`px-4 py-1 text-sm rounded-md ${typeof window !== 'undefined' && window.innerWidth >= 768 ? '' : ''}`}
                onClick={() => setView('text')}
                aria-pressed={false}
              >
                Text
              </button>
              <button
                className="px-4 py-1 text-sm rounded-md"
                onClick={() => setView('images')}
                aria-pressed={false}
              >
                Bilder
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="mb-8">
            {/* Desktop: conditional swap between text and images */}
            <div className="hidden md:block">
              {view === 'text' ? (
                <>
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    Du liebst Kunst und Design und bist auf der Suche nach Neuem.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    Etwas Besonderem – das du gerne ansiehst, das dich umgibt und dich wohlfühlen lässt.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    Etwas, das dich berührt und eine Geschichte erzählt.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Dann besuche meine Galerie und entdecke Kunst, die lebt und verbindet.
                  </p>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {images.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-lg bg-white">
                      <img src={src} alt={`Process ${i + 1}`} className="w-full h-48 object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile: always show text + carousel under it */}
            <div className="block md:hidden">
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Du liebst Kunst und Design und bist auf der Suche nach Neuem.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Etwas Besonderem – das du gerne ansiehst, das dich umgibt und dich wohlfühlen lässt.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Etwas, das dich berührt und eine Geschichte erzählt.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Dann besuche meine Galerie und entdecke Kunst, die lebt und verbindet.
              </p>

              <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2">
                {images.map((src, i) => (
                  <div key={i} className="snap-center flex-shrink-0 w-4/5 sm:w-3/4">
                    <img src={src} alt={`Process ${i + 1}`} className="w-full h-56 object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalTextSection;