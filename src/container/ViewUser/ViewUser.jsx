import "./ViewUser.scss";
import UserList from "../UserList/UserList";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

const ViewUser = ({user}) =>{
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let url = "http://localhost:8080/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

 

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <section className="view">
        {user&&<h2 className="view-users__title">User List</h2>}
       {user?<UserList users={users} />:<h3 className="view__text">Please login first</h3>} 
      </section>
    </>
  );
}

export default ViewUser;