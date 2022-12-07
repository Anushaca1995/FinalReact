import MainHome from "../../components/MainHome/MainHome";
import NavBar from "../../components/NavBar/NavBar";



const Home = ({user, saveUser}) => {
  return (
   <div>
    <header className="landing-header">
      <NavBar user={user} setUser={saveUser}/>
      <MainHome user={user}/>
    </header>
   </div>
  );
};

export default Home;
