
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import SignUp from './container/SignUp/SignUp';
import SignIn from './container/SignIn/SignIn';
import BookIn from './container/BookIn/BookIn';
import User from './components/User/User';
import UserList from './container/UserList/UserList';
import ViewUser from './container/ViewUser/ViewUser';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/bookin" element={<BookIn/>} />
        <Route path="/userlist" element={<ViewUser/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
