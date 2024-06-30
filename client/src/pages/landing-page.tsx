function LandingPage() {
  return (
    <main className="h-screen w-screen flex">
      <div className="flex-1">
        <h3>RecipeBook</h3>
        <h1>Everyone Can Be a Chef</h1>
        <p>
          Discover our 1000+ recipes and start sharing your own delicious
          creations with us.
        </p>
        <button>Explore</button>
      </div>
      <div className="flex-1">
        <img
          src={"/assets/placeholder.png"}
          alt={"Hero image"}
          height={100}
          width={100}
        />
      </div>
    </main>
  );
}
export default LandingPage;
