// Style
import "./OrderButton.css";
// App
const OrderButton = ({ pizzaId }) => {
  return (
    <button className="order-button" onClick={(e) => console.log("Ola", pizzaId)}>
      Pedir
    </button>
  );
};

export default OrderButton;
