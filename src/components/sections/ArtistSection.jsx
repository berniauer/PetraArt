import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ArtistSection = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section id="about" className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mx-auto">
                <img
                  alt="Foto der Künstlerin Petra Fimberger in ihrem Atelier"
                  src="petra-fimberger-atelier.jpg"
                  className="block rounded-2xl shadow-lg max-w-[80vw] md:max-w-none md:max-h-[70vh] w-auto h-auto object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Leinwand <span className="text-gold">Farbe</span> und ich
              </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              So entstehen <span className="text-gold font-semibold">Spuren meines Lebens</span> – sie kommen, sind vielleicht vorbestimmt oder überraschen mich immer wieder aufs Neue.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              <span className="font-semibold">Mal bunt, mal grau-weiß.</span>
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Meine Empfindungen, Gefühle, Erlebnisse und Gedanken halte ich fest – auf <span className="text-gold font-semibold">Leinwand und Papier</span>. Ohne zu wissen, wohin mich der Weg führt oder wie das Ende aussehen wird.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              <span className="text-gold font-semibold">Unzählige Schichten</span> entstehen nacheinander und das Bild beginnt zu erzählen. Dabei ist der Punkt <span className="font-semibold">Zeit</span>, der wesentliche Maler. Ein <span className="text-gold font-semibold">Prozess</span>, welchem ich folge, leite und zulasse. <span className="text-gold font-semibold">Farben verbinden</span> – vieles bleibt, manches verschwindet. Neues wird wieder sichtbar. <span className="font-semibold">Schritt für Schritt</span> gehen wir gemeinsam, es wird bunt – und beginnt zu erzählen.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Es ist ein <span className="text-gold font-semibold">wunderschöner, spannender</span>, manchmal auch steiler Weg und dabei das Gefühl, <span className="font-semibold">niemals wirklich ans Ende zu gelangen</span>.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
              … so fange ich immer wieder von vorn an.
            </p>

            <div className="mt-8">
              <Link to="/references">
                <Button className="w-full bg-gold hover:bg-gold text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  über mich
                </Button>
              </Link>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ArtistSection;