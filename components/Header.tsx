import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import type { LanguageCode } from '../translations';

interface HeaderProps {
  onLinkClick: (id: string) => void;
}

const languages: Record<LanguageCode, { flag: string; name: string }> = {
    bs: { flag: '🇧🇦', name: 'Bosanski' },
    en: { flag: '🇬🇧', name: 'English' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
    ar: { flag: '🇸🇦', name: 'العربية' },
};

const Header: React.FC<HeaderProps> = ({ onLinkClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useTranslations();
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'menu', label: t.header.nav.menu },
    { id: 'gallery', label: t.header.nav.gallery },
    { id: 'contact', label: t.header.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => onLinkClick('hero')} 
            className="flex-shrink-0 cursor-pointer"
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold italic text-white">
              {t.header.logo}
            </h1>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onLinkClick(link.id)}
                    className="text-gray-300 hover:bg-brand-red hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </nav>
            <div className="relative ml-4" ref={langRef}>
                <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="flex items-center text-gray-300 hover:bg-brand-red hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    <span>{languages[language].flag}</span>
                    <span className="hidden md:inline ml-2">{languages[language].name}</span>
                </button>
                {isLangOpen && (
                    <div className="absolute end-0 mt-2 w-40 rounded-md shadow-lg bg-brand-dark/90 ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {(Object.keys(languages) as LanguageCode[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => {
                                        setLanguage(lang);
                                        setIsLangOpen(false);
                                    }}
                                    className="w-full text-start flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-brand-red"
                                >
                                    <span>{languages[lang].flag}</span>
                                    <span className="ml-3">{languages[lang].name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;