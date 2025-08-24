import { MenuCategory, GalleryImage } from './types';

export type LanguageCode = 'bs' | 'en' | 'de' | 'ar';

interface TranslationContent {
  lang: LanguageCode;
  dir: 'ltr' | 'rtl';
  fontClass: string;
  header: {
    logo: string;
    nav: {
      menu: string;
      gallery: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    button: string;
  };
  menu: {
    title: string;
    drinksTitle: string;
  };
  gallery: {
    title: string;
  };
  contact: {
    title: string;
    info: string;
    address: string;
    phone: string;
    hours: string;
    follow: string;
    facebook: string;
    instagram: string;
  };
  challenge: {
    title: string;
    description: string;
    peopleCount: string;
    person: string;
    people: string;
    generateButton: string;
    generatingButton: string;
    namesLabel: string;
    namePlaceholder: string;
    resultsTitle: string;
    error: {
      emptyNames: string;
      apiError: string;
    };
  };
  gemini: {
    prompt: string;
  };
  footer: {
    copyright: string;
  };
  menuData: MenuCategory[];
  galleryData: GalleryImage[];
}

export const translations: Record<LanguageCode, TranslationContent> = {
  bs: {
    lang: 'bs',
    dir: 'ltr',
    fontClass: '',
    header: {
      logo: "Casablanca",
      nav: { menu: "Jelovnik", gallery: "Galerija", contact: "Kontakt" },
    },
    hero: {
      title: "Casablanca",
      subtitle: "Okus tradicije u srcu Bosanskog Petrovca",
      button: "Pogledaj Jelovnik",
    },
    menu: { title: "Jela", drinksTitle: "Pića" },
    gallery: { title: "Galerija" },
    contact: {
      title: "Kontakt & Lokacija",
      info: "Informacije",
      address: "Restoran Casablanca, Bosanski Petrovac",
      phone: "+387 63 835 761",
      hours: "Pon - Ned: 07:00 - 23:00",
      follow: "Pratite nas",
      facebook: "Facebook",
      instagram: "Instagram",
    },
    challenge: {
        title: "Preporučivač jela",
        description: "Ne možete odlučiti šta jesti? Neka vam naš AI kuhar pomogne! Unesite imena ljudi u vašoj grupi, a mi ćemo predložiti ukusno jelo za svaku osobu s našeg menija.",
        peopleCount: "Koliko osoba?",
        person: "osoba",
        people: "osobe",
        generateButton: "Daj preporuke",
        generatingButton: "Razmišljam...",
        namesLabel: "Unesite imena:",
        namePlaceholder: "Osoba {index}",
        resultsTitle: "Prijedlozi našeg kuhara:",
        error: {
            emptyNames: "Molimo unesite ime za svaku osobu.",
            apiError: "Žao nam je, naš AI kuhar je zauzet. Molimo pokušajte ponovo kasnije.",
        },
    },
    gemini: {
        prompt: "Vi ste koristan asistent za restoran pod nazivom Casablanca. S obzirom na listu jela sa menija i listu imena, vaš zadatak je da preporučite po jedno jelo za svaku osobu. Jela su: {foodItems}. Imena su: {personNames}. Vaš odgovor treba da bude JSON niz objekata, gdje svaki objekat ima 'name' i 'meal' svojstva. Nemojte preporučivati isto jelo svima. Dajte raznovrsne prijedloge. Ne dodajte nikakav dodatni tekst, samo JSON niz."
    },
    footer: {
  copyright: "© {year} Restoran Casablanca. Sva prava zadržana.\nDizajn i razvoj web stranice: Adan Zukančić",
},
    menuData: [
         {
    name: 'Hladna predjela',
    items: [
      {
        name: 'Hladna plata',
        description: 'Šunka, sir, kulen, uštipci',
        price: '20 KM'
      }
    ]
  },
  {
    name: 'Jela za doručak',
    items: [
      { name: 'Omlet (šunka, sir)', price: '4 KM' },
      { name: 'Omlet sa sudžukicom', price: '6 KM' },
      { name: 'Tjestenina s piletinom', price: '8 KM' }
    ]
  },
  {
    name: 'Pite',
    items: [
      { name: 'Burek', price: '4 KM' },
      { name: 'Sirnica', price: '4 KM' },
      { name: 'Zeljanica', price: '4 KM' },
      { name: 'Krompiruša', price: '4 KM' }
    ]
  },
  {
    name: 'Juhe',
    items: [
      { name: 'Goveđa juha', price: '3 KM' },
      { name: 'Paradajz juha', price: '4 KM' },
      { name: 'Juha od gljiva', price: '4 KM' },
      { name: 'Trahana', price: '3 KM' }
    ]
  },
  {
    name: 'Kuhana gotova jela',
    items: [
      { name: 'Dnevno kuhanje', price: '7 KM' }
    ]
  },
  {
    name: 'Jela od piletine',
    items: [
      {
        name: 'Pileće krpice u lepinji (mala porcija)',
        description: 'Uz prilog',
        price: '7 KM'
      },
      {
        name: 'Pileće krpice u lepinji (velika porcija)',
        description: 'Uz prilog',
        price: '9 KM'
      },
      {
        name: 'Pohovana piletina u sosu (mala porcija)',
        description: 'Prilog pomfrit',
        price: '8 KM'
      },
      {
        name: 'Pohovana piletina u sosu (velika porcija)',
        description: 'Prilog pomfrit',
        price: '10 KM'
      },
      {
        name: 'Pileća salata (mala porcija)',
        price: '7 KM'
      },
      {
        name: 'Pileća salata (velika porcija)',
        price: '9 KM'
      },
      {
        name: 'Punjena pileća šnicla (šunka, sir)',
        price: '12 KM'
      }
    ]
  },
  {
    name: 'Ribe i lignje',
    items: [
      {
        name: 'Pastrmka (mala porcija)',
        description: 'Pomfrit ili krompir salata',
        price: '10 KM'
      },
      {
        name: 'Pastrmka (velika porcija)',
        description: 'Pomfrit ili krompir salata',
        price: '18 KM'
      },
      {
        name: 'Lignje + pomfrit',
        price: '15 KM'
      }
    ]
  },
  {
  name: 'Jela sa roštilja',
  items: [
    { name: 'Ćevapi (mala porcija)', price: '6 KM' },
    { name: 'Ćevapi (srednja porcija)', price: '7 KM' },
    { name: 'Ćevapi (velika porcija)', price: '8 KM' },

    { name: 'Pljeskavica (mala porcija)', price: '7 KM' },
    { name: 'Pljeskavica (velika porcija)', price: '10 KM' },

    { name: 'Sudžukice (mala porcija)', price: '6 KM' },
    { name: 'Sudžukice (velika porcija)', price: '8 KM' },

    { name: 'Teleće krpice + pomfrit (mala porcija)', price: '10 KM' },
    { name: 'Teleće krpice + pomfrit (velika porcija)', price: '14 KM' },

    { name: 'Kotletti + pomfrit (mala porcija)', price: '10 KM' },
    { name: 'Kotletti + pomfrit (velika porcija)', price: '14 KM' },

    { name: 'Teleća jetrica + pomfrit (mala porcija)', price: '7 KM' },
    { name: 'Teleća jetrica + pomfrit (velika porcija)', price: '10 KM' },

    { name: 'Teleći ražnjići + pomfrit (mala porcija)', price: '10 KM' },
    { name: 'Teleći ražnjići + pomfrit (velika porcija)', price: '14 KM' },

    { name: 'Bečka šnicla + pomfrit (mala porcija)', price: '14 KM' },
    { name: 'Bečka šnicla + pomfrit (velika porcija)', price: '18 KM' },

    {
      name: 'Miješano meso',
      price: '30 KM'
    },
    {
      name: 'Plata "Casablanca"',
      description: 'Ćevapi, pileće krpice, sudžukice, teleće krpice, jetrica, pomfrit',
      price: '35 KM'
    },
    {
      name: 'Punjena šnicla "Casablanca"',
      description: 'Šunka, sir',
      price: '18 KM'
    }
  ]
},
{
  name: 'Pizze',
  items: [
    {
      name: 'Margarita (mala)',
      description: 'Paradajz sos, sir, masline',
      price: '6 KM'
    },
    {
      name: 'Margarita (velika)',
      description: 'Paradajz sos, sir, masline',
      price: '9 KM'
    },
    {
      name: 'Capricciosa (mala)',
      description: 'Paradajz sos, sir, šunka, šampinjoni',
      price: '8 KM'
    },
    {
      name: 'Capricciosa (velika)',
      description: 'Paradajz sos, sir, šunka, šampinjoni',
      price: '10 KM'
    },
    {
      name: 'Mexicana (mala)',
      description: 'Paradajz sos, sir, šunka, kukuruz, kulen, feferoni',
      price: '8 KM'
    },
    {
      name: 'Mexicana (velika)',
      description: 'Paradajz sos, sir, šunka, kukuruz, kulen, feferoni',
      price: '10 KM'
    },
    {
      name: 'Tuna (mala)',
      description: 'Paradajz sos, sir, tunjevina, šampinjoni',
      price: '8 KM'
    },
    {
      name: 'Tuna (velika)',
      description: 'Paradajz sos, sir, tunjevina, šampinjoni',
      price: '10 KM'
    },
    {
      name: 'Funghi (mala)',
      description: 'Paradajz sos, sir, šampinjoni',
      price: '8 KM'
    },
    {
      name: 'Funghi (velika)',
      description: 'Paradajz sos, sir, šampinjoni',
      price: '10 KM'
    },
    {
      name: 'Vegeteriana (mala)',
      price: '8 KM'
    },
    {
      name: 'Vegeteriana (velika)',
      price: '10 KM'
    },
    {
      name: 'Pizza s piletinom (mala)',
      price: '9 KM'
    },
    {
      name: 'Pizza s piletinom (velika)',
      price: '14 KM'
    },
    {
      name: 'Jumbo',
      price: '15 KM'
    },
    {
      name: 'Jumbo s piletinom',
      price: '17 KM'
    }
  ]
},
{
    name: 'Prilozi',
    items: [
      { name: 'Pomfrit', price: '3 KM' },
      { name: 'Pire krompir', price: '2 KM' },
      { name: 'Riža, đuveč', price: '2 KM' },
      { name: 'Povrće', price: '2 KM' },
      { name: 'Šampinjoni', price: '2 KM' }
    ]
  },
  {
    name: 'Salate',
    items: [
      { name: 'Sezonska salata', price: '3 KM' },
      { name: 'Šopska salata', price: '4 KM' }
    ]
  },
  {
    name: 'Deserti',
    items: [
      { name: 'Palačinke sa eurokremom', price: '3 KM' },
      { name: 'Palačinke sa marmeladom', price: '3 KM' },
      { name: 'Palačinke sa orasima', price: '4 KM' },
      { name: 'Voćna salata', price: '4 KM' },
      { name: 'Banana split', price: '6 KM' },
      { name: 'Sladoled kugla', price: '2 KM' }
    ]
  },
   {
    name: 'Topli napitci',
    isDrinkCategory: true,
    items: [
      { name: 'Kafa espresso', price: '1.50 KM' },
      { name: 'Nescaffe', price: '2.00 KM' },
      { name: 'Cappuccino', price: '2.00 KM' },
      { name: 'Topla čokolada', price: '2.00 KM' },
      { name: 'Čaj', price: '1.50 KM' }
    ]
  },
  {
    name: 'Bezalkoholna pića',
    isDrinkCategory: true,
    items: [
      { name: 'Kiseljak (gazirana voda) 1L', price: '5.00 KM' },
      { name: 'Voda Jana (negazirana) 0.25L', price: '1.50 KM' },
      { name: 'Kiseljak (gazirana voda) 0.25L', price: '2.00 KM' },
      { name: 'Voda Vitinka Exotic 0.25L', price: '2.50 KM' },
      { name: 'Cedevita', price: '2.00 KM' },
      { name: 'Cijeđena narandža', price: '4.00 KM' },
      { name: 'Cijeđena limunada', price: '3.00 KM' },
      { name: 'Gazirani sokovi 0.33L', price: '3.00 KM' },
      { name: 'Prirodni sokovi 0.25L', price: '3.00 KM' },
      { name: 'Rodeo 0.33L', price: '3.00 KM' },
      { name: 'Ice Tea 0.25L', price: '2.50 KM' }
    ]
  },
  {
    name: 'Pivo',
    isDrinkCategory: true,
    items: [
      { name: 'Pivo 0.5L', price: '3.00 KM' },
      { name: 'Karlovačko 0.33L', price: '3.00 KM' },
      { name: 'Bavaria 0.33L', price: '3.00 KM' },
      { name: 'Heineken 0.33L', price: '4.00 KM' },
      { name: 'Ožujsko 0.33L', price: '3.00 KM' },
      { name: 'Staropramen 0.33L', price: '3.00 KM' },
      { name: 'Bavaria bez alk. 0.33L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Žestoka pića',
    isDrinkCategory: true,
    items: [
      { name: 'Konjak 0.03L', price: '1.50 KM' },
      { name: 'Lavov 0.03L', price: '1.50 KM' },
      { name: 'Pelinkovac 0.03L', price: '1.50 KM' },
      { name: 'Vodka 0.03L', price: '1.50 KM' },
      { name: 'Stock 0.03L', price: '2.50 KM' },
      { name: 'Vinjak Rubin 0.03L', price: '1.50 KM' },
      { name: 'Jagermeister 0.03L', price: '2.50 KM' },
      { name: 'Domaća šljiva 0.03L', price: '1.50 KM' },
      { name: 'Domaća viljamovka 0.03L', price: '2.50 KM' },
      { name: 'Whiskey 0.03L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Vina',
    isDrinkCategory: true,
    items: [
      { name: 'Graševina butelja 0.20L', price: '7.00 KM' },
      { name: 'Ždrepčeva krv butelja 0.20L', price: '7.00 KM' },
      { name: 'Vranac Procorde butelja 0.20L', price: '6.00 KM' },
      { name: 'Graševina 1L', price: '25.00 KM' },
      { name: 'Ždrepčeva krv 1L', price: '25.00 KM' },
      { name: 'Vranac Procorde 0.75L', price: '25.00 KM' },
      { name: 'Bambus', price: '3.50 KM' },
      { name: 'Gemišt', price: '3.00 KM' }
    ]
  }
    ],
    galleryData: [
  { id: 1, src: '/images/burek.jpg', alt: 'Burek' },
  { id: 2, src: '/images/burek_mali.jpg', alt: 'Burek mali' },
  { id: 3, src: '/images/jetrica.jpg', alt: 'Jetrica' },
  { id: 4, src: '/images/lignje.jpg', alt: 'Lignje' },
  { id: 5, src: '/images/pizza.jpg', alt: 'Pizza' },
  { id: 6, src: '/images/plata.jpg', alt: 'Plata' },
  { id: 7, src: '/images/pohovana.jpg', alt: 'Pohovana' },
  { id: 8, src: '/images/ustipci.jpg', alt: 'Uštipci' },
]
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    fontClass: '',
    header: {
      logo: "Casablanca",
      nav: { menu: "Menu", gallery: "Gallery", contact: "Contact" },
    },
    hero: {
      title: "Casablanca",
      subtitle: "The taste of tradition in the heart of Bosanski Petrovac",
      button: "View Menu",
    },
    menu: { title: "Dishes", drinksTitle: "Drinks" },
    gallery: { title: "Gallery" },
    contact: {
      title: "Contact & Location",
      info: "Information",
      address: "Restaurant Casablanca, Bosanski Petrovac",
      phone: "+387 63 835 761",
      hours: "Mon - Sun: 07:00 - 23:00",
      follow: "Follow us",
      facebook: "Facebook",
      instagram: "Instagram",
    },
    challenge: {
        title: "Meal Recommender",
        description: "Can't decide what to eat? Let our AI chef help! Enter the names of the people in your group, and we'll suggest a delicious meal for each person from our menu.",
        peopleCount: "How many people?",
        person: "person",
        people: "people",
        generateButton: "Get Recommendations",
        generatingButton: "Thinking...",
        namesLabel: "Enter names:",
        namePlaceholder: "Person {index}",
        resultsTitle: "Our Chef's Suggestions:",
        error: {
            emptyNames: "Please enter a name for each person.",
            apiError: "Sorry, our AI chef is busy. Please try again later.",
        },
    },
    gemini: {
        prompt: "You are a helpful assistant for a restaurant called Casablanca. Given a list of food items from the menu and a list of names, your task is to recommend one meal for each person. The food items are: {foodItems}. The names are: {personNames}. Your response should be a JSON array of objects, where each object has 'name' and 'meal' properties. Do not recommend the same meal for everyone. Provide diverse suggestions. Do not add any extra text, just the JSON array."
    },
    footer: {
      copyright: "© {year} Casablanca Restaurant. All rights reserved.\nWebsite design and development: Adan Zukančić",
    },
    menuData: [
        {
    name: 'Cold Starters',
    items: [
      {
        name: 'Cold Platter',
        description: 'Ham, cheese, kulen (spicy sausage), fried dough',
        price: '20 KM'
      }
    ]
  },
  {
    name: 'Breakfast Dishes',
    items: [
      { name: 'Omelette (ham, cheese)', price: '4 KM' },
      { name: 'Omelette with sudžuk', price: '6 KM' },
      { name: 'Pasta with chicken', price: '8 KM' }
    ]
  },
  {
    name: 'Pies',
    items: [
      { name: 'Burek (meat pie)', price: '4 KM' },
      { name: 'Cheese Pie', price: '4 KM' },
      { name: 'Spinach Pie', price: '4 KM' },
      { name: 'Potato Pie', price: '4 KM' }
    ]
  },
  {
    name: 'Soups',
    items: [
      { name: 'Beef Soup', price: '3 KM' },
      { name: 'Tomato Soup', price: '4 KM' },
      { name: 'Mushroom Soup', price: '4 KM' },
      { name: 'Trahana Soup', price: '3 KM' }
    ]
  },
  {
    name: 'Cooked Dishes',
    items: [
      { name: 'Daily Special', price: '7 KM' }
    ]
  },
  {
    name: 'Chicken Dishes',
    items: [
      {
        name: 'Chicken Strips in Flatbread (small portion)',
        description: 'With side dish',
        price: '7 KM'
      },
      {
        name: 'Chicken Strips in Flatbread (large portion)',
        description: 'With side dish',
        price: '9 KM'
      },
      {
        name: 'Breaded Chicken in Sauce (small portion)',
        description: 'Side dish: fries',
        price: '8 KM'
      },
      {
        name: 'Breaded Chicken in Sauce (large portion)',
        description: 'Side dish: fries',
        price: '10 KM'
      },
      {
        name: 'Chicken Salad (small portion)',
        price: '7 KM'
      },
      {
        name: 'Chicken Salad (large portion)',
        price: '9 KM'
      },
      {
        name: 'Stuffed Chicken Schnitzel (ham, cheese)',
        price: '12 KM'
      }
    ]
  },
  {
    name: 'Fish and Squid',
    items: [
      {
        name: 'Trout (small portion)',
        description: 'Fries or potato salad',
        price: '10 KM'
      },
      {
        name: 'Trout (large portion)',
        description: 'Fries or potato salad',
        price: '18 KM'
      },
      {
        name: 'Squid + Fries',
        price: '15 KM'
      }
    ]
  },
  {
  name: 'Grilled Dishes',
  items: [
    { name: 'Ćevapi (small portion)', price: '6 KM' },
    { name: 'Ćevapi (medium portion)', price: '7 KM' },
    { name: 'Ćevapi (large portion)', price: '8 KM' },

    { name: 'Burger (small portion)', price: '7 KM' },
    { name: 'Burger (large portion)', price: '10 KM' },

    { name: 'Sudžuk Sausages (small portion)', price: '6 KM' },
    { name: 'Sudžuk Sausages (large portion)', price: '8 KM' },

    { name: 'Veal Strips + Fries (small portion)', price: '10 KM' },
    { name: 'Veal Strips + Fries (large portion)', price: '14 KM' },

    { name: 'Chops + Fries (small portion)', price: '10 KM' },
    { name: 'Chops + Fries (large portion)', price: '14 KM' },

    { name: 'Veal Liver + Fries (small portion)', price: '7 KM' },
    { name: 'Veal Liver + Fries (large portion)', price: '10 KM' },

    { name: 'Veal Skewers + Fries (small portion)', price: '10 KM' },
    { name: 'Veal Skewers + Fries (large portion)', price: '14 KM' },

    { name: 'Wiener Schnitzel + Fries (small portion)', price: '14 KM' },
    { name: 'Wiener Schnitzel + Fries (large portion)', price: '18 KM' },

    {
      name: 'Mixed Meat',
      price: '30 KM'
    },
    {
      name: '“Casablanca” Platter',
      description: 'Ćevapi, chicken strips, sudžuk sausages, veal strips, liver, fries',
      price: '35 KM'
    },
    {
      name: 'Stuffed Schnitzel “Casablanca”',
      description: 'Ham, cheese',
      price: '18 KM'
    }
  ]
},
{
  name: 'Pizzas',
  items: [
    {
      name: 'Margherita (small)',
      description: 'Tomato sauce, cheese, olives',
      price: '6 KM'
    },
    {
      name: 'Margherita (large)',
      description: 'Tomato sauce, cheese, olives',
      price: '9 KM'
    },
    {
      name: 'Capricciosa (small)',
      description: 'Tomato sauce, cheese, ham, mushrooms',
      price: '8 KM'
    },
    {
      name: 'Capricciosa (large)',
      description: 'Tomato sauce, cheese, ham, mushrooms',
      price: '10 KM'
    },
    {
      name: 'Mexicana (small)',
      description: 'Tomato sauce, cheese, ham, corn, kulen (spicy sausage), hot peppers',
      price: '8 KM'
    },
    {
      name: 'Mexicana (large)',
      description: 'Tomato sauce, cheese, ham, corn, kulen (spicy sausage), hot peppers',
      price: '10 KM'
    },
    {
      name: 'Tuna (small)',
      description: 'Tomato sauce, cheese, tuna, mushrooms',
      price: '8 KM'
    },
    {
      name: 'Tuna (large)',
      description: 'Tomato sauce, cheese, tuna, mushrooms',
      price: '10 KM'
    },
    {
      name: 'Funghi (small)',
      description: 'Tomato sauce, cheese, mushrooms',
      price: '8 KM'
    },
    {
      name: 'Funghi (large)',
      description: 'Tomato sauce, cheese, mushrooms',
      price: '10 KM'
    },
    {
      name: 'Vegetarian (small)',
      price: '8 KM'
    },
    {
      name: 'Vegetarian (large)',
      price: '10 KM'
    },
    {
      name: 'Chicken Pizza (small)',
      price: '9 KM'
    },
    {
      name: 'Chicken Pizza (large)',
      price: '14 KM'
    },
    {
      name: 'Jumbo',
      price: '15 KM'
    },
    {
      name: 'Jumbo with Chicken',
      price: '17 KM'
    }
  ]
},
 {
    name: 'Side Dishes',
    items: [
      { name: 'French Fries', price: '3 KM' },
      { name: 'Mashed Potatoes', price: '2 KM' },
      { name: 'Rice or Vegetable Pilaf', price: '2 KM' },
      { name: 'Mixed Vegetables', price: '2 KM' },
      { name: 'Mushrooms', price: '2 KM' }
    ]
  },
  {
    name: 'Salads',
    items: [
      { name: 'Seasonal Salad', price: '3 KM' },
      { name: 'Shopska Salad', price: '4 KM' }
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Crepes with Eurocrem', price: '3 KM' },
      { name: 'Crepes with Marmalade', price: '3 KM' },
      { name: 'Crepes with Walnuts', price: '4 KM' },
      { name: 'Fruit Salad', price: '4 KM' },
      { name: 'Banana Split', price: '6 KM' },
      { name: 'Ice Cream Scoop', price: '2 KM' }
    ]
  },
  {
    name: 'Hot Drinks',
    isDrinkCategory: true,
    items: [
      { name: 'Espresso Coffee', price: '1.50 KM' },
      { name: 'Nescafe', price: '2.00 KM' },
      { name: 'Cappuccino', price: '2.00 KM' },
      { name: 'Hot Chocolate', price: '2.00 KM' },
      { name: 'Tea', price: '1.50 KM' }
    ]
  },
  {
    name: 'Non-Alcoholic Drinks',
    isDrinkCategory: true,
    items: [
      { name: 'Kiseljak (sparkling water) 1L', price: '5.00 KM' },
      { name: 'Jana Water (still) 0.25L', price: '2.00 KM' },
      { name: 'Kiseljak (sparkling) 0.25L', price: '2.00 KM' },
      { name: 'Vitinka Exotic Water 0.25L', price: '2.50 KM' },
      { name: 'Cedevita', price: '2.00 KM' },
      { name: 'Fresh Orange Juice', price: '4.00 KM' },
      { name: 'Fresh Lemonade', price: '3.00 KM' },
      { name: 'Carbonated Soft Drinks 0.33L', price: '3.00 KM' },
      { name: 'Natural Juices 0.25L', price: '3.00 KM' },
      { name: 'Rodeo 0.33L', price: '3.00 KM' },
      { name: 'Ice Tea 0.25L', price: '2.50 KM' }
    ]
  },
  {
    name: 'Beer',
    isDrinkCategory: true,
    items: [
      { name: 'Draft Beer 0.5L', price: '3.00 KM' },
      { name: 'Karlovačko 0.33L', price: '3.00 KM' },
      { name: 'Bavaria 0.33L', price: '3.00 KM' },
      { name: 'Heineken 0.33L', price: '4.00 KM' },
      { name: 'Ožujsko 0.33L', price: '3.00 KM' },
      { name: 'Staropramen 0.33L', price: '3.00 KM' },
      { name: 'Bavaria non-alcoholic 0.33L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Spirits',
    isDrinkCategory: true,
    items: [
      { name: 'Cognac 0.03L', price: '1.50 KM' },
      { name: 'Lavov 0.03L', price: '1.50 KM' },
      { name: 'Pelinkovac 0.03L', price: '1.50 KM' },
      { name: 'Vodka 0.03L', price: '1.50 KM' },
      { name: 'Stock 0.03L', price: '2.50 KM' },
      { name: 'Rubin Brandy 0.03L', price: '1.50 KM' },
      { name: 'Jägermeister 0.03L', price: '2.50 KM' },
      { name: 'Homemade Plum Brandy 0.03L', price: '1.50 KM' },
      { name: 'Homemade Williams Pear Brandy 0.03L', price: '2.50 KM' },
      { name: 'Whiskey 0.03L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Wines',
    isDrinkCategory: true,
    items: [
      { name: 'Graševina (bottle) 0.20L', price: '7.00 KM' },
      { name: 'Ždrepčeva Krv (bottle) 0.20L', price: '7.00 KM' },
      { name: 'Vranac Pro Corde (bottle) 0.20L', price: '6.00 KM' },
      { name: 'Graševina 1L', price: '25.00 KM' },
      { name: 'Ždrepčeva Krv 1L', price: '25.00 KM' },
      { name: 'Vranac Pro Corde 0.75L', price: '25.00 KM' },
      { name: 'Bambus (wine & cola)', price: '3.50 KM' },
      { name: 'Gemišt (wine & sparkling water)', price: '3.00 KM' }
    ]
  }
    ],
    galleryData: [
  { id: 1, src: '/images/burek.jpg', alt: 'Burek' },
  { id: 2, src: '/images/burek_mali.jpg', alt: 'Burek mali' },
  { id: 3, src: '/images/jetrica.jpg', alt: 'Jetrica' },
  { id: 4, src: '/images/lignje.jpg', alt: 'Lignje' },
  { id: 5, src: '/images/pizza.jpg', alt: 'Pizza' },
  { id: 6, src: '/images/plata.jpg', alt: 'Plata' },
  { id: 7, src: '/images/pohovana.jpg', alt: 'Pohovana' },
  { id: 8, src: '/images/ustipci.jpg', alt: 'Uštipci' },
]
  },
  de: {
    lang: 'de',
    dir: 'ltr',
    fontClass: '',
    header: {
      logo: "Casablanca",
      nav: { menu: "Menü", gallery: "Galerie", contact: "Kontakt" },
    },
    hero: {
      title: "Casablanca",
      subtitle: "Der Geschmack der Tradition im Herzen von Bosanski Petrovac",
      button: "Menü ansehen",
    },
    menu: { title: "Gerichte", drinksTitle: "Getränke" },
    gallery: { title: "Galerie" },
    contact: {
      title: "Kontakt & Standort",
      info: "Informationen",
      address: "Restaurant Casablanca, Bosanski Petrovac",
      phone: "+387 63 835 761",
      hours: "Mo - So: 07:00 - 23:00",
      follow: "Folgen Sie uns",
      facebook: "Facebook",
      instagram: "Instagram",
    },
    challenge: {
        title: "Essensempfehler",
        description: "Sie können sich nicht entscheiden, was Sie essen sollen? Lassen Sie sich von unserem KI-Koch helfen! Geben Sie die Namen der Personen in Ihrer Gruppe ein, und wir schlagen für jede Person ein köstliches Gericht von unserer Speisekarte vor.",
        peopleCount: "Wie viele Personen?",
        person: "Person",
        people: "Personen",
        generateButton: "Empfehlungen erhalten",
        generatingButton: "Denke nach...",
        namesLabel: "Namen eingeben:",
        namePlaceholder: "Person {index}",
        resultsTitle: "Vorschläge unseres Küchenchefs:",
        error: {
            emptyNames: "Bitte geben Sie für jede Person einen Namen ein.",
            apiError: "Entschuldigung, unser KI-Koch ist beschäftigt. Bitte versuchen Sie es später noch einmal.",
        },
    },
    gemini: {
        prompt: "Sie sind ein hilfreicher Assistent für ein Restaurant namens Casablanca. Gegeben eine Liste von Gerichten von der Speisekarte und eine Liste von Namen, ist es Ihre Aufgabe, für jede Person ein Gericht zu empfehlen. Die Gerichte sind: {foodItems}. Die Namen sind: {personNames}. Ihre Antwort sollte ein JSON-Array von Objekten sein, wobei jedes Objekt die Eigenschaften 'name' und 'meal' hat. Empfehlen Sie nicht für jeden das gleiche Gericht. Machen Sie vielfältige Vorschläge. Fügen Sie keinen zusätzlichen Text hinzu, nur das JSON-Array."
    },
    footer: {
      copyright: "© {year} Restaurant Casablanca. Alle Rechte vorbehalten.\nDesign und Entwicklung der Webseite – Adan Zukančić",
    },
    menuData: [
         {
    name: 'Kalte Vorspeisen',
    items: [
      {
        name: 'Kalte Platte',
        description: 'Schinken, Käse, Kulen (scharfe Wurst), Uštipci (frittierter Teig)',
        price: '20 KM'
      }
    ]
  },
  {
    name: 'Frühstücksgerichte',
    items: [
      { name: 'Omelett (Schinken, Käse)', price: '4 KM' },
      { name: 'Omelett mit Sudžuk', price: '6 KM' },
      { name: 'Nudeln mit Hähnchen', price: '8 KM' }
    ]
  },
  {
    name: 'Börek (Pita)',
    items: [
      { name: 'Börek (mit Fleisch)', price: '4 KM' },
      { name: 'Käsepita (Sirnica)', price: '4 KM' },
      { name: 'Spinatpita (Zeljanica)', price: '4 KM' },
      { name: 'Kartoffelpita (Krompiruša)', price: '4 KM' }
    ]
  },
  {
    name: 'Suppen',
    items: [
      { name: 'Rindfleischsuppe', price: '3 KM' },
      { name: 'Tomatensuppe', price: '4 KM' },
      { name: 'Pilzsuppe', price: '4 KM' },
      { name: 'Trahana-Suppe', price: '3 KM' }
    ]
  },
  {
    name: 'Hausgemachte Gerichte',
    items: [
      { name: 'Tagesgericht', price: '7 KM' }
    ]
  },
   {
    name: 'Hähnchengerichte',
    items: [
      {
        name: 'Hähnchenstreifen im Fladenbrot (kleine Portion)',
        description: 'Mit Beilage',
        price: '7 KM'
      },
      {
        name: 'Hähnchenstreifen im Fladenbrot (große Portion)',
        description: 'Mit Beilage',
        price: '9 KM'
      },
      {
        name: 'Paniertes Hähnchen in Soße (kleine Portion)',
        description: 'Beilage: Pommes',
        price: '8 KM'
      },
      {
        name: 'Paniertes Hähnchen in Soße (große Portion)',
        description: 'Beilage: Pommes',
        price: '10 KM'
      },
      {
        name: 'Hähnchensalat (kleine Portion)',
        price: '7 KM'
      },
      {
        name: 'Hähnchensalat (große Portion)',
        price: '9 KM'
      },
      {
        name: 'Gefülltes Hähnchenschnitzel (Schinken, Käse)',
        price: '12 KM'
      }
    ]
  },
  {
    name: 'Fisch und Tintenfisch',
    items: [
      {
        name: 'Forelle (kleine Portion)',
        description: 'Pommes oder Kartoffelsalat',
        price: '10 KM'
      },
      {
        name: 'Forelle (große Portion)',
        description: 'Pommes oder Kartoffelsalat',
        price: '18 KM'
      },
      {
        name: 'Tintenfisch + Pommes',
        price: '15 KM'
      }
    ]
  },
  {
  name: 'Grillgerichte',
  items: [
    { name: 'Ćevapi (kleine Portion)', price: '6 KM' },
    { name: 'Ćevapi (mittlere Portion)', price: '7 KM' },
    { name: 'Ćevapi (große Portion)', price: '8 KM' },

    { name: 'Burger (kleine Portion)', price: '7 KM' },
    { name: 'Burger (große Portion)', price: '10 KM' },

    { name: 'Sujuk-Würstchen (kleine Portion)', price: '6 KM' },
    { name: 'Sujuk-Würstchen (große Portion)', price: '8 KM' },

    { name: 'Kalbfleischstreifen + Pommes (kleine Portion)', price: '10 KM' },
    { name: 'Kalbfleischstreifen + Pommes (große Portion)', price: '14 KM' },

    { name: 'Koteletts + Pommes (kleine Portion)', price: '10 KM' },
    { name: 'Koteletts + Pommes (große Portion)', price: '14 KM' },

    { name: 'Kalbsleber + Pommes (kleine Portion)', price: '7 KM' },
    { name: 'Kalbsleber + Pommes (große Portion)', price: '10 KM' },

    { name: 'Kalbsspieße + Pommes (kleine Portion)', price: '10 KM' },
    { name: 'Kalbsspieße + Pommes (große Portion)', price: '14 KM' },

    { name: 'Wiener Schnitzel + Pommes (kleine Portion)', price: '14 KM' },
    { name: 'Wiener Schnitzel + Pommes (große Portion)', price: '18 KM' },

    {
      name: 'Gemischtes Fleisch',
      price: '30 KM'
    },
    {
      name: 'Platte „Casablanca“',
      description: 'Ćevapi, Hähnchenstreifen, Sujuk-Würstchen, Kalbfleischstreifen, Leber, Pommes',
      price: '35 KM'
    },
    {
      name: 'Gefülltes Schnitzel „Casablanca“',
      description: 'Schinken, Käse',
      price: '18 KM'
    }
  ]
},
{
  name: 'Pizzen',
  items: [
    {
      name: 'Margherita (klein)',
      description: 'Tomatensoße, Käse, Oliven',
      price: '6 KM'
    },
    {
      name: 'Margherita (groß)',
      description: 'Tomatensoße, Käse, Oliven',
      price: '9 KM'
    },
    {
      name: 'Capricciosa (klein)',
      description: 'Tomatensoße, Käse, Schinken, Champignons',
      price: '8 KM'
    },
    {
      name: 'Capricciosa (groß)',
      description: 'Tomatensoße, Käse, Schinken, Champignons',
      price: '10 KM'
    },
    {
      name: 'Mexicana (klein)',
      description: 'Tomatensoße, Käse, Schinken, Mais, Kulen (scharfe Wurst), Peperoni',
      price: '8 KM'
    },
    {
      name: 'Mexicana (groß)',
      description: 'Tomatensoße, Käse, Schinken, Mais, Kulen (scharfe Wurst), Peperoni',
      price: '10 KM'
    },
    {
      name: 'Thunfisch (klein)',
      description: 'Tomatensoße, Käse, Thunfisch, Champignons',
      price: '8 KM'
    },
    {
      name: 'Thunfisch (groß)',
      description: 'Tomatensoße, Käse, Thunfisch, Champignons',
      price: '10 KM'
    },
    {
      name: 'Funghi (klein)',
      description: 'Tomatensoße, Käse, Champignons',
      price: '8 KM'
    },
    {
      name: 'Funghi (groß)',
      description: 'Tomatensoße, Käse, Champignons',
      price: '10 KM'
    },
    {
      name: 'Vegetarisch (klein)',
      price: '8 KM'
    },
    {
      name: 'Vegetarisch (groß)',
      price: '10 KM'
    },
    {
      name: 'Pizza mit Hähnchen (klein)',
      price: '9 KM'
    },
    {
      name: 'Pizza mit Hähnchen (groß)',
      price: '14 KM'
    },
    {
      name: 'Jumbo',
      price: '15 KM'
    },
    {
      name: 'Jumbo mit Hähnchen',
      price: '17 KM'
    }
  ]
},
  {
    name: 'Beilagen',
    items: [
      { name: 'Pommes Frites', price: '3 KM' },
      { name: 'Kartoffelpüree', price: '2 KM' },
      { name: 'Reis oder Gemüsereis', price: '2 KM' },
      { name: 'Gemüse', price: '2 KM' },
      { name: 'Champignons', price: '2 KM' }
    ]
  },
  {
    name: 'Salate',
    items: [
      { name: 'Saisonsalat', price: '3 KM' },
      { name: 'Shopska-Salat', price: '4 KM' }
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Pfannkuchen mit Eurocrem', price: '3 KM' },
      { name: 'Pfannkuchen mit Marmelade', price: '3 KM' },
      { name: 'Pfannkuchen mit Walnüssen', price: '4 KM' },
      { name: 'Obstsalat', price: '4 KM' },
      { name: 'Bananensplit', price: '6 KM' },
      { name: 'Eiskugel', price: '2 KM' }
    ]
  },
   {
    name: 'Heißgetränke',
    isDrinkCategory: true,
    items: [
      { name: 'Espresso-Kaffee', price: '1.50 KM' },
      { name: 'Nescafé', price: '2.00 KM' },
      { name: 'Cappuccino', price: '2.00 KM' },
      { name: 'Heiße Schokolade', price: '2.00 KM' },
      { name: 'Tee', price: '1.50 KM' }
    ]
  },
  {
    name: 'Alkoholfreie Getränke',
    isDrinkCategory: true,
    items: [
      { name: 'Kiseljak (Sprudelwasser) 1L', price: '5.00 KM' },
      { name: 'Jana Wasser (still) 0,25L', price: '1.50 KM' },
      { name: 'Kiseljak (Sprudelwasser) 0,25L', price: '2.00 KM' },
      { name: 'Vitinka Exotic Wasser 0,25L', price: '2.50 KM' },
      { name: 'Cedevita', price: '2.00 KM' },
      { name: 'Frisch gepresster Orangensaft', price: '4.00 KM' },
      { name: 'Frisch gepresste Limonade', price: '3.00 KM' },
      { name: 'Kohlensäurehaltige Softdrinks 0,33L', price: '3.00 KM' },
      { name: 'Natürliche Säfte 0,25L', price: '3.00 KM' },
      { name: 'Rodeo 0,33L', price: '3.00 KM' },
      { name: 'Eistee 0,25L', price: '2.50 KM' }
    ]
  },
  {
    name: 'Bier',
    isDrinkCategory: true,
    items: [
      { name: 'Bier vom Fass 0,5L', price: '3.00 KM' },
      { name: 'Karlovačko 0,33L', price: '3.00 KM' },
      { name: 'Bavaria 0,33L', price: '3.00 KM' },
      { name: 'Heineken 0,33L', price: '4.00 KM' },
      { name: 'Ožujsko 0,33L', price: '3.00 KM' },
      { name: 'Staropramen 0,33L', price: '3.00 KM' },
      { name: 'Bavaria alkoholfrei 0,33L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Spirituosen',
    isDrinkCategory: true,
    items: [
      { name: 'Cognac 0,03L', price: '1.50 KM' },
      { name: 'Lavov 0,03L', price: '1.50 KM' },
      { name: 'Pelinkovac 0,03L', price: '1.50 KM' },
      { name: 'Wodka 0,03L', price: '1.50 KM' },
      { name: 'Stock 0,03L', price: '2.50 KM' },
      { name: 'Rubin Brandy 0,03L', price: '1.50 KM' },
      { name: 'Jägermeister 0,03L', price: '2.50 KM' },
      { name: 'Hausgemachter Pflaumenschnaps 0,03L', price: '1.50 KM' },
      { name: 'Hausgemachter Williams 0,03L', price: '2.50 KM' },
      { name: 'Whiskey 0,03L', price: '3.00 KM' }
    ]
  },
  {
    name: 'Weine',
    isDrinkCategory: true,
    items: [
      { name: 'Graševina Flasche 0,20L', price: '7.00 KM' },
      { name: 'Ždrepčeva Krv Flasche 0,20L', price: '7.00 KM' },
      { name: 'Vranac Pro Corde Flasche 0,20L', price: '6.00 KM' },
      { name: 'Graševina 1L', price: '25.00 KM' },
      { name: 'Ždrepčeva Krv 1L', price: '25.00 KM' },
      { name: 'Vranac Pro Corde 0,75L', price: '25.00 KM' },
      { name: 'Bambus (Wein & Cola)', price: '3.50 KM' },
      { name: 'Gemišt (Wein & Sprudelwasser)', price: '3.00 KM' }
    ]
  }
    ],
    galleryData: [
  { id: 1, src: '/images/burek.jpg', alt: 'Burek' },
  { id: 2, src: '/images/burek_mali.jpg', alt: 'Burek mali' },
  { id: 3, src: '/images/jetrica.jpg', alt: 'Jetrica' },
  { id: 4, src: '/images/lignje.jpg', alt: 'Lignje' },
  { id: 5, src: '/images/pizza.jpg', alt: 'Pizza' },
  { id: 6, src: '/images/plata.jpg', alt: 'Plata' },
  { id: 7, src: '/images/pohovana.jpg', alt: 'Pohovana' },
  { id: 8, src: '/images/ustipci.jpg', alt: 'Uštipci' },
]
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    fontClass: 'font-arabic',
    header: {
      logo: "الدار البيضاء",
      nav: { menu: "قائمة الطعام", gallery: "المعرض", contact: "التواصل" },
    },
    hero: {
      title: "الدار البيضاء",
      subtitle: "طعم الأصالة في قلب بوسانسكي بتروفاتس",
      button: "عرض القائمة",
    },
    menu: { title: "الأطباق", drinksTitle: "المشروبات" },
    gallery: { title: "المعرض" },
    contact: {
      title: "التواصل والموقع",
      info: "المعلومات",
      address: "مطعم كازابلانكا، بوسانسكي بيتروفاتس",
      phone: "+38763835761",
      hours: "الاثنين - الأحد: 07:00 - 23:00",
      follow: "تابعونا",
      facebook: "فيسبوك",
      instagram: "انستغرام",
    },
    challenge: {
        title: "موصي الوجبات",
        description: "لا تستطيع أن تقرر ماذا تأكل؟ دع طاهينا الذي يعمل بالذكاء الاصطناعي يساعدك! أدخل أسماء الأشخاص في مجموعتك، وسنقترح وجبة لذيذة لكل شخص من قائمتنا.",
        peopleCount: "كم عدد الأشخاص؟",
        person: "شخص",
        people: "أشخاص",
        generateButton: "احصل على توصيات",
        generatingButton: "أفكر...",
        namesLabel: "أدخل الأسماء:",
        namePlaceholder: "الشخص {index}",
        resultsTitle: "اقتراحات طاهينا:",
        error: {
            emptyNames: "الرجاء إدخال اسم لكل شخص.",
            apiError: "عذراً، طاهينا الآلي مشغول. يرجى المحاولة مرة أخرى لاحقاً.",
        },
    },
    gemini: {
        prompt: "أنت مساعد مفيد لمطعم يسمى الدار البيضاء. بالنظر إلى قائمة أصناف الطعام من القائمة وقائمة بالأسماء، مهمتك هي التوصية بوجبة واحدة لكل شخص. أصناف الطعام هي: {foodItems}. الأسماء هي: {personNames}. يجب أن تكون إجابتك عبارة عن مصفوفة JSON من الكائنات، حيث يحتوي كل كائن على خاصيتي 'name' و 'meal'. لا توصي بنفس الوجبة للجميع. قدم اقتراحات متنوعة. لا تقم بإضافة أي نص إضافي، فقط مصفوفة JSON."
    },
    footer: {
      copyright: "© {year} مطعم الدار البيضاء. جميع الحقوق محفوظة.\nتصميم وتطوير الموقع: عدنان زوكانتشيتش",
    },
    menuData: [
         {
    name: 'المقبلات الباردة',
    items: [
      {
        name: 'طبق بارد',
        description: 'لحم ديك رومي، جبنة، كولين (سجق حار)، عجينة مقلية',
        price: '20 KM'
      }
    ]
  },
  {
    name: 'وجبات الإفطار',
    items: [
      { name: 'أومليت (لحم ديك رومي، جبنة)', price: '4 KM' },
      { name: 'أومليت بالسجق', price: '6 KM' },
      { name: 'معكرونة بالدجاج', price: '8 KM' }
    ]
  },
  {
    name: 'الفطائر',
    items: [
      { name: 'بورك (بلحم)', price: '4 KM' },
      { name: 'فطيرة بالجبنة', price: '4 KM' },
      { name: 'فطيرة بالسبانخ', price: '4 KM' },
      { name: 'فطيرة بالبطاطا', price: '4 KM' }
    ]
  },
  {
    name: 'الشوربات',
    items: [
      { name: 'شوربة لحم البقر', price: '3 KM' },
      { name: 'شوربة الطماطم', price: '4 KM' },
      { name: 'شوربة الفطر', price: '4 KM' },
      { name: 'شوربة ترهانا', price: '3 KM' }
    ]
  },
  {
    name: 'الأطباق المطهية',
    items: [
      { name: 'الوجبة اليومية', price: '7 KM' }
    ]
  },
   {
    name: 'أطباق الدجاج',
    items: [
      {
        name: 'قطع دجاج في خبز (حصة صغيرة)',
        description: 'مع طبق جانبي',
        price: '7 KM'
      },
      {
        name: 'قطع دجاج في خبز (حصة كبيرة)',
        description: 'مع طبق جانبي',
        price: '9 KM'
      },
      {
        name: 'دجاج مقلي بصلصة (حصة صغيرة)',
        description: 'طبق جانبي: بطاطا مقلية',
        price: '8 KM'
      },
      {
        name: 'دجاج مقلي بصلصة (حصة كبيرة)',
        description: 'طبق جانبي: بطاطا مقلية',
        price: '10 KM'
      },
      {
        name: 'سلطة الدجاج (حصة صغيرة)',
        price: '7 KM'
      },
      {
        name: 'سلطة الدجاج (حصة كبيرة)',
        price: '9 KM'
      },
      {
        name: 'شنيتسل دجاج محشي (ديك رومي، جبنة)',
        price: '12 KM'
      }
    ]
  },
  {
    name: 'الأسماك والحبار',
    items: [
      {
        name: 'سمك السلمون المرقط (حصة صغيرة)',
        description: 'بطاطا مقلية أو سلطة بطاطا',
        price: '10 KM'
      },
      {
        name: 'سمك السلمون المرقط (حصة كبيرة)',
        description: 'بطاطا مقلية أو سلطة بطاطا',
        price: '18 KM'
      },
      {
        name: 'حبار + بطاطا مقلية',
        price: '15 KM'
      }
    ]
  },
  {
  name: 'أطباق المشاوي',
  items: [
    { name: 'تشيفابي (حصة صغيرة)', price: '6 KM' },
    { name: 'تشيفابي (حصة متوسطة)', price: '7 KM' },
    { name: 'تشيفابي (حصة كبيرة)', price: '8 KM' },

    { name: 'برغر (حصة صغيرة)', price: '7 KM' },
    { name: 'برغر (حصة كبيرة)', price: '10 KM' },

    { name: 'سجق (حصة صغيرة)', price: '6 KM' },
    { name: 'سجق (حصة كبيرة)', price: '8 KM' },

    { name: 'شرائح لحم عجل + بطاطا مقلية (حصة صغيرة)', price: '10 KM' },
    { name: 'شرائح لحم عجل + بطاطا مقلية (حصة كبيرة)', price: '14 KM' },

    { name: 'شرائح لحم + بطاطا مقلية (حصة صغيرة)', price: '10 KM' },
    { name: 'شرائح لحم + بطاطا مقلية (حصة كبيرة)', price: '14 KM' },

    { name: 'كبدة عجل + بطاطا مقلية (حصة صغيرة)', price: '7 KM' },
    { name: 'كبدة عجل + بطاطا مقلية (حصة كبيرة)', price: '10 KM' },

    { name: 'شيش عجل + بطاطا مقلية (حصة صغيرة)', price: '10 KM' },
    { name: 'شيش عجل + بطاطا مقلية (حصة كبيرة)', price: '14 KM' },

    { name: 'شنسل فييني + بطاطا مقلية (حصة صغيرة)', price: '14 KM' },
    { name: 'شنسل فييني + بطاطا مقلية (حصة كبيرة)', price: '18 KM' },

    {
      name: 'لحم مشكل',
      price: '30 KM'
    },
    {
      name: 'صحن "كازابلانكا"',
      description: 'تشيفابي، شرائح دجاج، سجق، شرائح لحم عجل، كبدة، بطاطا مقلية',
      price: '35 KM'
    },
    {
      name: 'شنسل محشي "كازابلانكا"',
      description: 'ديك رومي، جبنة',
      price: '18 KM'
    }
  ]
},
{
  name: 'البيتزا',
  items: [
    {
      name: 'مارغريتا (صغيرة)',
      description: 'صلصة الطماطم، جبنة، زيتون',
      price: '6 KM'
    },
    {
      name: 'مارغريتا (كبيرة)',
      description: 'صلصة الطماطم، جبنة، زيتون',
      price: '9 KM'
    },
    {
      name: 'كابريتشوزا (صغيرة)',
      description: 'صلصة الطماطم، جبنة، لحم مدخن، فطر',
      price: '8 KM'
    },
    {
      name: 'كابريتشوزا (كبيرة)',
      description: 'صلصة الطماطم، جبنة، لحم مدخن، فطر',
      price: '10 KM'
    },
    {
      name: 'ميكسيكانا (صغيرة)',
      description: 'صلصة الطماطم، جبنة، لحم مدخن، ذرة، كولن (سجق حار)، فلفل حار',
      price: '8 KM'
    },
    {
      name: 'ميكسيكانا (كبيرة)',
      description: 'صلصة الطماطم، جبنة، لحم مدخن، ذرة، كولن (سجق حار)، فلفل حار',
      price: '10 KM'
    },
    {
      name: 'تونا (صغيرة)',
      description: 'صلصة الطماطم، جبنة، تونة، فطر',
      price: '8 KM'
    },
    {
      name: 'تونا (كبيرة)',
      description: 'صلصة الطماطم، جبنة، تونة، فطر',
      price: '10 KM'
    },
    {
      name: 'فونغي (صغيرة)',
      description: 'صلصة الطماطم، جبنة، فطر',
      price: '8 KM'
    },
    {
      name: 'فونغي (كبيرة)',
      description: 'صلصة الطماطم، جبنة، فطر',
      price: '10 KM'
    },
    {
      name: 'نباتية (صغيرة)',
      price: '8 KM'
    },
    {
      name: 'نباتية (كبيرة)',
      price: '10 KM'
    },
    {
      name: 'بيتزا بالدجاج (صغيرة)',
      price: '9 KM'
    },
    {
      name: 'بيتزا بالدجاج (كبيرة)',
      price: '14 KM'
    },
    {
      name: 'جامبو',
      price: '15 KM'
    },
    {
      name: 'جامبو بالدجاج',
      price: '17 KM'
    }
  ]
},
 {
    name: 'الأطباق الجانبية',
    items: [
      { name: 'بطاطا مقلية', price: '3 KM' },
      { name: 'بطاطا مهروسة', price: '2 KM' },
      { name: 'أرز أو يخنة خضار', price: '2 KM' },
      { name: 'خضار مشكلة', price: '2 KM' },
      { name: 'فطر', price: '2 KM' }
    ]
  },
  {
    name: 'السلطات',
    items: [
      { name: 'سلطة موسمية', price: '3 KM' },
      { name: 'سلطة شوبسكا', price: '4 KM' }
    ]
  },
  {
    name: 'الحلويات',
    items: [
      { name: 'كريب مع يوروكريم', price: '3 KM' },
      { name: 'كريب مع مربى', price: '3 KM' },
      { name: 'كريب مع جوز', price: '4 KM' },
      { name: 'سلطة فواكه', price: '4 KM' },
      { name: 'سبليت الموز', price: '6 KM' },
      { name: 'كرة آيس كريم', price: '2 KM' }
    ]
  },
   {
    name: 'المشروبات الساخنة',
    isDrinkCategory: true,
    items: [
      { name: 'قهوة إسبريسو', price: '1.50 KM' },
      { name: 'نسكافيه', price: '2.00 KM' },
      { name: 'كابتشينو', price: '2.00 KM' },
      { name: 'شوكولاتة ساخنة', price: '2.00 KM' },
      { name: 'شاي', price: '1.50 KM' }
    ]
  },
  {
    name: 'المشروبات غير الكحولية',
    isDrinkCategory: true,
    items: [
      { name: 'ماء غازي كيسيلجاك 1 لتر', price: '5.00 KM' },
      { name: 'ماء جانا (بدون غاز) 0.25 لتر', price: '1.50 KM' },
      { name: 'ماء غازي كيسيلجاك 0.25 لتر', price: '2.00 KM' },
      { name: 'ماء فيتينكا إكزوتيك 0.25 لتر', price: '2.50 KM' },
      { name: 'سيديفيتا', price: '2.00 KM' },
      { name: 'عصير برتقال طبيعي', price: '4.00 KM' },
      { name: 'ليمونادة طبيعية', price: '3.00 KM' },
      { name: 'مشروبات غازية 0.33 لتر', price: '3.00 KM' },
      { name: 'عصائر طبيعية 0.25 لتر', price: '3.00 KM' },
      { name: 'روديو 0.33 لتر', price: '3.00 KM' },
      { name: 'شاي مثلج 0.25 لتر', price: '2.50 KM' }
    ]
  },
  {
    name: 'البيرة',
    isDrinkCategory: true,
    items: [
      { name: 'بيرة من البرميل 0.5 لتر', price: '3.00 KM' },
      { name: 'كارلوفاتشكو 0.33 لتر', price: '3.00 KM' },
      { name: 'بافاريا 0.33 لتر', price: '3.00 KM' },
      { name: 'هاينكن 0.33 لتر', price: '4.00 KM' },
      { name: 'أوجويسكو 0.33 لتر', price: '3.00 KM' },
      { name: 'ستاروبرامن 0.33 لتر', price: '3.00 KM' },
      { name: 'بافاريا بدون كحول 0.33 لتر', price: '3.00 KM' }
    ]
  },
  {
    name: 'المشروبات الروحية',
    isDrinkCategory: true,
    items: [
      { name: 'كونياك 0.03 لتر', price: '1.50 KM' },
      { name: 'لافوف 0.03 لتر', price: '1.50 KM' },
      { name: 'بلينكوفاتس 0.03 لتر', price: '1.50 KM' },
      { name: 'فودكا 0.03 لتر', price: '1.50 KM' },
      { name: 'ستوكس 0.03 لتر', price: '2.50 KM' },
      { name: 'روبين براندي 0.03 لتر', price: '1.50 KM' },
      { name: 'ياغرمايستر 0.03 لتر', price: '2.50 KM' },
      { name: 'راكيه منزلي - برقوق 0.03 لتر', price: '1.50 KM' },
      { name: 'راكيه منزلي - كمثرى 0.03 لتر', price: '2.50 KM' },
      { name: 'ويسكي 0.03 لتر', price: '3.00 KM' }
    ]
  },
  {
    name: 'النبيذ',
    isDrinkCategory: true,
    items: [
      { name: 'غراشيفينا (زجاجة) 0.20 لتر', price: '7.00 KM' },
      { name: 'دم الحصان (زجاجة) 0.20 لتر', price: '7.00 KM' },
      { name: 'فرانك برو كوردي (زجاجة) 0.20 لتر', price: '6.00 KM' },
      { name: 'غراشيفينا 1 لتر', price: '25.00 KM' },
      { name: 'دم الحصان 1 لتر', price: '25.00 KM' },
      { name: 'فرانك برو كوردي 0.75 لتر', price: '25.00 KM' },
      { name: 'بامبوس (نبيذ وكولا)', price: '3.50 KM' },
      { name: 'جمشت (نبيذ وماء غازي)', price: '3.00 KM' }
    ]
  }
    ],
    galleryData: [
  { id: 1, src: '/images/burek.jpg', alt: 'Burek' },
  { id: 2, src: '/images/burek_mali.jpg', alt: 'Burek mali' },
  { id: 3, src: '/images/jetrica.jpg', alt: 'Jetrica' },
  { id: 4, src: '/images/lignje.jpg', alt: 'Lignje' },
  { id: 5, src: '/images/pizza.jpg', alt: 'Pizza' },
  { id: 6, src: '/images/plata.jpg', alt: 'Plata' },
  { id: 7, src: '/images/pohovana.jpg', alt: 'Pohovana' },
  { id: 8, src: '/images/ustipci.jpg', alt: 'Uštipci' },
]
  },
};
