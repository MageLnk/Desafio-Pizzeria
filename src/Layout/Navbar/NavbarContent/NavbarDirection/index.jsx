// Style
import "./NavbarDirection.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
// App
const NavbarDirection = () => {
  return (
    <div className="navbar-direction-container">
      <div className="navbar-direction-group">
        <span className="navbar-direction-delivery">
          <MdOutlineDeliveryDining /> Delivery
        </span>
        <span className="navbar-direction-direction">
          Ingrese dirección <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
};

export default NavbarDirection;
