import "./User.scss";

const User = ({ user }) => {
  const { email_id, address, postcode } = user;

  return (
    <div className="user">
      <h3 className="user__title">{email_id}</h3>
      <p className="user__text">Address: {address}</p>
      <p className="user__text">PostCode: {postcode}</p>
    </div>
  );
};

export default User;
