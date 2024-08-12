import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = 'nav'> 
            <div nav className = "nav-logo">Asif Siddiqui Real Estate Agent </div>
            <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className = 'nav-contact'> <Link to = "/contact"> Contact</Link></li>
            </ul>
        
        </div>
    )
}

export default Navbar