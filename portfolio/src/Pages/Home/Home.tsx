import avatar from '../../assets/SaraGarrofeArtigas.png'
import './Home.css'

export default function Home() {

    return (
        <>
            <div className="avatar">
            <img 
            src={avatar}  
            // src="https://placehold.co/20x20"  
            alt="Sara Garrofé Artigas"
            className=""
            />    
            </div>
            <h1>Hello, I'm Sara</h1> 
        </>
    )
}