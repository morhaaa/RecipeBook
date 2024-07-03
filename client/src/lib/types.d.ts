type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
  rating: string;
  cuisine: Category;
  diet: Category;
  difficulty: Category;
  ingredients?: string[];
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

type CommentRecipe = {
  id: string;
  comment: string;
  date: Date;
  rating: string;
};

type CommentBody = {
  comment: string;
  rating: number;
  date: Date;
};

type RecipeBody = {
  name: string;
  instruction: string;
  ingredients: string[];
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: File;
};
