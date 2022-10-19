import { useContext, useEffect } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import "./CartContent.css";
// Utility
import { mayusFirstLetter } from "../../../utilities";
// App
const CartConent = () => {
  const { cartData, data, handleCart, checkCart } = useContext(GeneralContext);
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
              disabled={element.quantity === 0 && true}
              className={element.quantity === 1 ? "cart-button-rest-danger" : "cart-button-rest"}
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

  useEffect(() => {
    checkCart(cartData);
    // eslint-disable-next-line
  }, []);
  // NOTA. Si le pongo el cartData al useEffect [], las validaciones del carrito quedan inútiles.
  // Además, al momento que llega a 0, desaparece. Si se la dejo así, entonces, la página queda como está ahora.
  // Básicamente, si vuelves a entrar al carrito, y dejaste alguna pizza en "0", desaparece

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
          <h2>
            Total: $ <b>{bigTotal}</b>
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartConent;
