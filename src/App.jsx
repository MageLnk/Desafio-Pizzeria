import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext/Provider";
// Components
import { Home, Cart, Stores, PizzaDetail, PizzaPoints, Error404 } from "./pages";
// Layout
import { Navbar, Footer } from "./Layout";
// Style
import "./App.css";

const App = () => {
  return (
    <GeneralContext>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
            <Route path="/pizza-points" element={<PizzaPoints />} />

            <Route path="*" element={<Error404 />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </GeneralContext>
  );
};

export default App;
