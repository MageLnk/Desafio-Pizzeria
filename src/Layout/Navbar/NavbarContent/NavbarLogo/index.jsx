import { Link } from "react-router-dom";
// Style
import Logo from "./Logo/Logo.png";
import "./NavbarLogo.css";
// App
const NavbarLogo = () => {
  return (
    <div className="navbar-logo">
      <Link to={`/`}>
        <img src={Logo} alt="Logo"></img>
      </Link>
    </div>
  );
};

export default NavbarLogo;
