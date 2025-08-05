import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const { t } = useTranslations();
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/plata.jpg')"}}>
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div 
        className="relative z-10 p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold italic">
          {t.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-sans tracking-wider">
          {t.hero.subtitle}
        </p>
        <motion.button
          onClick={onScrollDown}
          className="mt-8 px-8 py-3 bg-brand-red border border-brand-red text-white font-bold rounded-full transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.hero.button}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
