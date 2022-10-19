import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// dummyData
import dummyData from "../../dummyData/pizzas.json";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [cart, setCart] = useState("");

  const handleCart = (pizzaId) => {
    console.log(pizzaId);
    setCart(1);
  };

  useEffect(() => {
    if (dummyData) {
      setData(dummyData);
    }
  }, []);

  return (
    <GeneralContext.Provider value={{ data, cart, handleCart }}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

/*

Necesito guardar el ID en un arreglo, acá mismo.

Ese arreglo, necesita guardar el precio y la cantidad de pizzas, además de los adicionales.



*/
