import React from "react";
import cod_icon from "../assets/cod_icon.png";
import dmarket from "../assets/dmarket.png";
import mobilap from "../assets/mobilap.png";
import webdes from "../assets/webdes.png";
import servstyl from "../style/Servic.module.css";

import Comontittle from "./Comontittle";
import Scard from "./Scard";
export default function Servic() {
  const scardData = [
    {
      htwo: "Web Development",
      hppp: "Unlock Your Online Potential with DigitX's Web Development services. We specialize in building dynamic and responsive websites that cater to your business needs, enhancing user experience on all devices.",
      cod_icon: cod_icon,
      brkpont: "col-lg-6 col-md-6",
    },
    {
      htwo: "Mobile App Development",
      hppp: "Transform your ideas into reality with DigitX’s mobile app development services. We create custom mobile apps that are user-friendly, fast, and optimized for both Android and iOS platforms.",
      cod_icon: mobilap,
      brkpont: "col-lg-6 col-md-6",
    },
    {
      htwo: "Digital Marketing",
      hppp: "Boost your brand’s online visibility with DigitX’s digital marketing services. We help you reach the right audience through targeted campaigns across social media, search engines, and more.",
      cod_icon: webdes,
      brkpont: "col-lg-6 col-md-6",
    },
    {
      htwo: "SEO Services",
      hppp: "Improve your website's search engine ranking with DigitX’s SEO services. Our expert team uses proven strategies to enhance your site’s visibility and drive more organic traffic  strategies to enhance your site’s visibilit.",
      cod_icon: dmarket,
      brkpont: "col-lg-6 col-md-6",
    },
  ];
  return (
    <div className={servstyl.servic}>
      <div className="container cus_container">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Services
            </h1>
          }
          fulcont="Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."
        />
        <div className="row">
          {scardData.map((card, index) => {
            // Render the card
            const scardElement = (
              <div key={index} className={card.brkpont}>
                <Scard
                  servstyl={servstyl}
                  htwo={card.htwo}
                  hppp={card.hppp}
                  cod_icon={card.cod_icon}
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
