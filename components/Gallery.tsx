import React, { useState } from 'react';
import Section from './Section';
import { useTranslations } from '../hooks/useTranslations';
import { GalleryImage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { t } = useTranslations();
  const galleryImages = t.galleryData;

  return (
    <Section id="gallery" className="bg-black">
      <h2 className="text-5xl font-serif font-bold text-center text-white mb-16">
        {t.gallery.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(image)}
            layoutId={`card-${image.id}`}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] shadow-2xl rounded-lg overflow-hidden"
              layoutId={`card-${selectedImage.id}`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            >
              <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain" />
            </motion.div>
            <motion.button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;
