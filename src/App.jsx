
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import SignUp from './container/SignUp/SignUp';
import SignIn from './container/SignIn/SignIn';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
