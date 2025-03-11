import React, { useState } from "react";
import web_icon from "../assets/web_icon.png";
import web_iconfor from "../assets/web_iconfor.png";
import web_iconto from "../assets/web_iconto.png";
import web_icontre from "../assets/web_icontre.png";
import sersidstyl from "../style/Sersidebar.module.css";
import Comontittle from "./Comontittle";
import Sidemain from "./Sidemain";
import Sidemenu from "./Sidemenu";
import Webcontent from "./Webcontent";

export default function Sersidebar() {
  // 🔹 Sidebar er option gulo
  const options = [
    { id: "web", name: "Web Design", img: web_icon },
    { id: "app", name: "Web Development", img: web_iconto },
    { id: "marketing", name: "Mobile App Development", img: web_icontre },
    { id: "design", name: "Digital Marketing", img: web_iconfor },
  ];

  const [selectedOption, setSelectedOption] = useState("web");
  // 🔹 Sidebar click korle ei function cholbe
  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  // 🔹 Different content for each option
  const renderContent = () => {
    switch (selectedOption) {
      case "web":
        return (
          <Webcontent
            sersidstyl={sersidstyl}
            hthre="Web Design"
            hpp={
              <p>
                Web Design is the art and science of creating visually appealing
                and user-friendly websites that reflect your brand identity and
                resonate with your target audience. At DigitX, our web design
                process involves a careful blend of creativity, user experience
                (UX) design, and cutting-edge technologies. We take the time to
                understand your business goals, target market, and unique
                selling points to create a website that not only looks great but
                also drives results.
              </p>
            }
          />
        );
      case "app":
        return (
          <Webcontent
            sersidstyl={sersidstyl}
            hthre="Web Development"
            hpp={
              <p>
                Web Development is the understand your business goals, target
                market, and unique selling points to create a website that not
                only looks great but also drives results.
              </p>
            }
          />
        );
      case "marketing":
        return (
          <Webcontent
            sersidstyl={sersidstyl}
            hthre="Mobile App Development"
            hpp={
              <p>
                Mobile App Development science of creating visually appealing
                and user-friendly websites that reflect your brand identity and
                resonate with yourchnologies. We take the time to understand
                your business goals, target market, and unique selling points to
                create a website that not only looks great but also drives
                results.
              </p>
            }
          />
        );
      case "design":
        return (
          <Webcontent
            sersidstyl={sersidstyl}
            hthre="Digital Marketing"
            hpp={
              <p>
                Digital Marketing is the art and science of creating visually
                appealing and user-friendly websites that reflect your brand
                identity and resonate with your target audience. At DigitX, our
                web design understand your business goals, target market, and
                unique selling points to create a website that not only looks
                great but also drives results.
              </p>
            }
          />
        );
      default:
        return <h2 style={{ color: "#fff" }}>Select an option</h2>;
    }
  };

  return (
    <div className={sersidstyl.ser_sidebar}>
      <div className="container cus_container">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Categories of</span> Services
            </h1>
          }
          fulcont="At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing."
        />
        <div className="row">
          <Sidemenu
            sersidstyl={sersidstyl}
            options={options}
            handleSelect={handleSelect}
            selectedOption={selectedOption}
          />
          <Sidemain sersidstyl={sersidstyl} renderContent={renderContent} />
        </div>
      </div>
    </div>
  );
}
