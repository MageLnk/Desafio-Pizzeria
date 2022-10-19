import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// dummyData
import dummyData from "../../dummyData/pizzas.json";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [cartData, setCartData] = useState([]);

  const addPizzaData = (IdPizza, price, additions, quantity, totalData) => {
    let newArrayPizzaData = totalData;
    let newObjectPizzaData = {};
    newObjectPizzaData = {
      id: IdPizza,
      price: price,
      additions: additions,
      quantity: quantity,
    };
    newArrayPizzaData.push(newObjectPizzaData);
    setCartData([...newArrayPizzaData]);
  };

  const checkCart = (dataToCheck) => {
    let newArrayPizzaData = dataToCheck;
    newArrayPizzaData.forEach((element, i) => {
      if (element.quantity === 0) {
        newArrayPizzaData.splice(i, 1);
        setCartData([...newArrayPizzaData]);
      }
    });
  };

  const handleCart = (pizzaId, action, quantity) => {
    const FindMatchPizza = data.filter((result) => result.id === pizzaId);

    if (cartData.length !== 0) {
      const findMatch = cartData.findIndex((object) => object.id === pizzaId);
      if (findMatch === -1) {
        // -1 = NO hay match, entonces, agrega uno nuevo
        setCartTotal(cartTotal + quantity);
        addPizzaData(pizzaId, FindMatchPizza[0].price, undefined, quantity, cartData);
      }
      if (findMatch !== -1) {
        // Si es distinto de -1 entonces HAY match, entonces, hay que modificar el quantity acorde al quantity
        let newArrayPizzaData = cartData;
        if (action === "Add") {
          setCartTotal(cartTotal + quantity);
          newArrayPizzaData.forEach((element) => {
            if (element.id === pizzaId) {
              element.quantity = element.quantity + quantity;
            }
          });
          setCartData([...newArrayPizzaData]);
        }
        if (action === "Subtract") {
          if (cartTotal === 0) {
            return;
          }
          // La validación de arriba es para que el carrito no sea negativo
          newArrayPizzaData.forEach((element) => {
            if (element.id === pizzaId) {
              if (element.quantity === 0) {
                return;
              }
              // La validación de arriba es para que el carrito no sea negativo
              setCartTotal(cartTotal - quantity);
              element.quantity = element.quantity - quantity;
            }
          });
          setCartData([...newArrayPizzaData]);
        }
      }
    }
    if (cartData.length === 0) {
      setCartTotal(quantity);
      addPizzaData(pizzaId, FindMatchPizza[0].price, undefined, quantity, cartData);
    }
  };
  useEffect(() => {
    if (dummyData) {
      setData(dummyData);
    }
  }, []);

  return (
    <GeneralContext.Provider value={{ data, cartTotal, cartData, handleCart, checkCart }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

/*

Necesito guardar el ID en un arreglo, acá mismo.

Son dos arreglos, cart y cartData, necesita guardar el precio y la cantidad de pizzas, además de los adicionales.

NOTA: Cart tiene que manejar solo el total del arreglo para mostrar

*/
