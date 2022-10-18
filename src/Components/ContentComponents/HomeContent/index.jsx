import { useContext } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Components
import Banner from "./Banner";
import PizzaCard from "../../PizzaCard";
// Style
import "./HomeContent.css";
// App
const HomeContent = () => {
  const { data } = useContext(GeneralContext);

  const deployPizzas = (pizzasInfo) => {
    const allPizzas = pizzasInfo.map((info) => {
      return <PizzaCard key={info.id} pizzaInfo={info} />;
    });
    return allPizzas;
  };

  return (
    <div className="home-content-container">
      <Banner />

      <div className="card-pizzas-container">{data && deployPizzas(data)}</div>
    </div>
  );
};

export default HomeContent;
