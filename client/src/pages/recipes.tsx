import CardRecipe from "../components/card-recipes";
import Header from "../components/header";

function Recipes() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-24 pt-4">
        <p className="text-3xl font-medium text-secondary border-b py-4">
          Discover Recipes
        </p>
        <div className="flex flex-wrap justify-center gap-10 p-4">
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
    </div>
  );
}

export default Recipes;
