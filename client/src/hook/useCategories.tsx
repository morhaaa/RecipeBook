import { useQueries } from "@tanstack/react-query";
import { getCategory } from "../api/recipes";
import toast from "react-hot-toast";

const categories = ["cuisines", "difficulties", "diets"];

const useCategories = () => {
  const results = useQueries({
    queries: categories.map((category) => ({
      queryKey: [category],
      queryFn: () => getCategory(category),
    })),
  });

  const isLoading = results.some((result) => result.isLoading);
  const error = results.find((result) => result.isError)?.error;

  if (error) {
    toast.error("Something went wrong");
  }

  const data = results.map((result) => result.data || []);
  const cuisines = data[0];
  const difficulties = data[1];
  const diets = data[2];

  const getCategoryLabel = (categoryType: string, id: string | number) => {
    let category;
    switch (categoryType) {
      case "cuisineId":
        category = cuisines.find((item) => item.id === id);
        break;
      case "difficultyId":
        category = difficulties.find((item) => item.id === id);
        break;
      case "dietId":
        category = diets.find((item) => item.id === id);
        break;
      default:
        return undefined;
    }
    return category ? category.name : undefined;
  };

  return {
    cuisines,
    difficulties,
    diets,
    isLoading,
    getCategoryLabel,
  };
};

export default useCategories;
