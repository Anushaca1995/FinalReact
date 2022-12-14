import { useState, useEffect} from "react";
import UserData from "../../components/UserData/UserData";
import "./User.scss";
import Button from "../../components/Button/Button";

const User = ({ user }) => {
  const { full_Name, id, email_id, pwd, address, postcode, book_date, isComplete, isAdmin } = user;
  const [complete, setComplete] = useState(isComplete);
  const [check, setCheck] = useState(false);
  let time, date = "";
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let today = day + '-' + month + '-' + year;
  if (book_date != null) {
    const datetime = new Date(book_date);
    const day = datetime.getDate();
    const month = datetime.getMonth() + 1;
    const year = datetime.getFullYear();
    date = day + "-" + month + "-" + year;
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    time = hours + ":" + minutes;
  }
  const handleComplete = () => {
      setComplete(!complete);
      setCheck(true);
  }

  const handleUpdate = async () => {
    if (check){
      try {
        const urlN = `http://localhost:8080/user/${id}`;
        const result = await fetch(urlN, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_id: email_id,
            pwd: pwd,
            full_Name: full_Name,
            isAdmin: isAdmin,
            isComplete: complete,
            address: address,
            postcode: postcode,
            book_date: book_date
          })
        });
  
        if (result.ok) {
          console.log("complete "+complete);
          if(complete){
            console.log("Completed");
          } else{
            console.log("Successfully Open");
          }
        } 
      } catch (e) {
        console.log('error', e);
      }
      setCheck(false);
    }
   

  };

 useEffect(() => {
  handleUpdate();
  }, [check]);

  return (
    <div className="user">
      <UserData full_Name={full_Name} email_id={email_id} address={address} postcode={postcode} date={date} time={time} status={complete ? "Complete" : "Open"} />
      <div className="user__button">
        { <Button buttonClass="corneredButton"
          buttonText={complete?"Open":"Complete"}
          handleClick={handleComplete}
        />}
      </div>
    </div>
  );
};

export default User;
