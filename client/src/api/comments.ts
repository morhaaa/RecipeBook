import { axiosInstance } from "./axios";

export const getComments = async (
  recipeId: string
): Promise<CommentRecipe[]> => {
  const response = await axiosInstance.get(`/recipes/${recipeId}/comments`);
  return response.data;
};

export const postComment = async (
  req: CommentBody,
  recipeId: string
): Promise<Recipe> => {
  const response = await axiosInstance.post(
    `/recipes/${recipeId}/comments`,
    req
  );
  return response.data;
};
