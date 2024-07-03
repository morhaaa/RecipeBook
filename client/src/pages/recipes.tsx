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
import Pagination from "../components/pagination";
import CreateRecipe from "../components/new-recipe-modal";
import { ScrollRestoration } from "react-router-dom";

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

  //Next page
  const onNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      page: Number(prevFilters.page || 1) + 1,
    }));
  };

  //Previous page
  const onBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      page: Math.max(Number(prevFilters.page || 2) - 1, 1),
    }));
  };

  /*
  Explanation of the conditions in showPagination:
  1. data && data.length > 0:
    - Check 'data' Array

  2. !(data.length < 8 && activeFilters.page === 1):
    - Check if 'data.length' is less than 8 and we are on page 1.
    - If both conditions are true (less than 8 elements and on page 1), the pagination component won't be displayed.
  */
  const showPagination =
    data && data.length > 0 && !(data.length < 8 && activeFilters.page === 1);

  return (
    <main className="min-h-screen">
      <Header />
      <ScrollRestoration />
      <div className="px-20 pb-10 pt-24 flex flex-col gap-y-5">
        <SearchBar onSearch={onSearch} value={activeFilters.q || ""} />
        <div className="flex justify-between w-full items-start">
          <Filters toggleFilters={toggleFilter} activeFilters={activeFilters} />
          <CreateRecipe />
        </div>

        <div className="min-h-[50vh] flex-1 flex flex-wrap justify-center gap-y-10 gap-x-8 py-6 ">
          {isLoading ? (
            <div className=" flex-1 flex items-center justify-center">
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
                id={recipe.id}
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
            <div className="flex-1 flex items-center justify-center">
              <div className="text-zinc-400 text-xl font-medium">
                No recipe found
              </div>
            </div>
          )}
        </div>
        {showPagination && (
          <Pagination
            activePage={activeFilters.page}
            lastPage={data.length < 8}
            onNext={onNext}
            onBack={onBack}
          />
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Recipes;
