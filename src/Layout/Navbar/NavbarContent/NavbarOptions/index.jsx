// Style
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
// App
const NavbarOptions = () => {
  return (
    <div className="navbar-options">
      <div className="navbar-option-menu">
        <span>
          <GiHotMeal style={{ fontSize: "18px" }} /> Menú
        </span>
      </div>
      <div className="navbar-option-container">
        <span>Pizza puntos</span>
      </div>
      <div className="navbar-option-my-asks">
        <span>
          <BsLayoutTextSidebarReverse /> Mis pedidos
        </span>
      </div>
      <div className="navbar-option-container">
        <span>Locales</span>
      </div>
      <div className="navbar-option-enter">
        <span>
          <GoPerson className="navbar-option-enter-icon" /> Ingresar
        </span>
      </div>
    </div>
  );
};

export default NavbarOptions;
