import React from "react";
import platfor from "../assets/platfor.png";
import plattre from "../assets/plattre.png";
import pltsto from "../assets/pltsto.png";
import smplatfor from "../assets/smplatfor.png";
import smplatto from "../assets/smplatto.png";
import smplattre from "../assets/smplattre.png";
import w_platform from "../assets/w_platform.png";
import w_plattwo from "../assets/w_plattwo.png";
import workstyl from "../style/Work.module.css";
import Comontittle from "./Comontittle";
import Wcard from "./Wcard";
export default function Work() {
  const wcardData = [
    {
      w_plattwo: w_plattwo,
      w_platform: w_platform,
      hto: "Innovative E-commerce Platform",
      hpp: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
      hfirt: "Category: Web Development.",
      hsecon: "January 2022",
      brkpont: "col-lg-6 col-md-6",
    },
    {
      w_plattwo: smplatto,
      w_platform: pltsto,
      hto: "Next-Generation Mobile App",
      hpp: "Our mobile app provides users with a seamless experience, connecting them to various services. With real-time notifications and an intuitive interface, it delivers unparalleled convenience.",
      hfirt: "Category: Mobile App Development.",
      hsecon: "February 2022",
      brkpont: "col-lg-6 col-md-6",
    },
    {
      w_plattwo: smplattre,
      w_platform: plattre,
      hto: "Custom CRM Solution",
      hpp: "We developed a tailored CRM solution to streamline business processes. Our solution enhances customer interaction and boosts operational efficiency for customer interaction and boosts operationalbusinesses of all sizes.",
      hfirt: "Category: CRM Solutions.",
      hsecon: "March 2022",
      brkpont: "col-lg-6 col-md-6",
    },
    {
      w_plattwo: smplatfor,
      w_platform: platfor,
      hto: "Cloud-based Collaboration Tool",
      hpp: "Our cloud-based collaboration tool enables teams to work together in real time, regardless of location. With built-in project management features and document sharing, it’s ideal for remote teams.",
      hfirt: "Category: Cloud Solutions.",
      hsecon: "April 2022",
      brkpont: "col-lg-6 col-md-6",
    },
  ];

  return (
    <div className={workstyl.works}>
      <div className="container cus_container">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Works
            </h1>
          }
          fulcont="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
        />
        <div class="row">
          {wcardData.map((card, index) => {
            // Render the card
            const wcardElement = (
              <div key={index} className={card.brkpont}>
                <Wcard
                  workstyl={workstyl}
                  w_plattwo={card.w_plattwo}
                  w_platform={card.w_platform}
                  hto={card.hto}
                  hpp={card.hpp}
                  hfirt={card.hfirt}
                  hsecon={card.hsecon}
                />
              </div>
            );

            return wcardElement;
          })}
        </div>
      </div>
    </div>
  );
}
