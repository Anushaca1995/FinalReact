import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";



const NavBar = ({ user , setUser }) => {
    const navigate = useNavigate();

    const handleSignOut = () =>{
       setUser(false);
       navigate("*");
    }

    return(
        <ul className="navList">
            <Link className="navList__listItem--link" to={"*"}>Home</Link>
            <Link className="navList__listItem--link" to={"/bookin"}>Book An Appointment</Link>
            {!user && <Link className="navList__listItem--link" to={"/signup"}>Sign Up</Link>}
            {!user && <Link className="navList__listItem--link" to={"/login"}>Login</Link>}
            {user && <Link className="navList__listItem--link" to={"/userlist"}>Users</Link>}
           {user && <Button className="navList__button"
            buttonClass="largeButton"
            buttonText="Sign Out"
            handleClick={handleSignOut}/> }
          
        </ul>
     
    )
}

export default NavBar;