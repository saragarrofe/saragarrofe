import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type NavbarComponentProps = {
    onContactClick: () => void;
}

export default function NavbarComponent({ onContactClick }:  NavbarComponentProps) {
    return (
    <Navbar
      data-bs-theme="light"
      className="bg-body-tertiary position-fixed top-0 start-0 vh-100 p-3 border-end"
      style={{ width: 240 }}
    >
      <Nav className="flex-column gap-1">
        <Nav.Link as={Link} to="/" className="px-2 py-2">Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className="px-2 py-2">About me</Nav.Link>
        <Nav.Link as={Link} to="/projects" className="px-2 py-2">Projects</Nav.Link>
        <Nav.Link onClick={onContactClick} className="px-2 py-2">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}
