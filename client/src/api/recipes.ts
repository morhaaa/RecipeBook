import { resolvePath } from "../lib/utils";
import { axiosInstance } from "./axios";

export const getRecipes = async (
  filters: ActiveFilters = {}
): Promise<Recipe[]> => {
  const params = {
    params: {
      ...filters,
      _page: filters.page || 1,
      _expand: ["difficulty", "cuisine", "diet"],
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
