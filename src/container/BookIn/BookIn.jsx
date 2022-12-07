import "./BookIn.scss";
import NavBar from "../../components/NavBar/NavBar"; "../../components/NavBar/NavBar";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import { useState } from "react";
const BookIn = ({ user }) => {
  const [book, setBook] = useState("");
  const handleDate = (event) => {
    setBook(event.target.value);
  }
  const handleBook = () => {
    console.log(book + " "+user);
    handleUpdate();
  }
  const handleUpdate = async () => {
    try {
      let url = `http://localhost:8080/user/${user}`;
      const response = await fetch(url);
      const data = await response.json();
      const id = data.id;
      const email = data.email_id;
      const pwd = data.pwd;
      const address = data.address;
      const code = data.postcode;
      console.log(id+" "+" "+email+" "+pwd+" "+address+" "+code);
      const urlN = `http://localhost:8080/user/${user}`;
      console.log(urlN);
      const result = await fetch(urlN, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_id: email,
          pwd: pwd,
          address: address,
          postcode: code,
          book_date: book
        })
      });

      if (result.ok) {
        alert("Booking Successful");
        
      } 
      return data.id;
    } catch (e) {
      console.log('error', e);
    }

  };
  return (
    <>
      <NavBar user={user} />
      <div className="bookIn">
        <h1 className="bookIn__header">Book In</h1>
        <div className="bookIn__input">

          {user ? <div><InputBox
            title="Appointment "
            inputType="datetime-local"
            onChange={handleDate}
          /><div className="bookIn__button">
              <Button
                buttonClass="largeButton"
                buttonText="Book"
                handleClick={handleBook}
              />
            </div></div> : <p>Please Login or Sign Up before book an appointment</p>}


        </div>

      </div>
    </>
  );
}

export default BookIn;