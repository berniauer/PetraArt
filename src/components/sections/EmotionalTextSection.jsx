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
          <div className="section-divider mb-12"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Wenn Stil allein
            <span className="text-gold block">nicht genug ist.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sie haben ein Auge für Design und Ihr Zuhause ist ein Spiegelbild Ihres Geschmacks. Doch manchmal fühlt sich Perfektion unpersönlich an. Sie sehnen sich nach dem einen Element, das nicht nur passt, sondern lebt. Nach einem Herzschlag für Ihre Wände, der Ihre eigene Geschichte erzählt und Austauschbarkeit durch Charakter ersetzt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalTextSection;