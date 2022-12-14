import { useState, useEffect } from "react";
import "./Notifications.scss";
import UserList from "../UserList/UserList";

const Notifications = ({user}) =>{
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let url = "http://localhost:8080/user/book";
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      };
    
     useEffect(() => {
        getUsers();
      }, []);

      return (<>
      <section className="view">
       {user?<UserList users={users} />:<h3 className="view__text">Sorry Admin View Only</h3>} 
      </section>
      </>);
    
};

export default Notifications;