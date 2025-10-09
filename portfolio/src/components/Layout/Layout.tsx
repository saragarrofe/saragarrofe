import { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../Contact/Contact";

export default function Layout() {

  const [modal, setModal] = useState(true);

  const onContactClick = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
  }

  return (
    <>
      <NavbarComponent onContactClick={onContactClick} />
      <main className="p-4" style={{ marginLeft: 240 }}>
        <Outlet />
      </main>
      <Contact show={modal} handleClose={handleClose} />
    </>
  );
}
