import { resolvePath } from "../lib/utils";
import { axiosInstance } from "./axios";

const expand = ["difficulty", "cuisine", "diet"];

export const getRecipes = async (
  filters: ActiveFilters = {}
): Promise<Recipe[]> => {
  const params = {
    params: {
      ...filters,
      _page: filters.page || 1,
      _expand: expand,
      _limit: 8,
    },
  };
  const response = await axiosInstance.get("/recipes", params);
  if (!response.data) {
    return [];
  }

  const data: Recipe[] = response.data.map((item: Recipe) => {
    return {
      ...item,
      rating: "5",
      image: resolvePath(item.image),
    };
  });

  return data;
};

export const getCategory = async (type: string): Promise<Category[]> => {
  const response = await axiosInstance.get(`/${type}`);
  return response.data;
};

export const getRecipeInfo = async (recipeId: string): Promise<Recipe> => {
  const params = {
    _expand: expand,
  };

  const response = await axiosInstance.get(`/recipes/${recipeId}`, {
    params: params,
  });
  return response.data;
};

export const createRecipe = async (req: RecipeBody): Promise<Recipe> => {
  const body = {
    ...req,
    ingredients: req.ingredients.join(","),
  };
  const response = await axiosInstance.post(`/recipes`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
