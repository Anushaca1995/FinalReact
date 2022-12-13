import "./UserData.scss";

const UserData = ({email_id, address, postcode, date, time}) =>{
    return (
        <div className="user">
          <h3 className="user__title">{email_id}</h3>
          <p className="user__text">Address: {address}</p>
          <p className="user__text">PostCode: {postcode}</p>
          <p className="user__text">Booking Date: {date}</p>
          <p className="user__text">Booking Time: {time}</p>
        </div>
      );
}
export default UserData;