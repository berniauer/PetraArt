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
                Die Energie der <span className="text-gold">Intuition.</span>
              </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Meine Kunst ist ein Dialog zwischen Kontrolle und Chaos. Jede Schicht, jeder Pinselstrich, jede hingeworfene Notiz ist ein Fragment einer Geschichte. Ich male nicht, um perfekte Oberflächen zu schaffen, sondern um die vielschichtige, unperfekte und energiegeladene Essenz des Lebens einzufangen. Ein Bild ist für mich dann fertig, wenn es eine eigene Persönlichkeit hat – wenn es atmet.
            </p>
            <div className="mt-8">
              <img  alt="Eingescannte Unterschrift der Künstlerin Petra Fimberger" className="h-16 w-auto opacity-70" src="https://images.unsplash.com/photo-1636407161775-085bf8adf747" />
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