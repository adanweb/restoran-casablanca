
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
  isDrinkCategory?: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface MealRecommendation {
  name: string;
  meal: string;
}
