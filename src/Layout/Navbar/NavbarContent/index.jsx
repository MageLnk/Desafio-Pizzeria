// Components
import NavbarCart from "./NavbarCart";
import NavbarLogo from "./NavbarLogo";
import NavbarOptions from "./NavbarOptions";
import NavbarDirection from "./NavbarDirection";
// Style
import "./NavbarContent.css";

// App
const NavbarContent = () => {
  return (
    <div className="navbar-content-container">
      <NavbarLogo />
      <NavbarOptions />
      <NavbarDirection />
      <NavbarCart />
    </div>
  );
};

export default NavbarContent;
