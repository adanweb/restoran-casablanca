import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { MenuCategory, MenuItem } from '../types';

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="flex flex-col py-3">
        <div className="flex justify-between items-baseline">
            <h4 className="text-lg font-bold text-brand-light font-sans">{item.name}</h4>
            <div className="flex-grow border-b-2 border-dotted border-gray-600 mx-2"></div>
            <p className="text-lg font-bold text-brand-light">{item.price}</p>
        </div>
        {item.description && <p className="text-sm text-gray-400 mt-1">{item.description}</p>}
    </div>
);

const MenuCategorySection: React.FC<{ category: MenuCategory }> = ({ category }) => (
    <div className="mb-12">
        <h3 className="text-3xl font-serif font-bold text-brand-red mb-6 border-b-2 border-brand-red pb-2 inline-block">{category.name}</h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {category.items.map((item, index) => <MenuItemCard key={index} item={item} />)}
        </div>
    </div>
);

const Menu = () => {
    const { t } = useTranslations();
    const menuData = t.menuData;
    const foodCategories = menuData.filter(cat => !cat.isDrinkCategory);
    const drinkCategories = menuData.filter(cat => cat.isDrinkCategory);

    return (
        <section id="menu" className="w-full py-16 md:py-24 px-4 md:px-8 bg-brand-dark">
             <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-serif font-bold text-center text-white mb-16">
                    {t.menu.title}
                </h2>
                <div className="mb-20">
                    {foodCategories.map((category, index) => <MenuCategorySection key={index} category={category} />)}
                </div>
                
                {drinkCategories.length > 0 && (
                    <div>
                        <h2 className="text-5xl font-serif font-bold text-center text-white mb-16">
                            {t.menu.drinksTitle}
                        </h2>
                        {drinkCategories.map((category, index) => <MenuCategorySection key={index} category={category} />)}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Menu;