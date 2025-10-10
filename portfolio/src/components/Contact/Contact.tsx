import { Modal } from "react-bootstrap";
import "./Contact.css"

type ContactProps = {
    show: boolean;
    handleClose: () => void;
}

export default function Contact({ show, handleClose }: ContactProps) {
    return (
        <>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered">
                    <Modal.Header closeButton>
                        <Modal.Title>Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Email: s.garrofe@gmail.com</p>
                    </Modal.Body>
            </Modal>
        </>
    )
}