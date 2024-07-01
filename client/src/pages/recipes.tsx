import CardRecipe from "../components/card-recipe";
import Filters from "../components/filters";
import Header from "../components/header";
import SearchBar from "../components/search-bar";

function Recipes() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-24 pt-10 flex flex-col gap-y-4">
        <SearchBar />
        <Filters
          filters={["Vegetarian", "Gluten-free", "Mexican", "Healthy"]}
          activeFilters={["Mexican"]}
        />
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
    </main>
  );
}

export default Recipes;
