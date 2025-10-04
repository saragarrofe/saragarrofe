import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
    return (
        <>
            <Navbar data-bs-theme="light" className='mt-5'>
                <Container>
                    <Nav className="me-auto gap-3">
                        <Nav.Link as={Link} to="/home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='mx-3'>About me</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className='mx-3'>Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


