import "./User.scss";

const User = ({ user }) => {
  const { email_id, address, postcode, book_date } = user;
  let time, date="";
  console.log("book "+book_date);
  if (book_date != null) {
    const datetime = new Date(book_date);
    const day = datetime.getDate();
    const month = datetime.getMonth() + 1; //month: 0-11
    const year = datetime.getFullYear();
    date = year + "-" + day + "-" + month + " ";
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    time = hours + ":" + minutes;
  }
  return (
    <div className="user">
      <h3 className="user__title">{email_id}</h3>
      <p className="user__text">Address: {address}</p>
      <p className="user__text">PostCode: {postcode}</p>
      <p className="user__text">Booking Date: {date}</p>
      <p className="user__text">Booking Time: {time}</p>
    </div>
  );
};

export default User;
