import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Components
import { Home, Stores, Error404, PizzaPoints } from "./pages";
// Layout
import { Navbar, Footer } from "./Layout";
// Style
import "./App.css";

const App = () => {
  return (
    <GeneralContext>
      <div className="app-container">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route parth="/pizza-points" element={<PizzaPoints />} />
            <Route parth="/stores" element={<Stores />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </GeneralContext>
  );
};

export default App;
