import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExhibitionLightbox from '@/components/common/ExhibitionLightbox';
import { useToast } from '@/components/ui/use-toast';

const exhibitions = [
  { year: '2005', title: 'Atelier „Teilzeit“', location: 'Lokales Atelier', image: 'art/exhibitions/2005-atelier-teilzeit.jpg', images: [], description: '' },
  { year: '2009', title: 'Ausstellung „ICH bin ICH“', location: 'Eugendorf', image: 'art/exhibitions/2009-ich-bin-ich.jpg', images: [], description: '' },
  { year: '2012', title: 'Gemeinschaftsausstellung AVA', location: 'Chattanooga, USA', image: 'art/exhibitions/2012-ava-chattanooga.jpg', images: [], description: '' },
  { year: '2015', title: 'Ausstellung Rathausgalerie Burghausen', location: 'Burghausen, Deutschland', image: 'art/exhibitions/2015-rathausgalerie-burghausen.jpg', images: [], description: '' },
  { year: '2016', title: 'Wechselausstellung Gasthaus Peer', location: 'Moosdorf', image: 'art/exhibitions/2016-gasthaus-peer.jpg', images: [], description: '' },
  { year: '2016', title: 'Gemeinschaftsausstellung Artlet', location: 'Salzburg', image: 'art/exhibitions/2016-artlet-salzburg.jpg', images: [], description: '' },
  { year: '2016-2023', title: 'Schaufenster Laufen', location: 'Laufen', image: 'art/exhibitions/2016-2023-schaufenster-laufen.jpg', images: [], description: '' },
  { year: '2017', title: 'Gemeinschaftsausstellung, Heimatwerk', location: 'Salzburg', image: 'art/exhibitions/2017-heimatwerk-salzburg.jpg', images: [], description: '' },
  { year: '2017', title: 'Ausstellung „Lamprechtshausen MAL anders“', location: 'Gemeindeamt Lamprechtshausen', image: 'art/exhibitions/2017-lamprechtshausen.jpg', images: [], description: '' },
  { year: '2018', title: 'Ausstellung Kapuzinerhof Laufen', location: 'Laufen, Deutschland', image: 'art/exhibitions/2018-kapuzinerhof-laufen.jpg', images: [], description: '' },
  { year: '2019-2024', title: "Wechselausstellung s`Gwölb im Thurmhof", location: 'Moosdorf', image: 'art/exhibitions/2019-2024-sgwoelb-thurmhof.jpg', images: [], description: '' }
];

const ExhibitionsSection = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const { toast } = useToast();

  const handleExhibitionClick = (exhibition) => {
    setSelectedExhibition(exhibition);
  };

  const handleCloseLightbox = () => {
    setSelectedExhibition(null);
  };

  const handleInquiry = () => {
    toast({
      title: "Anfrage gesendet",
      description: "Vielen Dank für Ihr Interesse! Ich melde mich bald bei Ihnen.",
    });
  };
  
  // Exhibition Navigation in Lightbox
  const handlePrevExhibition = () => {
    if (selectedExhibition) {
      const currentIndex = exhibitions.findIndex(ex => ex.year === selectedExhibition.year && ex.title === selectedExhibition.title);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : exhibitions.length - 1;
      setSelectedExhibition(exhibitions[prevIndex]);
    }
  };
  
  const handleNextExhibition = () => {
    if (selectedExhibition) {
      const currentIndex = exhibitions.findIndex(ex => ex.year === selectedExhibition.year && ex.title === selectedExhibition.title);
      const nextIndex = currentIndex < exhibitions.length - 1 ? currentIndex + 1 : 0;
      setSelectedExhibition(exhibitions[nextIndex]);
    }
  };
  const getTypeColor = (type) => {
    switch (type) {
      case 'solo': return 'bg-gold text-white';
      case 'group': return 'bg-gray-200 text-gray-800';
      case 'fair': return 'bg-gray-900 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'solo': return 'Einzelausstellung';
      case 'group': return 'Gruppenausstellung';
      case 'fair': return 'Kunstmesse';
      default: return '';
    }
  };

  return (
    <>
      <div className="section-divider"></div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Meine <span className="text-gold">Ausstellungen.</span>
            </h2>
          </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={`${exhibition.year}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleExhibitionClick(exhibition)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-medium text-gold">{exhibition.year}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exhibition.type)}`}>
                      {getTypeLabel(exhibition.type)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2 line-clamp-2">
                    {exhibition.title}
                  </h3>
                  
                  <p className="text-gold font-medium mb-3">
                    {exhibition.location}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {exhibition.description}
                  </p>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-gold to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ExhibitionLightbox
        exhibition={selectedExhibition}
        isOpen={!!selectedExhibition}
        onClose={handleCloseLightbox}
        onInquiry={handleInquiry}
        allExhibitions={exhibitions}
        onPrevExhibition={handlePrevExhibition}
        onNextExhibition={handleNextExhibition}
      />
    </section>
    </>
  );
};

export default ExhibitionsSection;
