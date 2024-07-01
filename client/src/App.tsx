//import LandingPage from "./pages/landing-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recipes from "./pages/recipes";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Recipes />
      <Toaster />
    </QueryClientProvider>
  );
  // return <LandingPage />;
}

export default App;
