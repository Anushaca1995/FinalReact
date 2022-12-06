import "./SignIn.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import NavBar from "../../components/NavBar/NavBar";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({saveUser}) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
    } else {
      setValidEmail(email);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePwd = (event) => {
    setPwd(event.target.value);
  };


  const handleLogin = async () => {
    validateEmail();
    if (validEmail != "") {
      let url = `http://localhost:8080/user/email/${validEmail}`;
      const response = await fetch(url);
      const greetingData = await response.json();
      if(pwd==greetingData.pwd){
        saveUser(true);
        alert("Login Successful");
        navigate("/userlist");
      } else{
        alert("Incorrect emailid or password");
      }
    }
  }

  return (
    <>
      <NavBar />
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