type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
  rating: string;
  cuisine: Category;
  diet: Category;
  difficulty: Category;
};

type ActiveFilters = {
  cuisineId?: string;
  difficultyId?: string;
  dietId?: string;
  q?: string;
  page?: number | string;
};

type FilterKey = keyof ActiveFilters;

type Category = {
  id: string;
  name: string;
};

type Cuisine = Category;
type Diet = Category;
type Difficulty = Category;
