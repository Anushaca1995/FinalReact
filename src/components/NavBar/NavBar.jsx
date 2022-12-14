import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";



const NavBar = ({ user , setUser, isAdmin, setIsAdmin }) => {
    const navigate = useNavigate();

    const handleSignOut = () =>{
       setUser("");
       setIsAdmin(false);
       navigate("*");
    }

    return(
        <ul className="navList">
            <Link className="navList__listItem--logo" to={"*"}>London EPC</Link>
            <Link className="navList__listItem--link" to={"*"}>Home</Link>
            <Link className="navList__listItem--link" to={"/bookin"}>Book An Appointment</Link>
            {!user && <Link className="navList__listItem--link" to={"/signup"}>Sign Up</Link>}
            {!user && <Link className="navList__listItem--link" to={"/login"}>Login</Link>}
            {isAdmin && <Link className="navList__listItem--link" to={"/notifications"}>Notifications</Link>}
            {isAdmin && <Link className="navList__listItem--link" to={"/userlist"}>Users</Link>}
           {user && <Button className="navList__button"
            buttonClass="corneredButton"
            buttonText="Sign Out"
            handleClick={handleSignOut}/> }
          
        </ul>
     
    )
}

export default NavBar;