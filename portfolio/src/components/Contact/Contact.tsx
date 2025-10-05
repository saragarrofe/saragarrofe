import { Button, Modal } from "react-bootstrap";

type ContactProps = {
    show: boolean;
    handleClose: () => void;
}

export default function Contact({ show, handleClose }: ContactProps) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Email: s.garrofe@gmail.com</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}