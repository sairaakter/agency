import React from "react";
import achive from "../assets/achive.png";
import achivstyl from "../style/Achivment.module.css";
import Achivcard from "./Achivcard";
import Comontittle from "./Comontittle";
export default function Achivment() {
  return (
    <div className={achivstyl.Achievemant}>
      <div className="container cus_container">
        <Comontittle
          fulcont="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Achievements
            </h1>
          }
        />
        <div className={`row ${achivstyl.achiv_styl}`}>
          <div
            className={`col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 ${achivstyl.widthff}`}
          >
            <img src={achive} className="w-100" />
          </div>
          <div
            className={`col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9 ${achivstyl.subro}`}
          >
            <Achivcard
              achivstyl={achivstyl}
              htwo="001"
              hthre="Foundation of DigitX"
              hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
              date="October 2017"
            />
            <Achivcard
              achivstyl={achivstyl}
              htwo="002"
              hthre="Foundation of DigitX"
              hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
              date="October 2017"
            />
            <Achivcard
              achivstyl={achivstyl}
              htwo="003"
              hthre="Foundation of DigitX"
              hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
              date="October 2017"
            />
            <Achivcard
              achivstyl={achivstyl}
              htwo="004"
              hthre="Foundation of DigitX"
              hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
              date="October 2017"
            />
            <Achivcard
              achivstyl={achivstyl}
              htwo="005"
              hthre="Foundation of DigitX"
              hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
              date="October 2017"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
