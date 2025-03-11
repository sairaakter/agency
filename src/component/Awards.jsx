import React from "react";
import worldcup from "../assets/worldcup.png";
import awardstyl from "../style/Awards.module.css";
import Awordcard from "./Awordcard";
import Awordseecard from "./Awrdseecard";
import Comontittle from "./Comontittle";
export default function Awards() {
  return (
    <div className={awardstyl.award}>
      <div className="container cus_container">
        <Comontittle
          fulcont="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Awards &
              Recognitions
            </h1>
          }
        />
        <div className="row">
          <Awordcard
            awardstyl={awardstyl}
            worldcup={worldcup}
            date="October 2017"
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
            why="Innovative web design and development solutions."
          />
          <Awordcard
            awardstyl={awardstyl}
            worldcup={worldcup}
            date="October 2017"
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
            why="Innovative web design and development solutions."
          />
          <Awordcard
            awardstyl={awardstyl}
            worldcup={worldcup}
            date="October 2017"
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
            why="Innovative web design and development solutions."
          />
          <Awordcard
            awardstyl={awardstyl}
            worldcup={worldcup}
            date="October 2017"
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
            why="Innovative web design and development solutions."
          />
          <div className={awardstyl.see_award}>
            <h2>See This Pages</h2>
          </div>
          <Awordseecard
            awardstyl={awardstyl}
            worldcup={worldcup}
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
          />
          <Awordseecard
            awardstyl={awardstyl}
            worldcup={worldcup}
            htwo="Digital Excellence Award"
            hpp="Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality."
          />
        </div>
      </div>
    </div>
  );
}
