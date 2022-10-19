import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Style
import "./OrderButton.css";
// App
const OrderButton = ({ pizzaId }) => {
  const { handleCart } = useContext(GeneralContext);
  return (
    <button className="order-button" onClick={() => handleCart(pizzaId)}>
      Pedir
    </button>
  );
};

export default OrderButton;
