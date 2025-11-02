import React from 'react';
import { motion } from 'framer-motion';

const EmotionalTextSection = () => {
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
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Wenn Stil allein
            <span className="text-gold block">nicht genug ist.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Du liebst Kunst und Design und bist auf der Suche nach Neuem.
            Etwas Besonderem – das du gerne ansiehst, das dich umgibt und dich wohlfühlen lässt.
            Etwas, das dich berührt und eine Geschichte erzählt.
            Dann besuche meine Galerie und entdecke Kunst, die lebt und verbindet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalTextSection;