import { NavLink } from "react-router-dom";
// Component
import NavbarOptionLogin from "./NavbarOptionLogin";
// Style
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
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
      <NavbarOptionLogin />
    </div>
  );
};

export default NavbarOptions;
