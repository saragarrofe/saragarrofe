import { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../Contact/Contact";

export default function Layout() {

  const [showModal, setShowModal] = useState(false);

  const onContactClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <>
      <NavbarComponent onContactClick={onContactClick} />
      <main className="p-4" style={{ marginLeft: 240 }}>
        <Outlet />
      </main>
      <Contact show={showModal} handleClose={handleClose} />
    </>
  );
}
