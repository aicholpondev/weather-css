import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";
import { HiClock } from "react-icons/hi2";


import cloudy from "../src/assets/img/cloudy.png";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import fri from "../src/assets/img/fri.svg";
import sat from "../src/assets/img/sat.svg";
import sun from "../src/assets/img/sun.svg";
import mon from "../src/assets/img/mon.svg";
import tues from "../src/assets/img/tues.svg";
import one from "../src/assets/img/30.svg";
import two from "../src/assets/img/26.svg";
import three from "../src/assets/img/22.svg";
import four from "../src/assets/img/16.svg";



export default function App(){
  return(
      <div className="container">

         <div className="header">
             <a href="#">             <HiOutlineLocationMarker /></a>
             <h1>New York</h1>
             <a href="#">             <GoChevronDown /></a>
         </div>

          <div className="cloudy">
             <center>
                 <h2>Cloudy</h2>
                 <img src={cloudy} alt="img"/>
                 <h3>26℃</h3>
                 <h4>Sunday | 12 Dec 2023</h4>
             </center>

          </div>

        <center>
            <div className="week">
                <div className="name-week">
                    <GoChevronLeft className="icons" />
                    <h6>FRI</h6>
                    <h6>SAT</h6>
                    <h6>SUN</h6>
                    <h6>MON</h6>
                    <h6>TUES</h6>
                    <GoChevronRight className="icons"/>

                </div>
                <div className="weather-icon">
                    <img src={fri} alt="img"/>
                    <img src={sat} alt="img"/>
                    <img src={sun} alt="img"/>
                    <img src={mon} alt="img"/>
                    <img src={tues} alt="img"/>


                </div>

            </div>

          <div className="general">
              <div className="hour">
                  <HiClock />
                  <h6>24-hour forecast</h6>

              </div>
              <div className="block">
                  <div className="one">
                      <h5>30°</h5>
                      <br/>
                      <br/>
                      <img src={one} alt="img"/>
                      <h4>11.7km/h
                      <br/>
                      Now</h4>
                  </div>
                  <div className="two">
                      <h5>26°</h5>
                      <br/>
                      <br/>
                      <img src={two} alt="img"/>
                      <h4>9.3km/h
                      <br/>
                      22:00</h4>
                  </div>
                  <div className="three">
                      <h5>22°</h5>
                      <br/>
                      <br/>
                      <img src={three} alt="img"/>
                      <h4>12km/h
                      <br/>
                      00:00</h4>
                  </div>
                  <div className="four">
                      <h5>16°</h5>
                      <br/>
                      <br/>
                      <img src={four} alt="img"/>
                      <h4>15km/h
                      <br/>
                      2:00</h4>
                  </div>
              </div>

                  <button className="btn">5-day forecast</button>


          </div>
        </center>





      </div>
  )
}