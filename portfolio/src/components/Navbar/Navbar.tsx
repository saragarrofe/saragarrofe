import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

type NavbarComponentProps = {
    onContactClick: () => void;
}

export default function NavbarComponent({ onContactClick }:  NavbarComponentProps) {
    return (
    <Navbar
    data-bs-theme="light"
    className="bg-body-tertiary position-fixed top-0 start-0 vh-100 p-3 border-end d-flex flex-column justify-content-center align-items-start sidebar"
    >
        <Nav className="flex-column gap-3 text-start px-3">
            <NavLink to="/" end className={({isActive}) => `nav-link d-block px-2 py-2 w-100 ${isActive ? "active" : ""}`}><i className="bi bi-house me-2"></i>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link d-block px-2 py-2 w-100 ${isActive ? "active" : ""}`}><i className="bi bi-person me-2"></i>About me</NavLink>
            <NavLink to="/projects" className={({isActive}) => `nav-link d-block px-2 py-2 w-100 ${isActive ? "active" : ""}`}><i className="bi bi-code me-2"></i>Projects</NavLink>
            <button type='button' onClick={onContactClick} className="nav-link d-block text-start px-2 py-2 w-100 btn btn-link"><i className="bi bi-chat-dots me-2"></i>Contact</button>
        </Nav>
    </Navbar>

    

  );
}
