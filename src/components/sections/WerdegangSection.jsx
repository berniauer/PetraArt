import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2008',
    title: 'Studienbeginn an der Akademie',
    description: 'Aufnahme des Studiums der Bildenden Künste an der Akademie der Bildenden Künste München'
  },
  {
    year: '2012',
    title: 'Abschluss mit Diplom',
    description: 'Abschluss des Studiums mit Auszeichnung und erste Einzelausstellung in der Galerie ArtPoint München'
  },
  {
    year: '2015',
    title: 'Kulturförderungs-Stipendium',
    description: 'Stipendium der Kulturstiftung der Länder und Teilnahme an Gruppenausstellungen im In- und Ausland'
  },
  {
    year: '2018',
    title: 'Eröffnung eigenes Atelier',
    description: 'Gründung des eigenen Ateliers in Wien und Beginn freier Atelier-Projekte'
  },
  {
    year: '2021',
    title: 'Nachwuchspreis für zeitgenössische Kunst',
    description: 'Verleihung des renommierten Österreichischen Kunstnachwuchspreises'
  },
  {
    year: '2024',
    title: 'Internationale Ausstellung & Monografie',
    description: 'Einzelausstellung in der Galerie Modern Arts NY und Veröffentlichung der ersten Monografie'
  },
];

const WerdegangSection = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-divider mb-8 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Mein <span className="text-gold">Werdegang.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.year}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 mb-12 relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="flex-1 space-y-3 text-center lg:text-left">
                <div className="text-2xl font-medium text-gold">{item.year}</div>
                <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {/* Timeline-Punkt */}
              <div className="w-4 h-4 bg-gold rounded-full flex-shrink-0 relative z-10 shadow-lg"></div>
              <div className="flex-1 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WerdegangSection;
