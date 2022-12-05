import "./SignIn.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

const SignIn = () =>{
    return (
        <div className="signUp">
          <div className="signUp__form">
            <div className="signUp__contents">
    
              <h1 className="signUp__header">Create an account</h1>
              <p className="signUp__headerText">
               Please Enter your emailid and set a password.
              </p>
    
              <div className="signUp__input">
                <InputBox
                  className="signUp__input signUp__input--email"
                  title="Email"
                  inputType="text"
                />
    
                <InputBox
                  className="signUp__input signUp__input--password"
                  title="Password"
                  inputType="text"
                />
    
                <InputBox
                  className="signUp__input signUp__input--confirmPassword"
                  title="Confirm Password"
                  inputType="text"
                />
              </div>
    
              <div className="signUp__text">
                <p className="signUp__text signUp__text--account">
                  Already have an account?
                </p>
                <Link className="signUp__text signUp__text--login">
                  Login
                </Link>
              </div>
    
              <div className="signUp__continue">
                <Button
                  buttonClass="largeButton"
                  buttonText="Continue  >"
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default SignIn;