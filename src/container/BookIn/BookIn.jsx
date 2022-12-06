import "./BookIn.scss";
import NavBar from "../../components/NavBar/NavBar"; "../../components/NavBar/NavBar";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
const BookIn = () =>{
    return(
        <>
        <NavBar/>
        <div className="bookIn">
      <h1 className="bookIn__header">Book In</h1>
      <div className="bookIn__input">
        <InputBox
          title="Full Name"
          inputType="text"
        />

        <InputBox
          title="Post Code"
          inputType="text"
        />
        <InputBox
          title="Address"
          inputType="text"
        />
        <InputBox
          title="City"
          inputType="text"
        />
      </div>

      <div className="bookIn__button">
        <Button
          buttonClass="largeButton"
          buttonText="Book"
        />
      </div>
    </div>
    </>
    );
}

export default BookIn;