import { useQuery } from "@tanstack/react-query";
import CardRecipe from "../components/card-recipe";
import Filters from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import SearchBar from "../components/search-bar";
import { toast } from "react-hot-toast";
import { getRecipes } from "../api/recipes";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

function Recipes() {
  //State for tracking all filters
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    page: "1",
  });

  //Fetch data
  const { data, isLoading, isError, error } = useQuery<Recipe[], Error>({
    queryKey: ["recipes", activeFilters],
    queryFn: () => getRecipes(activeFilters),
  });

  if (isError) {
    toast.error(`Something went wrong: ${error?.message}`);
  }

  //Handle filters
  const toggleFilter = (key: FilterKey, value?: string) => {
    setActiveFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!value) {
        delete newFilters[key];
      } else {
        newFilters[key] = value;
      }
      return { ...newFilters, page: 1 };
    });
  };

  //Search recipe
  const onSearch = (text: string) => {
    toggleFilter("q", text.length > 0 ? text : undefined);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-20 py-10 flex flex-col gap-y-5">
        <SearchBar onSearch={onSearch} value={activeFilters.q || ""} />
        <div className="flex justify-between w-full items-start">
          <Filters toggleFilters={toggleFilter} activeFilters={activeFilters} />
          <button className="bg-btn-primary hover:bg-btn-primary-hovered px-6 py-1.5 rounded-md text-white font-medium">
            Upload your recipe
          </button>
        </div>

        <div className="flex-1 flex flex-wrap justify-center gap-y-10 gap-x-8 pt-4 ">
          {isLoading ? (
            <div className="min-h-[50vh] flex-1 flex items-center justify-center">
              <LoaderCircle
                size={40}
                strokeWidth={3}
                className="animate-spin text-zinc-500"
              />
            </div>
          ) : data && data.length > 0 ? (
            data.map((recipe) => (
              <CardRecipe
                key={recipe.id}
                imageSrc={recipe.image}
                title={recipe.name}
                description={recipe.instructions}
                difficulty={recipe.difficulty.name}
                diet={recipe.diet.name}
                cuisine={recipe.cuisine.name}
                rating={recipe.rating}
              />
            ))
          ) : (
            <div className="min-h-[50vh] flex-1 flex items-center justify-center">
              <div className="text-zinc-400 text-xl font-medium">
                No recipe found
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Recipes;
