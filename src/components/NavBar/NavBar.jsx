import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";



const NavBar = ({ user , setUser }) => {
    const navigate = useNavigate();

    const handleSignOut = () =>{
       setUser("");
       navigate("*");
    }

    return(
        <ul className="navList">
            <Link className="navList__listItem--link" to={"*"}>Home</Link>
            <Link className="navList__listItem--link" to={"/bookin"}>Book An Appointment</Link>
            <Link className="navList__listItem--link" to={"/signup"}>Sign Up</Link>
            <Link className="navList__listItem--link" to={"/login"}>Login</Link>
            <Link className="navList__listItem--link" to={"/userlist"}>Users</Link>
           {user && <Button className="navList__button"
            buttonClass="corneredButton"
            buttonText="Sign Out"
            handleClick={handleSignOut}/> }
          
        </ul>
     
    )
}

export default NavBar;