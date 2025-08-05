import React, { useState, useEffect } from 'react';
import { getMealRecommendations } from '../services/geminiService';
import { useTranslations } from '../hooks/useTranslations';
import { MealRecommendation } from '../types';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';

const Challenge = () => {
    const { t } = useTranslations();
    const [numPeople, setNumPeople] = useState(1);
    const [names, setNames] = useState<string[]>(['']);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [recommendations, setRecommendations] = useState<MealRecommendation[] | null>(null);
    
    const foodMenu = t.menuData.filter(cat => !cat.isDrinkCategory).flatMap(cat => cat.items);

    useEffect(() => {
        setNames(prev => {
            const newNames = Array(numPeople).fill('');
            // Copy existing names up to the new length to preserve user input
            for (let i = 0; i < Math.min(numPeople, prev.length); i++) {
                newNames[i] = prev[i];
            }
            return newNames;
        });
    }, [numPeople]);

    const handleNameChange = (index: number, value: string) => {
        const newNames = [...names];
        newNames[index] = value;
        setNames(newNames);
    };

    const handleGenerate = async () => {
        if (names.some(name => name.trim() === '')) {
            setError(t.challenge.error.emptyNames);
            return;
        }
        setIsLoading(true);
        setError(null);
        setRecommendations(null);
        try {
            const result = await getMealRecommendations(names, foodMenu, t);
            setRecommendations(result);
        } catch (err: any) {
            setError(err.message || t.challenge.error.apiError);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleIncrement = () => setNumPeople(p => Math.min(p + 1, 16));
    const handleDecrement = () => setNumPeople(p => Math.max(p - 1, 1));

    return (
        <Section id="challenge" className="bg-black">
            <div className="text-center">
                <h2 className="text-5xl font-serif font-bold text-white mb-4">{t.challenge.title}</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.challenge.description}</p>
            </div>

            <div className="max-w-3xl mx-auto mt-12 p-8 bg-brand-dark rounded-xl shadow-2xl border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <label htmlFor="numPeople" className="block text-sm font-medium text-gray-300 mb-2">{t.challenge.peopleCount}</label>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={handleDecrement} 
                                className="bg-gray-700 hover:bg-gray-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors text-2xl"
                                aria-label="Decrease number of people"
                            >−</button>
                            <input
                                type="range"
                                id="numPeople"
                                min="1"
                                max="16"
                                value={numPeople}
                                onChange={(e) => setNumPeople(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-red"
                            />
                            <button 
                                onClick={handleIncrement} 
                                className="bg-gray-700 hover:bg-gray-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors text-2xl"
                                aria-label="Increase number of people"
                            >+</button>
                        </div>
                        <div className="text-center mt-2 text-white font-bold text-xl">{numPeople} {numPeople === 1 ? t.challenge.person : t.challenge.people}</div>
                    </div>
                    
                    <div className="flex justify-center md:justify-end">
                        <motion.button
                            onClick={handleGenerate}
                            disabled={isLoading}
                            className="bg-brand-red text-white font-bold py-3 px-8 rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isLoading ? t.challenge.generatingButton : t.challenge.generateButton}
                        </motion.button>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">{t.challenge.namesLabel}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {names.map((name, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => handleNameChange(index, e.target.value)}
                                    placeholder={t.challenge.namePlaceholder.replace('{index}', (index + 1).toString())}
                                    className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-brand-red focus:border-brand-red"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <AnimatePresence>
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-6 text-center bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-md"
                        >
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {recommendations && (
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <h3 className="text-3xl font-serif text-center text-brand-red mb-8">{t.challenge.resultsTitle}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {recommendations.map((rec, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-brand-dark border border-gray-700 p-6 rounded-lg text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <p className="text-xl font-bold text-white">{rec.name}</p>
                                    <p className="text-gray-400 my-2">-</p>
                                    <p className="text-2xl font-serif text-brand-red">{rec.meal}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Challenge;