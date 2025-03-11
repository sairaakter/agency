import React from "react";
import p_shoecasf from "../assets/p_shoecasf.png";
import revoulation from "../assets/revoulation.png";
import pshostyl from "../style/Pshowcase.module.css";

import Comontittle from "./Comontittle";
import Psfirscard from "./Psfirscard";

export default function Pshowcas() {
  return (
    <div className={pshostyl.p_showcase}>
      <div className="container">
        <Comontittle
          fulcont="Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
          folh1={
            <h1>
              Projects<span style={{ color: "#666666" }}> Showcase</span>
            </h1>
          }
        />
        <Psfirscard p_shoecasf={p_shoecasf} />
        <Psfirscard p_shoecasf={revoulation} />
      </div>
    </div>
  );
}
