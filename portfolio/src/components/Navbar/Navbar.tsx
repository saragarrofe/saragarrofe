import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Nav.Link as={Link} to="/" className="px-2 py-2 w-100"><i className="bi bi-house me-2"></i>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-2 py-2 w-100"><i className="bi bi-person me-2"></i>About me</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="px-2 py-2 w-100"><i className="bi bi-code me-2"></i>Projects</Nav.Link>
            <Nav.Link onClick={onContactClick} className="px-2 py-2 w-100"><i className="bi bi-chat-dots me-2"></i>Contact</Nav.Link>
        </Nav>
    </Navbar>

    

  );
}
