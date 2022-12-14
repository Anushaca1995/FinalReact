import "./SignUp.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({  saveUser, setIsAdmin}) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
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

  const handleConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleCode = (event) => {
    setCode(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };


  const handleSignIn = async () => {
    const flag = validateEmail();
    if (flag){
      if (pwd.length > 5) {
        if (name==""){
          alert("Name should not be empty");
        }
        else if (address == "" || code == "") {
          alert("Address and post code should not be empty");
        } 
        else if (validEmail != "" && pwd == confirm) {
          checkUser();
        } else{
          alert("Confirm password field should match to password field");
        }
      } else {
        alert("Please enter atleast 6 characters on password field");
      }
    } 

  }

  const checkUser = async () =>{
    try{
      let url = `http://localhost:8080/user/email/${email}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(typeof data.id);
      if(typeof data.id == "number"){
        alert("exist");
      }
      return data.id;
    } catch(e){
      console.log('error', e);
      signUp();
      navigate("*");
    }
    
  }

  const signUp = async () =>{
    try{
      const url = "http://localhost:8080/user";
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_id: email,
            pwd: pwd,
            address: address,
            postcode: code,
            full_Name: name
          })
        });
        const json = await res.json();
        alert("SignUp Successful");
        saveUser(true);
        setIsAdmin(false);
        if(data.isAdmin){
          navigate("/userlist");
        } else{
          navigate("*");
        }

    } catch(e){
      console.log('error', e);
    }
    
  }

  return (
    <>
      <div className="signUp">
        <h1 className="signUp__header">Sign Up</h1>
        <div className="signUp__input">
          <InputBox
            className="signUp__input signUp__input"
            title="Email"
            inputType="text"
            onChange={handleEmail}
          />

          <InputBox
            className="signUp__input signUp__input"
            title="Full Name"
            inputType="text"
            onChange={handleName}
          />

          <InputBox
            className="signUp__input signUp__input"
            title="Address"
            inputType="text"
            onChange={handleAddress}
          />

          <InputBox
            className="signUp__input signUp__input"
            title="Post Code"
            inputType="text"
            onChange={handleCode}
          />

          <InputBox
            className="signUp__input signUp__input"
            title="Password"
            inputType="text"
            onChange={handlePwd}
          />

          <InputBox
            className="signUp__input signUp__input"
            title="Confirm Password"
            inputType="text"
            onChange={handleConfirm}
          />
        </div>

        <div className="signUp__button">
          <Button
            buttonClass="largeButton"
            buttonText="Sign Up"
            handleClick={handleSignIn}
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;