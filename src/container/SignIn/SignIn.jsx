import "./SignIn.scss";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";

const SignIn = () => {
  return (
    <div className="signIn">
      <h1 className="signIn__header">Login</h1>
      <div className="signIn__input">
        <InputBox
          className="signIn__input signIn__input--email"
          title="Email"
          inputType="text"
        />

        <InputBox
          className="signIn__input signIn__input--password"
          title="Password"
          inputType="text"
        />
      </div>

      <div className="signIn__button">
        <Button
          buttonClass="largeButton"
          buttonText="Login"
        />
      </div>
    </div>
  );
}

export default SignIn;