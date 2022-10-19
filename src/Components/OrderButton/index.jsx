import { useContext } from "react";
// Context
import GeneralContext from "../../Context/GeneralContext";
// Style
import "./OrderButton.css";
// App
const OrderButton = ({ pizzaId }) => {
  const { handleCart } = useContext(GeneralContext);
  return (
    <button className="order-button" onClick={() => handleCart(pizzaId, "Add", 1)}>
      Pedir
    </button>
  );
};

export default OrderButton;
