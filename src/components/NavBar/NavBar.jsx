import "./NavBar.scss";
import { Link } from "react-router-dom";
const NavBar = ({user}) => {

    return(
        <ul className="navList">
            <Link className="navList__listItem--link" to={"*"}>Home</Link>
            <Link className="navList__listItem--link" to={"/bookin"}>Book An Appointment</Link>
            {!user && <Link className="navList__listItem--link" to={"/signup"}>Sign Up</Link>}
            {!user && <Link className="navList__listItem--link" to={"/login"}>Login</Link>}
            {user && <Link className="navList__listItem--link" to={"/userlist"}>Users</Link>}
        </ul>
     
    )
}

export default NavBar;