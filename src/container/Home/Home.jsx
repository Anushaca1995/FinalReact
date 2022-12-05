import MainHome from "../../components/MainHome/MainHome";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {
  return (
   <div>
    <header className="landing-header">
      <NavBar/>
      <MainHome/>
    </header>
   </div>
  );
};

export default Home;
