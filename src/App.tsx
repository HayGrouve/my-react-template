import Navbar from "./components/common/navbar/navbar.component";
import { Route, Routes } from "react-router";
import Error404 from "./pages/404/error404.component";
import Landing from "./pages/landing/landing.component";
import Recipe from "./pages/recipe/recipe.component";
import Footer from "./components/common/footer/footer.component";
import AppContextProvider from "./utils/combineContextProviders";
import TestProvider from "./contexts/testContext";

function App() {
  return (
    <div className="main">
      <AppContextProvider providers={[TestProvider]}>
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
