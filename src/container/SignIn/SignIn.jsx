import "./SignIn.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import NavBar from "../../components/NavBar/NavBar";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({saveUser, setIsAdmin}) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return false;
    } else {
      setValidEmail(email);
      return true;
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    setPwd(event.target.value);
  };


  const handleLogin = async () => {
    const flag=validateEmail();
    let data = "";
    if (flag) {
      try{
         data = login();
      } catch (err) {
        console.log('error', err);
      }
      
    }
  }

  const login = async () =>{
    try{
      let url = `http://localhost:8080/user/email/${email}`;
      const response = await fetch(url);
      const data = await response.json();
      if(pwd==data.pwd){
        saveUser(data.id);
        setIsAdmin(data.isAdmin);
        alert("Login Successful ");
        if(data.isAdmin){
          navigate("/userlist");
        } else{
          navigate("*");
        }
        
      } else{
        alert("Incorrect emailid or password");
      }
      return data.pwd;
    } catch(e){
      console.log('error', e);
    }
    
  }

  return (
    <>
      <div className="signIn">
        <h1 className="signIn__header">Login</h1>
        <div className="signIn__input">
          <InputBox
            className="signIn__input signIn__input--email"
            title="Email"
            inputType="text"
            onChange={handleEmail}
          />

          <InputBox
            className="signIn__input signIn__input--password"
            title="Password"
            inputType="text"
            onChange={handlePwd}
          />
        </div>

        <div className="signIn__button">
          <Button
            buttonClass="largeButton"
            buttonText="Login"
            handleClick={handleLogin}
          />
        </div>
      </div>
    </>
  );
}

export default SignIn;