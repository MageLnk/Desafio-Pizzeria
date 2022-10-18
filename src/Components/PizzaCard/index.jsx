// Style
import "./PizzaCard.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
// Utilities
import { mayusFirstLetter } from "../../utilities";
// App
const PizzaCard = ({ pizzaInfo }) => {
  console.log("AFDS", pizzaInfo);
  return (
    <div className="card-pizza-container">
      <Card hoverable style={{ cursor: "default" }} cover={<img alt="pizza" src={pizzaInfo.img} />}>
        <h4>
          {mayusFirstLetter(pizzaInfo.name)} | Precio: {pizzaInfo.price}
        </h4>
        <div className="card-pizza-options">
          <Link to={`/pizza/${pizzaInfo.id}`}>
            <button>Más info</button>
          </Link>

          <button>Pedir</button>
        </div>
      </Card>
    </div>
  );
};

export default PizzaCard;
