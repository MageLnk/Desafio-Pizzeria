// Style
import "./PizzaCard.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
// App
const PizzaCard = ({ pizzaInfo }) => {
  console.log("AFDS", pizzaInfo);
  return (
    <div className="card-pizza-container">
      <Link to={`/pizza/${pizzaInfo.id}`}>
        <Card hoverable cover={<img alt="pizza" src={pizzaInfo.img} />}>
          <h4>{pizzaInfo.name}</h4>
          <div className="card-pizza-options">
            <span>Algo</span>
            <span>Algo</span>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default PizzaCard;
