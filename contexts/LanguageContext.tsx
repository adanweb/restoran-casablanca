import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

type Language = keyof typeof translations;

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('bs');
    
    useEffect(() => {
        const currentTranslations = translations[language];
        document.documentElement.lang = language;
        document.documentElement.dir = currentTranslations.dir;
        
        document.body.classList.remove('font-arabic');
        if (currentTranslations.fontClass) {
             document.body.classList.add(currentTranslations.fontClass);
        }
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
