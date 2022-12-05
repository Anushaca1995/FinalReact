import "./NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = ({isFooter}) => {

    return(
        <ul className="navList">
            <li className="navList__listItem"><a  href="" className={isFooter ? "navList__anchor--footer-selected" : "navList__anchor--header-selected" }>Home</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">About</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Contact Us</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Book An Appointment</a></li>
            <Link className="navList__listItem--signup" to={"/signup"}>Sign Up</Link>
        </ul>
     
    )
}

export default NavBar;