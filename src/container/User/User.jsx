import UserData from "../../components/UserData/UserData";
import "./User.scss";

const User = ({ user }) => {
  const { full_Name, email_id, address, postcode, book_date } = user;
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
  return (
    <div className="user">
     <UserData full_Name={full_Name} email_id={email_id} address={address} postcode={postcode} date={date} time={time} />
    </div>
  );
};

export default User;
