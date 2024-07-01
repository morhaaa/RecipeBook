import CardRecipe from "../components/card-recipe";
import Filters from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import SearchBar from "../components/search-bar";

function Recipes() {
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
          {Array.from(Array(8)).map((_, i) => (
            <CardRecipe
              key={i}
              imageSrc={"assets/poke_placeholder.png"}
              title={"Poke"}
              description={
                "Cook chicken with onion and garlic. Add curry powder and coconut milk. Simmer until done"
              }
              rating="4"
              diet="Vegeterian"
              cuisine="Italian"
              difficulty="Easy"
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Recipes;
