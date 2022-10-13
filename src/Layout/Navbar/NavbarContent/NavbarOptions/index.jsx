import { NavLink } from "react-router-dom";
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
          <NavLink to={`/`}>
            <GiHotMeal style={{ fontSize: "18px" }} /> Menú
          </NavLink>
        </span>
      </div>
      <div className="navbar-option-container">
        <NavLink to={`/pizza-points`} className={({ isActive }) => (isActive ? "navbar-option-active" : "")}>
          <span>Pizza puntos</span>
        </NavLink>
      </div>
      <div className="navbar-option-my-asks">
        <span>
          <BsLayoutTextSidebarReverse /> Mis pedidos
        </span>
      </div>
      <div className="navbar-option-container">
        <NavLink to={`/stores`} className={({ isActive }) => (isActive ? "navbar-option-active" : "")}>
          <span>Locales</span>
        </NavLink>
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
