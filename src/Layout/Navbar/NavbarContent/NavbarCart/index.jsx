// Style
import "./NavbarCart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// App
const NavbarCart = () => {
  return (
    <div className="navbar-cart">
      <AiOutlineShoppingCart className="navbar-cart-icon" />
    </div>
  );
};

export default NavbarCart;
