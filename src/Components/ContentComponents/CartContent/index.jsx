import { useContext } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import "./CartContent.css";
// App
const CartConent = () => {
  const { cartData } = useContext(GeneralContext);

  console.log("CartData", cartData);
  return (
    <div className="cart-content-container">
      {!cartData ? (
        <div>
          <h1 className="cart-title">OPS... No ha agregado nada a su carrito todavía</h1>
        </div>
      ) : (
        <div>
          <h1 className="cart-title">Las pizzas que ha ordenado:</h1>
        </div>
      )}
    </div>
  );
};

export default CartConent;
