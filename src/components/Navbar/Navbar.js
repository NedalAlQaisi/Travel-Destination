import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="header_nav">
                <h1 id="nameApp">Travel Destination</h1>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default Navbar;