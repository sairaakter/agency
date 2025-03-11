import exfive from "../assets/exfive.png";
import exfor from "../assets/exfor.png";
import expertis from "../assets/expertis.png";
import expthre from "../assets/exthre.png";
import expto from "../assets/exto.png";
import jornstyle from "../style/ProJourny.module.css";
import Comontittle from "./Comontittle";

import Jcard from "./Jcard";
export default function ProJourney() {
  const cardData = [
    {
      htwo: "Expertise That Drives Results",
      hpp: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      project_card: `${jornstyle.project_card}`,
      brkpont: "col-lg-4 col-md-6 startcon_ttls p-0",
      isbutton: false,
      expertis: expertis,
    },
    {
      htwo: "Innovative Solutions",
      hpp: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      project_card: `${jornstyle.project_card} ${jornstyle.inmdrn}`,
      brkpont: "col-lg-4 col-md-6 startcon_ttls p-0",
      isbutton: false,
      expertis: expto,
    },
    {
      htwo: "Data-Driven Strategies",
      hpp: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      project_card: `${jornstyle.project_card} ${jornstyle.bdrrightno}`,
      brkpont: "col-lg-4 col-md-6 startcon_ttls p-0",
      isbutton: false,
      expertis: expthre,
    },
    {
      htwo: "Customer-Centric Approach",
      hpp: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      project_card: `${jornstyle.project_card} ${jornstyle.inmdrn}`,
      brkpont: "col-lg-6 col-md-6 startcon_ttls p-0",
      isbutton: false,
      expertis: exfor,
    },
    {
      htwo: "Proven Track Record",
      hpp: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      project_card: `${jornstyle.project_card} ${jornstyle.bdrrightno} ${jornstyle.inmdrn}`,
      brkpont: "col-lg-6 col-md-12 startcon_ttls p-0",
      isbutton: false,
      expertis: exfive,
    },
  ];

  return (
    <div className={jornstyle.journy}>
      <div className="container cus_container">
        <Comontittle
          folh1={
            <h1>
              Reasons to Choose DigitX for
              <br />
              <span style={{ color: "#666666" }}>Your Digital Journey</span>
            </h1>
          }
          fulcont="Partnering with DigitX offers a multitude of advantages. Experience
            increased brand visibility, improved customer engagement, and higher
            ROI. Our tailored solutions are designed to meet your unique
            business needs, ensuring lasting success."
        />
        <div className="row">
          {cardData.map((card, index) => {
            // Render the card
            const cardElement = (
              <div key={index} className={card.brkpont}>
                <Jcard
                  project_card={card.project_card}
                  jornstyle={jornstyle}
                  htwo={card.htwo}
                  hpp={card.hpp}
                  expertis={card.expertis}
                  isbutton={card.isbutton}
                />
                {/* Render hr elements dynamically based on hrCount */}
              </div>
            );

            // Add a global <hr> after the first three cards (only once)
            if (index === 2) {
              return (
                <>
                  {cardElement}
                  <hr />
                  <hr className={jornstyle.sm_first} />
                </>
              );
            }
            if (index === 1) {
              return (
                <>
                  {cardElement}
                  <hr className={jornstyle.md_first} />
                  <hr className={jornstyle.sm_first} />
                </>
              );
            }
            if (index === 3) {
              return (
                <>
                  {cardElement}
                  <hr className={jornstyle.md_first} />
                  <hr className={jornstyle.sm_first} />
                </>
              );
            }
            if (index === 0) {
              return (
                <>
                  {cardElement}
                  <hr className={jornstyle.sm_first} />
                </>
              );
            }
            if (index === 4) {
              return <>{cardElement}</>;
            }

            return cardElement;
          })}
        </div>
      </div>
    </div>
  );
}
