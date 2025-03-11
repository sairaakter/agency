import React from "react";
import jhon from "../assets/jhon.png";
import temeght from "../assets/temeght.png";
import temfiv from "../assets/temfiv.png";
import temfor from "../assets/temfor.png";
import temsev from "../assets/temsev.png";
import temsix from "../assets/temsix.png";
import temthr from "../assets/temthr.png";
import temto from "../assets/temto.png";
import aastyl from "../style/Aabout.module.css";

import Acard from "./Acard";
import Comontittle from "./Comontittle";
export default function Aabout() {
  const teamMembers = [
    {
      jhon: temeght,
      name: "John Smith",
      intro: "Co-Founder & CEO",
    },
    { jhon: jhon, name: "Jane Doe", intro: "Head of Design" },
    { jhon: temto, name: "Michael Johnson", intro: "Project Manager" },
    { jhon: temthr, name: "Emily Davis", intro: "Lead Web Developer" },
    { jhon: temfor, name: "David Wilson", intro: "Senior Developer" },
    { jhon: temfiv, name: "Sarah Brown", intro: "Project Manager" },
    { jhon: temsix, name: "Chris Taylor", intro: "Product Manager" },
    { jhon: temsev, name: "Anna White", intro: "Customer Success Manager" },
  ];

  return (
    <div className={aastyl.about}>
      <div className="container cus_container">
        <Comontittle
          fulcont="Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success."
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Team Members
            </h1>
          }
        />
        <div className="row">
          {teamMembers.map((card, index) => {
            const teamcard = (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <Acard
                  aastyl={aastyl}
                  jhon={card.jhon}
                  name={card.name}
                  intro={card.intro}
                />
              </div>
            );
            return teamcard;
          })}
          {/* <Acard
            aastyl={aastyl}
            jhon={jhon}
            name="John Smith"
            intro="Co-Founder & CEO"
          />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} />
          <Acard aastyl={aastyl} jhon={jhon} /> */}
        </div>
      </div>
    </div>
  );
}
