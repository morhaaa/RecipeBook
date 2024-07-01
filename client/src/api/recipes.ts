import { axiosInstance } from "./axios";

export const getRecipes = async () => {
  const response = await axiosInstance.get("/recipes");
  return response.data;
};
