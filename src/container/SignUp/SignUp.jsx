import "./SignUp.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <h1 className="signUp__header">Sign Up</h1>
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

      <div className="signUp__button">
        <Button
          buttonClass="largeButton"
          buttonText="Sign Up"
        />
      </div>
    </div>
  );
}

export default SignUp;