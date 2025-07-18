import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet! 🎨",
      description: "Vielen Dank für Ihr Interesse. Petra wird sich bald bei Ihnen melden.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-divider mb-8"></div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Beginnen wir ein <span className="text-gold">Gespräch.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ob Sie sich für ein bestimmtes Werk interessieren, eine Frage haben oder über die Möglichkeit eines Auftrags sprechen möchten – ich freue mich, von Ihnen zu hören. Finden Sie das Kunstwerk, das nicht nur Ihr Zuhause, sondern auch Ihren Alltag bereichert.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
                  placeholder="Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
                  placeholder="E-Mail"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ihre Nachricht"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Anfrage senden
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;