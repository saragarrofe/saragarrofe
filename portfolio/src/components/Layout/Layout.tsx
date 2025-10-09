import NavbarComponent from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    {/* Fix el onContactClick */}
      <NavbarComponent onContactClick={() => { }} />
      <main className="p-4" style={{ marginLeft: 240 }}>
        <Outlet />
      </main>
    </>
  );
}
