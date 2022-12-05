import "./NavBar.scss";

const NavBar = ({isFooter}) => {

    return(
        <ul className="navList">
            <li className="navList__listItem"><a  href="" className={isFooter ? "navList__anchor--footer-selected" : "navList__anchor--header-selected" }>Home</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Energy Performace Certification</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">About</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Contact Us</a></li>
            <li className="navList__listItem"><a href="" className="navList__anchor navList__anchor--unselected">Book An Appointment</a></li>
        </ul>
     
    )
}

export default NavBar;