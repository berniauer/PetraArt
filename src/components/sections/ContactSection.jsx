import React, { useState } from 'react';
import ContactForm from '@/components/common/ContactForm';
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
    <>
      <div className="section-divider"></div>
      <section id="contact" className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
            {/* New TypeScript React contact form component */}
            <div>
              {/* Lazy load the TSX contact form */}
              <React.Suspense fallback={<div>Loading form…</div>}>
                <ContactForm />
              </React.Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;