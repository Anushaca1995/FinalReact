import MainHome from "../../components/MainHome/MainHome";
import NavBar from "../../components/NavBar/NavBar";



const Home = ({user}) => {
  return (
   <div>
    <header className="landing-header">
      <NavBar user={user}/>
      <MainHome user={user}/>
    </header>
   </div>
  );
};

export default Home;
