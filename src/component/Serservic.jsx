import React from "react";
import serv_first from "../assets/serv_first.png";
import serv_subfirst from "../assets/serv_subfirst.png";
import ssseond from "../assets/ssseond.png";
import sssfor from "../assets/sssfor.png";
import ssthird from "../assets/ssthird.png";
import subthre from "../assets/subthre.png";
import subto from "../assets/subto.png";
import suvfor from "../assets/suvfor.png";

import sersevcstyl from "../style/Serservic.module.css";
import Comontittle from "./Comontittle";
import Subcard from "./Subcard";

export default function Serservic() {
  const services = [
    {
      id: 1,
      htwo: "Web Development",
      hppp: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
      price: "$1,500",
      serv_first: serv_first,
      serv_subfirst: serv_subfirst,
    },
    {
      id: 2,
      htwo: "Mobile App Development",
      hppp: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
      price: "$2,000",
      serv_first: ssseond,
      serv_subfirst: subto,
    },
    {
      id: 3,
      htwo: "Digital Marketing",
      hppp: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
      price: "$1,200",
      serv_first: ssthird,
      serv_subfirst: subthre,
    },
    {
      id: 4,
      htwo: "UI/UX Design",
      hppp: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
      price: "$1,800",
      serv_first: sssfor,
      serv_subfirst: suvfor,
    },
  ];

  return (
    <div className={sersevcstyl.servic}>
      <div className="container cus_container">
        <Comontittle
          fulcont="Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Services
            </h1>
          }
        />
        <div className="row">
          {services.map((card, index) => {
            // Render the card
            const scardElement = (
              <div key={index} className="col-lg-6 col-md-6">
                <Subcard
                  servstyl={sersevcstyl}
                  htwo={card.htwo}
                  hppp={card.hppp}
                  serv_first={card.serv_first}
                  serv_subfirst={card.serv_subfirst}
                  price={card.price}
                />
                {/* Render hr elements dynamically based on hrCount */}
              </div>
            );

            return scardElement;
          })}
        </div>
      </div>
    </div>
  );
}
