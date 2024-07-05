import { useQuery } from "@tanstack/react-query";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { getRecipeInfo } from "../api/recipes";
import { calculateAverageRating, resolvePath } from "../lib/utils";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  ArrowLeft,
  BarChart,
  ChefHat,
  CookingPot,
  HeartCrack,
  LoaderCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import Comments from "../components/comments";
import { getComments } from "../api/comments";
import { useMemo } from "react";

function RecipePage() {
  const { recipeId } = useParams();

  const {
    data: recipeData,
    isLoading: isLoadingRecipe,
    isError: isErrorRecipe,
    error: errorRecipe,
  } = useQuery<Recipe, Error>({
    queryKey: [`recipe_${recipeId}`],
    queryFn: () => getRecipeInfo(recipeId || ""),
    enabled: !!recipeId,
  });

  // Fetch comments data
  const {
    data: commentsData,
    isLoading: isLoadingComments,
    isError: isErrorComments,
    error: errorComments,
  } = useQuery<CommentRecipe[], Error>({
    queryKey: [`comments_${recipeId}`],
    queryFn: () => getComments(recipeId || ""),
    enabled: !!recipeId,
  });

  //Errors
  if (isErrorRecipe) {
    toast.error(
      `Something went wrong with the recipe: ${errorRecipe?.message}`
    );
  }

  if (isErrorComments) {
    toast.error(
      `Something went wrong with the comments: ${errorComments?.message}`
    );
  }

  const averageRating: number = useMemo(() => {
    if (commentsData && commentsData.length > 0) {
      const ratings = commentsData.map((comment) => Number(comment.rating));
      return calculateAverageRating(ratings);
    }
    return 0;
  }, [commentsData]);

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <ScrollRestoration />

      {isLoadingRecipe ? (
        <div className=" flex-1 flex items-center justify-center  min-h-[80vh] text-zinc-500">
          <LoaderCircle
            size={40}
            strokeWidth={3}
            className="animate-spin text-zinc-500"
          />
        </div>
      ) : recipeData ? (
        <div className="lg:px-20 px-10 md:px-14 pb-10 pt-20 flex flex-col gap-y-4">
          <Link to="/recipes">
            <button className="font-bold text-lg text-primary-orange flex items-center gap-x-0.5 hover:underline">
              <ArrowLeft size={16} strokeWidth={3} /> Back to List
            </button>
          </Link>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-10 flex-1">
            <img
              src={resolvePath(recipeData.image)}
              alt={recipeData.name}
              className=" w-full max-h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
            />
            <div className="flex-1 flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col border-b py-2">
                <h1 className="text-4xl font-bold mb-2">{recipeData.name}</h1>
                <div className="flex gap-x-4">
                  <div className="flex justify-center items-center gap-x-1.5">
                    <CookingPot size={16} strokeWidth={1.25} />
                    <span className="text-secondary">
                      {recipeData.cuisine.name}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <ChefHat size={16} strokeWidth={1.25} />
                    <span className="text-secondary">
                      {recipeData.diet.name}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <BarChart size={20} strokeWidth={1.25} />
                    <span className="text-secondary">
                      {recipeData.difficulty.name}
                    </span>
                  </div>
                  {averageRating === 0 ? (
                    <span className="text-secondary ml-1">
                      No rating available ★
                    </span>
                  ) : (
                    <p className="text-primary-orange text-lg font-medium">
                      {averageRating} ★
                    </p>
                  )}
                </div>
              </div>
              {/* Body */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                  <ul className="list-disc list-inside">
                    {recipeData.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-secondary">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {recipeData.instructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {isLoadingComments ? (
            <div className=" flex-1 flex items-center justify-center  min-h-[20vh] pt-20 text-zinc-500">
              <LoaderCircle
                size={40}
                strokeWidth={3}
                className="animate-spin text-zinc-500"
              />
            </div>
          ) : (
            <Comments comments={commentsData || []} />
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh] text-zinc-500">
          <HeartCrack size={40} strokeWidth={1.75} />
          <p className="font text-2xl">Recipe not found</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RecipePage;
