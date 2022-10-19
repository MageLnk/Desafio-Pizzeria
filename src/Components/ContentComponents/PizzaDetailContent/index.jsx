import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Componets
import OrderButton from "../../OrderButton";
// Style
import "./PizzaDetailContent.css";
// Utilities
import { mayusFirstLetter } from "../../../utilities";
// App
const PizzaDetailContent = () => {
  const { data } = useContext(GeneralContext);
  const [pizzaInfo, setPizzaInfo] = useState("");
  const { id } = useParams();

  const deployIngredients = (info) => {
    const ingredients = info.ingredients.map((results) => `${mayusFirstLetter(results)} `);
    return ingredients;
  };

  useEffect(() => {
    if (id && data) {
      const matchPizza = data.filter((result) => result.id === id && result);
      setPizzaInfo(matchPizza[0]);
    }
    // Lo ideal sería hacer un fetch para traer la data específica, pero como para este ejercicio
    // no tenemos una API a la cual llamar para traer la data específia para esta pizza.
    // Me tomaré la licencia de traer toda la data.
  }, [id, data]);

  return (
    <div className="pizza-detail-content-container">
      {pizzaInfo ? (
        <div className="pizza-detail-content">
          <img alt={pizzaInfo.name} src={pizzaInfo.img} />
          <h1>
            {mayusFirstLetter(pizzaInfo.name)} | Precio: {pizzaInfo.price}
          </h1>
          <span>{pizzaInfo.desc}</span>
          <span>Ingredientes: {deployIngredients(pizzaInfo)}</span>
          <OrderButton pizzaId={pizzaInfo.id} />
        </div>
      ) : (
        <div>
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default PizzaDetailContent;
