import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Context
import GeneralContext from "../../../../Context/GeneralContext";
// Style
import "./NavbarCart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// App
const NavbarCart = () => {
  const navigate = useNavigate();
  const { cart } = useContext(GeneralContext);

  const handleCartClic = (validationCart) => {
    if (!validationCart) {
      return;
    }
    navigate("/carrito");
  };

  return (
    <div
      className={!cart ? "navbar-cart" : "navbar-cart-valid"}
      onClick={() => handleCartClic(cart)}
    >
      <AiOutlineShoppingCart className="navbar-cart-icon" />
      {cart && <div className="navbar-number">{cart}</div>}
    </div>
  );
};

export default NavbarCart;
