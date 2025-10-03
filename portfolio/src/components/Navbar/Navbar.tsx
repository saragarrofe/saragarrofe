import { Navbar as BootstrapNavbar, Nav, Container, Navbar } from 'react-bootstrap';

export default function NavbarComponent() {
    return (
        <>
            <Navbar data-bs-theme="light" className='mt-5'>
                <Container>
                    <Nav className="me-auto gap-3">
                        <Nav.Link href="#home" className='mx-3'>Home</Nav.Link>
                        <Nav.Link href="#about" className='mx-3'>About me</Nav.Link>
                        <Nav.Link href="#project" className='mx-3'>Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


