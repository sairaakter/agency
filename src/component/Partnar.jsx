import React from "react";
import partnarto from "../assets/partnarto.png";
import patfiv from "../assets/patfiv.png";
import patfor from "../assets/patfor.png";
import patsix from "../assets/patsix.png";
import pattre from "../assets/pattre.png";
import platfirst from "../assets/platfirst.png";
import sm_plat from "../assets/sm_plat.png";
import smpatfirs from "../assets/smpatfirs.png";
import smpatfiv from "../assets/smpatfiv.png";
import smpatsix from "../assets/smpatsix.png";
import smpathr from "../assets/smpatthr.png";
import smpatto from "../assets/smpatto.png";
import Parstyl from "../style/Partnar.module.css";
import Comontittle from "./Comontittle";
import Pcard from "./Pcard";
pattre, patsix, patfiv, patfor;
export default function Partnar() {
  const pcardData = [
    {
      parttwo: platfirst,
      sm_plat: smpatfirs,
      hto: "ABC Tech Solutions",
      hpp: "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.",
    },
    {
      sm_plat: sm_plat,
      parttwo: partnarto,
      hto: "GreenWave Enterprises",
      hpp: "An eco-friendly startup that partnered with DigitX to create a modern web presence and highlight their sustainable initiatives.",
    },
    {
      sm_plat: smpatto,
      parttwo: pattre,
      hto: "SuperMart Online",
      hpp: "A major e-commerce brand that relied on DigitX to revamp their website for a  smoother shopping experience.",
    },
    {
      sm_plat: smpathr,

      parttwo: patfor,
      hto: "SkyNet Solutions",
      hpp: "A cybersecurity firm that worked with DigitX to build a robust and secure digital platform for firm a robust and secure their clients.",
    },
    {
      sm_plat: smpatfiv,
      parttwo: patfiv,
      hto: "EduPro Academy",
      hpp: "An online education provider that collaborated with DigitX to enhance their learning management system and user experience.",
    },
    {
      sm_plat: smpatsix,
      parttwo: patsix,
      hto: "HealthFirst Clinics",
      hpp: "A network of medical centers that digitized their appointment booking system with the help of DigitX.",
    },
  ];

  return (
    <div className={Parstyl.partnars}>
      <div className="container-fluid cus_container">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Partners and Clients
            </h1>
          }
          fulcont="Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."
        />
        <div class="row">
          {/* <Pcard
            Parstyl={Parstyl}
            sm_plat={sm_plat}
            parttwo={parttwo}
            hto="ABC Tech Solutions"
            hpp="A leading technology firm that trusted DigitX to develop their
            responsive website, showcasing their cutting-edge products and
            services."
          /> */}
          {pcardData.map((card, index) => {
            // Render the card
            const pcardElement = (
              <div key={index} className="col-lg-4 col-md-6">
                <Pcard
                  Parstyl={Parstyl}
                  sm_plat={card.sm_plat}
                  parttwo={card.parttwo}
                  hto={card.hto}
                  hpp={card.hpp}
                />
              </div>
            );

            return pcardElement;
          })}
        </div>
      </div>
    </div>
  );
}
