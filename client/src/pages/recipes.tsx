import { useQuery } from "@tanstack/react-query";
import CardRecipe from "../components/card-recipe";
import Filters from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import SearchBar from "../components/search-bar";
import { toast } from "react-hot-toast";
import { getRandomRating, resolvePath } from "../lib/utils";
import { getRecipes } from "../api/recipes";

function Recipes() {
  const { data, isError, error } = useQuery<Recipe[], Error>({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  if (isError) {
    toast.error(`Si è verificato un errore: ${error?.message}`);
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-20 py-20 flex flex-col gap-y-5">
        <SearchBar />
        <div className="flex justify-between w-full items-center">
          <Filters
            filters={["Vegetarian", "Gluten-free", "Mexican", "Healthy"]}
            activeFilters={["Mexican"]}
          />
          <button className="bg-btn-primary hover:bg-btn-primary-hovered px-6 py-1.5 rounded-md text-white font-medium">
            Upload your recipe
          </button>
        </div>

        <div className="flex-1 flex flex-wrap justify-center gap-10 pt-4">
          {data ? (
            data.map((recipe) => (
              <CardRecipe
                key={recipe.id}
                imageSrc={resolvePath(recipe.image)}
                title={recipe.name}
                description={recipe.instructions}
                difficulty={recipe.difficultyId}
                diet={recipe.dietId}
                cuisine={recipe.cuisineId}
                rating={getRandomRating()}
              />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Recipes;
