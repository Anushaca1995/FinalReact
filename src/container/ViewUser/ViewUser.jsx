import "./ViewUser.scss";
import UserList from "../UserList/UserList";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

const ViewUser = () =>{
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let url = "http://localhost:8080/users";
    const response = await fetch(url);
    const greetingData = await response.json();
    console.log(greetingData);
    setUsers(greetingData);
  };

 

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
    <NavBar/>
      <section className="view-users">
        <h2 className="view-users__title">All The Users ...</h2>
        <UserList users={users} />
      </section>
    </>
  );
}

export default ViewUser;