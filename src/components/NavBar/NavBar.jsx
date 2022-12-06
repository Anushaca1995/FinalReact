import "./NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = ({isFooter}) => {

    return(
        <ul className="navList">
            <Link className="navList__listItem--link" to={"*"}>Home</Link>
            <Link className="navList__listItem--link" to={"/bookin"}>Book An Appointment</Link>
            <Link className="navList__listItem--link" to={"/signup"}>Sign Up</Link>
            <Link className="navList__listItem--link" to={"/login"}>Login</Link>
            <Link className="navList__listItem--link" to={"/userlist"}>Users</Link>
        </ul>
     
    )
}

export default NavBar;