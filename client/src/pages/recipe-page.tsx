import { useQuery } from "@tanstack/react-query";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { getRecipeInfo } from "../api/recipes";
import { resolvePath } from "../lib/utils";
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

function RecipePage() {
  const { recipeId } = useParams();

  // Fetch data
  const { data, isLoading, isError, error } = useQuery<Recipe, Error>({
    queryKey: [`recipe_${recipeId}`],
    queryFn: () => getRecipeInfo(recipeId || ""),
  });

  if (isError) {
    toast.error(`Something went wrong: ${error?.message}`);
  }

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <ScrollRestoration />

      {isLoading ? (
        <div className=" flex-1 flex items-center justify-center  min-h-[80vh] text-zinc-500">
          <LoaderCircle
            size={40}
            strokeWidth={3}
            className="animate-spin text-zinc-500"
          />
        </div>
      ) : data ? (
        <div className="lg:px-20 px-10 md:px-14 pb-10 pt-20 flex flex-col gap-y-4">
          <Link to="/recipes">
            <button className="font-bold text-lg text-primary-orange flex items-center gap-x-0.5 hover:underline">
              <ArrowLeft size={16} strokeWidth={3} /> Back to List
            </button>
          </Link>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-10 flex-1">
            <img
              src={resolvePath(data.image)}
              alt={data.name}
              className=" w-full max-h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
            />
            <div className="flex-1 flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col border-b py-2">
                <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
                <div className="flex gap-x-4">
                  <div className="flex justify-center items-center gap-x-1.5">
                    <CookingPot size={16} strokeWidth={1.25} />
                    <span className="text-secondary">{data.cuisine.name}</span>
                  </div>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <ChefHat size={16} strokeWidth={1.25} />
                    <span className="text-secondary">{data.diet.name}</span>
                  </div>
                  <div className="flex justify-center items-center gap-x-1.5">
                    <BarChart size={20} strokeWidth={1.25} />
                    <span className="text-secondary">
                      {data.difficulty.name}
                    </span>
                  </div>
                  <p className="text-primary-orange text-lg font-medium">5 ★</p>
                </div>
              </div>
              {/* Body */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                  <ul className="list-disc list-inside">
                    {data.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-secondary">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data.instructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Comments recipeId={recipeId || ""} />
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
