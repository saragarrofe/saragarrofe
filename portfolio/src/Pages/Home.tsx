import { useState } from "react";
import NavbarComponent from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";


export default function Home() {

    const [showModal, setShowModal] = useState(false);

    const handleOnContactClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
    return (
        <>
            <h1>Hello, I'm Sara</h1>
            <NavbarComponent  onContactClick={handleOnContactClick}/>
            <Contact show={showModal} handleClose={handleClose} />    
        </>
    )
}