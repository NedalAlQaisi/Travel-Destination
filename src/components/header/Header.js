import './Header.css'
import Nav from '../Navbar/Navbar';

function Header() {

    return (
        <>
            <header>
                <Nav />

                {/* <img src='' id='header-logo' /> */}
                {/* <nav className="header-nav">
                </nav> */}
                <h1 id="nameApp">Travel Destination</h1>
            </header>
        </>
    )
}

export default Header;