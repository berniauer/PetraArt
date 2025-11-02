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
              <div className="relative overflow-hidden rounded-2xl art-shadow">
                <img  alt="Foto der Künstlerin Petra Fimberger in ihrem Atelier" className="w-full max-h-[75vh] h-auto object-contain" src="petra-fimberger-atelier.jpg" />
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
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            so entstehen Spuren meines Lebens – sie kommen, sind vielleicht vorbestimmt oder überraschen mich immer wieder aufs Neue.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Mal bunt, mal grau-weiß.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Meine Empfindungen, Gefühle, Erlebnisse und Gedanken halte ich fest – auf Leinwand und Papier. Ohne zu wissen, wohin mich der Weg führt oder wie das Ende aussehen wird.
            Unzählige Schichten entstehen nacheinander und das Bild beginnt zu erzählen. Dabei ist der Punkt Zeit, der wesentliche Maler. Ein Prozess, welchem ich folge, leite und zulasse. Farben verbinden sind, vieles bleibt, manches verschwindet. Neues wird wieder sichtbar. Schritt für Schritt gehen wir gemeinsam, es wird bunt – und beginnt zu erzählen.
            Es ist ein wunderschöner, spannender, manchmal auch steiler Weg und dabei das Gefühl, niemals wirklich ans Ende zu gelangen.
            </p>
            <div className="mt-8">
              <img  alt="Eingescannte Unterschrift der Künstlerin Petra Fimberger" className="h-16 w-auto opacity-70" src={import.meta.env.BASE_URL + 'petra-fimberger-atelier.jpg'} />
            </div>

            <div className="mt-8">
              <Link to="/references">
                <Button className="w-full bg-gold hover:bg-gold text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Meinen Werdegang ansehen
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