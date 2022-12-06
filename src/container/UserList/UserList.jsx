import "./UserList.scss";
import User from "../../components/User/User";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <>
      <div className="user-list">
        {users.map(user => (
          <Link to={"/userlist"}>
            <User user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserList;
