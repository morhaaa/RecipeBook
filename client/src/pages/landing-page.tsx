function LandingPage() {
  return (
    <main className="h-screen w-screen flex bg-slate-100 px-24">
      <div className="flex flex-col gap-y-2.5 justify-center items-start flex-1 h-full">
        <h3 className="font-bold text-3xl">
          Recipe<span className="text-primary-orange">Book</span>
        </h3>
        <h1 className="font-bold text-7xl">
          Everyone <br />
          Can Be a Chef
        </h1>
        <span className="bg-orange-300/40 rounded-md py-1 px-3 text-primary-orange font-medium">
          🔥 The largest site for food recipes
        </span>
        <p className="text-xl text-secondary pt-6">
          Discover our
          <span className="text-primary-orange font-medium">
            {" "}
            1000+ recipes{" "}
          </span>
          and start sharing your own delicious creations with us.
        </p>
        <button className="bg-btn-primary hover:bg-btn-primary-hovered w-60 py-3 rounded-md text-white font-bold mt-4">
          Explore
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={"/assets/placeholder.png"}
          alt={"Hero image"}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
export default LandingPage;
