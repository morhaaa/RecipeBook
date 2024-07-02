import { axiosInstance } from "./axios";

export const getComments = async (recipeId: string): Promise<Recipe> => {
  const response = await axiosInstance.get(`/recipes/${recipeId}/comments`);
  return response.data;
};
