import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '1973', title: 'Geboren', description: 'Geboren in Oberösterreich, Austria' },
  { year: '2000', title: 'Annäherung an die Malerei', description: 'Beginn intensiver Auseinandersetzung mit Malerei' },
  { year: '2001', title: 'Malseminar bei Birgit Lorenz', description: 'Teilnahme am Malseminar bei Birgit Lorenz in Burghausen' },
  { year: '2002', title: 'Zeichen- und Malseminare', description: 'Zeichen- und Malseminare bei Mag. Art. Christiane Pott‑Schlager' },
  { year: '2004 - 2006', title: 'Kunststudium', description: 'Kunststudium an der Leonardo Kunstakademie; Abschluss des Studiums bei Prof. Hannes Baier' },
  { year: '2005 - 2007', title: 'Gemeinschaftsatelier', description: 'Mitglied im Gemeinschaftsatelier „Teilzeit"' },
  { year: 'seit 2007', title: 'Malwochen & Workshops', description: 'Teilnahme an Malwochen bei Norbert Mayer („Nomay") und Themen‑Workshops bei Birgit Lorenz' },
  { year: '2010', title: 'Kunstwoche bei Markus Lüpertz', description: 'Kunstwoche bei Prof. Markus Lüpertz, Dozent: Reinhold Braun' },
  { year: '2011 - 2013', title: 'Tennessee, USA', description: 'Aufenthalt in Tennessee (USA)' },
  { year: '2014', title: 'Kompaktwoche', description: 'Kompaktwoche bei Prof. Ulrich Klieber' },
  { year: '2021 - 2024', title: 'Umbau Atelier', description: 'Umbau des eigenen Ateliers' },
  { year: '2024', title: 'Akt LAB', description: 'Akt LAB: experimentelle Aktzeichnung bei Stefan Bachmann' }
];

const WerdegangSection = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
    </>
  );
};

export default WerdegangSection;
