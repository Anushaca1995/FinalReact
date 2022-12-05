
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import SignUp from './container/SignUp/SignUp';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
