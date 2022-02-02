import Navbar from "./components/common/navbar/navbar.component";
import { Route, Routes } from "react-router";
import Error404 from "./pages/404/Error404.component";
import Landing from "./pages/landing/Landing.component";
import Recipe from "./pages/recipe/Recipe.component";
import Footer from "./components/common/footer/footer.component";
import AppContextProvider from "./utils/combineContextProviders";
import FootballFixturesProvider from "./contexts/footballFixturesContext";

function App() {
  return (
    <div>
      <AppContextProvider providers={[FootballFixturesProvider]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
