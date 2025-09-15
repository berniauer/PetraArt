import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExhibitionLightbox from '@/components/common/ExhibitionLightbox';
import { useToast } from '@/components/ui/use-toast';

const exhibitions = [
  {
    year: '2024',
    title: 'Einzelausstellung "Layers of Emotion"',
    location: 'Galerie Modern Arts, New York',
    description: 'Erste internationale Einzelausstellung mit 25 großformatigen Werken. Fokus auf die Verbindung zwischen abstrakter Malerei und emotionaler Tiefe. Diese Ausstellung markierte den Durchbruch auf dem internationalen Kunstmarkt und erhielt begeisterte Kritiken von renommierten Kunstkritikern.',
    type: 'solo',
    image: 'art/fabelhafte-komplexitaet-raum.jpg',
    details: {
      duration: '3 Monate',
      works: '25 Werke',
      curator: 'Dr. Sarah Mitchell',
      visitors: '15.000+'
    }
  },
  {
    year: '2023',
    title: 'Gruppenausstellung "Neue Stimmen"',
    location: 'Museum für Gegenwartskunst, Wien',
    description: 'Teilnahme an prestigeträchtiger Gruppenausstellung mit aufstrebenden österreichischen Künstlern. Die Ausstellung zeigte eine neue Generation von Künstlern, die traditionelle Techniken mit zeitgenössischen Themen verbinden.',
    type: 'group',
    image: 'art/bitte-laecheln-raum.jpg',
    details: {
      duration: '4 Monate',
      works: '8 Werke',
      curator: 'Prof. Michael Weber',
      visitors: '25.000+'
    }
  },
  {
    year: '2022',
    title: 'Einzelausstellung "Fragmente der Seele"',
    location: 'Galerie Zeitgenössisch, München',
    description: 'Retrospektive der letzten fünf Schaffensjahre mit interaktiven Elementen und Künstlergesprächen. Diese Ausstellung bot einen umfassenden Einblick in die künstlerische Entwicklung und experimentellen Ansätze.',
    type: 'solo',
    image: 'art/der-kuh-raum.jpg',
    details: {
      duration: '6 Wochen',
      works: '18 Werke',
      curator: 'Anna Zimmermann',
      visitors: '8.500+'
    }
  },
  {
    year: '2021',
    title: 'Kunstmesse Art Basel',
    location: 'Basel, Schweiz',
    description: 'Präsentation ausgewählter Werke im Rahmen der renommierten internationalen Kunstmesse. Erste Teilnahme an einer der wichtigsten Kunstmessen weltweit, die zu neuen internationalen Sammler-Kontakten führte.',
    type: 'fair',
    image: 'art/bitte-laecheln-raum.jpg',
    details: {
      duration: '5 Tage',
      works: '12 Werke',
      curator: 'Galerie ArtPoint',
      visitors: '95.000+'
    }
  },
  {
    year: '2020',
    title: 'Gruppenausstellung "Pandemie & Kunst"',
    location: 'Künstlerhaus, Salzburg',
    description: 'Digitale und physische Ausstellung zum Thema künstlerischer Ausdruck während der Corona-Pandemie. Eine innovative Hybridausstellung, die neue Wege der Kunstpräsentation erforschte.',
    type: 'group',
    image: 'art/fabelhafte-komplexitaet-raum.jpg',
    details: {
      duration: '8 Wochen',
      works: '6 Werke',
      curator: 'Kollektiv Salzburg',
      visitors: '12.000+ (hybrid)'
    }
  },
  {
    year: '2019',
    title: 'Einzelausstellung "Erste Schritte"',
    location: 'Galerie ArtPoint, München',
    description: 'Debüt-Einzelausstellung mit frühen Werken und experimentellen Techniken. Der erste große Erfolg, der den Grundstein für die weitere künstlerische Laufbahn legte.',
    type: 'solo',
    image: 'art/der-kuh-raum.jpg',
    details: {
      duration: '4 Wochen',
      works: '15 Werke',
      curator: 'Thomas Müller',
      visitors: '3.200+'
    }
  }
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
