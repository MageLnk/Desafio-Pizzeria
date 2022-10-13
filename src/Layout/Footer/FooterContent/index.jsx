// Style
import { BiRegistered } from "react-icons/bi";
import "./FooterContent.css";
// App
const FooterContent = () => {
  return (
    <div className="footer-content-container">
      <span>
        Página creada por poderoso MageLink a petición de D.Latam para una prueba de React. Manejo de Browser Router II
        y otras poderosas virtudes <BiRegistered />
      </span>
    </div>
  );
};

export default FooterContent;
