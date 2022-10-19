import { useContext } from "react";
// Context
import GeneralContext from "../../../../Context/GeneralContext";
// Style
import "./NavbarCart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// App
const NavbarCart = () => {
  const { cart } = useContext(GeneralContext);

  return (
    <div className="navbar-cart">
      <AiOutlineShoppingCart className="navbar-cart-icon" />
      {cart && <div className="navbar-number">{cart}</div>}
    </div>
  );
};

export default NavbarCart;
