import "./MainHome.scss";
import Button from "../../components/Button/Button";
import epcImage from "../../assets/images/R.jpg";

const MainHome = () => {
return(
    <div className="home">
        <img src={epcImage}></img>
    <p className="home__text">
      Some people might consider Energy Performance Certificates as a grudge compliance measure and expense that could not come at a worse time. At RMS Sustainability Services we see things differently – an Energy Performance Certificate (EPC) is a valuable decision-making tool for property owners considering investment in projects that will reduce the energy consumption of buildings and property portfolios.

      An EPC provides property owners with insight into the energy saving potential of a building. Utility costs are increasingly a driver of operating costs; initiatives that reduce the energy consumption of a building will have a direct impact on operating costs. Energy Performance Certificates will help to identify those buildings where the greatest potential for energy cost savings exists and funds can be directed to harvest these opportunities.
      </p>
      <Button buttonText={"Book An Appointment"} buttonClass="largeButton"/>
    </div>
)

}

export default MainHome;