
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import SignUp from './container/SignUp/SignUp';
import SignIn from './container/SignIn/SignIn';
import BookIn from './container/BookIn/BookIn';
import User from './container/User/User';
import ViewUser from './container/ViewUser/ViewUser';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Notifications from './container/Notifications/Notifications';

function App() {
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route path="*" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/><Home user={user} saveUser={setUser} isAdmin={isAdmin}/></>} />
        <Route path="/signup" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/><SignUp saveUser={setUser} setIsAdmin={setIsAdmin}/></>} />
        <Route path="/login" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/><SignIn saveUser={setUser} setIsAdmin={setIsAdmin}/></>} />
        <Route path="/bookin" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/><BookIn user={user}/></>} />
        <Route path="/userlist" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} /><ViewUser user={user} /></>} />
        <Route path="/user" element={<User/>} />
        <Route path="/notifications" element={<><NavBar user={user} setUser={setUser} isAdmin={isAdmin} setIsAdmin={setIsAdmin} /><h3>Appointments on today</h3><Notifications user={user}/></>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
