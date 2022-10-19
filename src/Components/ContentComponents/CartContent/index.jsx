import { useContext, useState } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import "./CartContent.css";
// Utility
import { mayusFirstLetter } from "../../../utilities";
// App
const CartConent = () => {
  const { cartData, data, handleCart } = useContext(GeneralContext);
  let bigTotal = 0;
  // Esto es buena práctica??

  const pizzaTotal = (quantity, price) => {
    return quantity * price;
  };

  const deployCartData = (dataToDeploy) => {
    const deployingData = dataToDeploy.map((element) => {
      bigTotal = bigTotal + pizzaTotal(element.quantity, element.price);
      const filterData = data.filter((filterElement) => filterElement.id === element.id);
      return (
        <div key={element.id} className="cart-total-order">
          <div>
            <img alt={filterData[0].name} src={filterData[0].img}></img>
            <span>{mayusFirstLetter(filterData[0].name)}</span>
          </div>

          <div className="cart-total-info-container">
            <span>$ {pizzaTotal(element.quantity, element.price)}</span>
            <button
              className="cart-button-rest"
              onClick={() => handleCart(element.id, "Subtract", 1)}
            >
              -
            </button>
            <span>{element.quantity}</span>
            <button className="cart-button-sum" onClick={() => handleCart(element.id, "Add", 1)}>
              +
            </button>
          </div>
        </div>
      );
    });
    return deployingData;
  };

  return (
    <div className="cart-content-container">
      {!cartData ? (
        <div>
          <h1 className="cart-title">OPS... No ha agregado nada a su carrito todavía</h1>
        </div>
      ) : (
        <div>
          <h1 className="cart-title">Las pizzas que ha ordenado:</h1>
          {deployCartData(cartData)}
          <h2>Total: $ {bigTotal}</h2>
        </div>
      )}
    </div>
  );
};

export default CartConent;
