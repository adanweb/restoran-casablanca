import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import { useTranslations } from './hooks/useTranslations';

const AppContent: React.FC = () => {
    const { t } = useTranslations();
    const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
        hero: useRef<HTMLElement>(null),
        menu: useRef<HTMLElement>(null),
        gallery: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    const scrollToSection = (id: string) => {
        sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`font-sans bg-brand-dark text-brand-light ${t.fontClass} overflow-x-hidden`}>
            <Header onLinkClick={scrollToSection} />
            <main>
                <div ref={sectionRefs.hero as React.RefObject<HTMLDivElement>}>
                    <Hero onScrollDown={() => scrollToSection('menu')} />
                </div>
                <div ref={sectionRefs.menu as React.RefObject<HTMLDivElement>}>
                    <Menu />
                </div>
                <div ref={sectionRefs.gallery as React.RefObject<HTMLDivElement>}>
                    <Gallery />
                </div>
                <div ref={sectionRefs.contact as React.RefObject<HTMLDivElement>}>
                    <Contact />
                </div>
            </main>
            <footer className="bg-black py-6 text-center text-gray-500">
                <p style={{ whiteSpace: 'pre-line' }}>
  {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
</p>
            </footer>
        </div>
    );
};


const App: React.FC = () => {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

export default App;