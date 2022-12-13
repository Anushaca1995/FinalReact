import "./ViewUser.scss";
import UserList from "../UserList/UserList";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";


const ViewUser = ({user}) =>{
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
    console.log("search "+searchTerm);
  }
  const getUsers = async (searchTerm) => {
    let url = "http://localhost:8080/users";
    if(searchTerm!= ''){
      url = `http://localhost:8080/user/search/${searchTerm}`;
    }
    console.log(url+ " "+searchTerm);
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

 

  useEffect(() => {
    console.log("In use effet "+searchTerm);
    getUsers(searchTerm);
  }, [searchTerm]);

  


  return (
    <>
      <section className="view">
      <SearchBar handleInput={handleInput} searchTerm={searchTerm}/>
       {user?<UserList users={users} />:<h3 className="view__text">Please login first</h3>} 
      </section>
    </>
  );
}

export default ViewUser;