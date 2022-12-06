
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import SignUp from './container/SignUp/SignUp';
import SignIn from './container/SignIn/SignIn';
import BookIn from './container/BookIn/BookIn';
import User from './components/User/User';
import ViewUser from './container/ViewUser/ViewUser';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="*" element={<Home user={user}/>} />
        <Route path="/signup" element={<SignUp user={user}/>} />
        <Route path="/login" element={<SignIn saveUser={setUser}/>} />
        <Route path="/bookin" element={<BookIn user={user}/>} />
        <Route path="/userlist" element={<ViewUser user={user}/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
