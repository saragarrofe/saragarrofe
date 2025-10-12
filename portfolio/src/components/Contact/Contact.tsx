import { Button, Modal } from "react-bootstrap";
import "./Contact.css"

type ContactProps = {
    show: boolean;
    handleClose: () => void;
}

export default function Contact({ show, handleClose }: ContactProps) {
    return (
        <>
            <Modal show={show} onHide={handleClose} centered dialogClassName="contact-dialog" contentClassName="contact-content">
                <Modal.Header closeButton className="contact-header">
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body className="contact-body">
                    <div className="contact-row">
                        <div>
                            <p className="label">Email</p>
                            <p className="value">s.garrofe@gmail.com</p>
                        </div>
                        <div className="actions">
                             <Button variant="light" className="btn-ghost">
                                <i className="bi bi-clipboard me-2" /> Copy
                            </Button>
                        </div>
                    </div>
                     <hr className="divider" />
                    <div className="contact-row">
                        <div>
                            <p className="label">Phone</p>
                            <p className="value">+34 6606 85 777</p>
                        </div>
                        <div className="actions">
                             <Button variant="light" className="btn-ghost">
                                <i className="bi bi-whatsapp me-2" /> Send me a Whatsapp
                            </Button>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="contact-row">
                        <div>
                            <p className="label">Stay in touch</p>
                            <p className="muted">I’m active on both platforms</p>
                        </div>
                        <div className="social d-flex align-items-center gap-3">
                            <a href="https://linkedin.com/in/sara-garrofe-artigas" className="d-inline-flex align-items-center">
                                <i className="bi bi-linkedin me-2" /> LinkedIn
                            </a>
                            <a href="https://github.com/saragarrofe" className="d-inline-flex align-items-center">
                                <i className="bi bi-github me-2" /> GitHub
                            </a>
                        </div>
                    </div>
                    
                </Modal.Body>
            </Modal>
        </>
    )
}