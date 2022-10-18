import { useState } from "react";
// Style
import { GoPerson } from "react-icons/go";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Input, Modal } from "antd";
import "./NavbarOptionLogin.css";
// App
const NavbarOptionLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="navbar-option-enter" style={{ cursor: "pointer" }}>
      <span onClick={showModal}>
        <GoPerson className="navbar-option-enter-icon" /> Ingresar
      </span>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className="navbar-option-enter-form">
          <span>Email</span>
          <Input prefix={<AiOutlineMail />} />
          <span>Contraseña</span>
          <Input prefix={<AiOutlineUser />} />
        </form>
        <h4 style={{ marginTop: "2rem" }}>
          NOTA: Este login es una simulación de cómo se vería el Login
        </h4>
      </Modal>
    </div>
  );
};

export default NavbarOptionLogin;
