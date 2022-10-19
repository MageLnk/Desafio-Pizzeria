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
  const { cartTotal } = useContext(GeneralContext);

  const handleCartClic = (validationCart) => {
    if (!validationCart) {
      return;
    }
    navigate("/carrito");
  };

  return (
    <div
      className={!cartTotal ? "navbar-cart" : "navbar-cart-valid"}
      onClick={() => handleCartClic(cartTotal)}
    >
      <AiOutlineShoppingCart className="navbar-cart-icon" />
      {cartTotal === 0 ? <></> : <div className="navbar-number">{cartTotal}</div>}
    </div>
  );
};

export default NavbarCart;
