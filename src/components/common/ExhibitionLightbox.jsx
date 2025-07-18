import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExhibitionLightbox = ({ exhibition, isOpen, onClose, onInquiry }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [isOpen, exhibition]);

  if (!exhibition) return null;

  const getTypeIcon = (type) => {
    switch (type) {
      case 'solo': return <Award className="w-5 h-5" />;
      case 'group': return <Users className="w-5 h-5" />;
      case 'fair': return <MapPin className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-gold to-amber-600 text-white p-6 rounded-t-2xl flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold">{exhibition.year}</div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exhibition.type)} bg-white/20 text-white`}>
                  {getTypeIcon(exhibition.type)}
                  {getTypeLabel(exhibition.type)}
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                {exhibition.title}
              </h2>
            </div>

            {/* Image Section */}
            {exhibition.image && (
              <div className="flex-shrink-0 p-6 bg-gray-50">
                <div className="flex justify-center">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="max-w-full max-h-96 object-cover rounded-2xl shadow-lg"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-6 space-y-6 flex-grow">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ort</div>
                  <div className="font-medium text-gray-900">{exhibition.location}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Über die Ausstellung</h3>
                <p className="text-gray-600 leading-relaxed">
                  {exhibition.description}
                </p>
              </div>

              {/* Additional Details */}
              {exhibition.details && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exhibition.details.duration && (
                      <div>
                        <div className="text-sm text-gray-500">Dauer</div>
                        <div className="font-medium">{exhibition.details.duration}</div>
                      </div>
                    )}
                    {exhibition.details.works && (
                      <div>
                        <div className="text-sm text-gray-500">Anzahl Werke</div>
                        <div className="font-medium">{exhibition.details.works}</div>
                      </div>
                    )}
                    {exhibition.details.curator && (
                      <div>
                        <div className="text-sm text-gray-500">Kurator</div>
                        <div className="font-medium">{exhibition.details.curator}</div>
                      </div>
                    )}
                    {exhibition.details.visitors && (
                      <div>
                        <div className="text-sm text-gray-500">Besucher</div>
                        <div className="font-medium">{exhibition.details.visitors}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t">
                <Button
                  className="w-full bg-gold hover:bg-gold text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    onInquiry();
                    onClose();
                  }}
                >
                  Mehr über diese Ausstellung erfahren
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionLightbox;
