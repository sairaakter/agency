import React from "react";
import s_banarbotom from "../assets/s_banarbotom.png";

import combanestyl from "../style/Comonbanner.module.css";
export default function Comonbanner({ befbr, midlbr, aftrbr, serp }) {
  return (
    <div className={combanestyl.s_banner}>
      <div className={combanestyl.banner_img}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className={combanestyl.sbanner_content}>
                <h1>
                  {befbr}
                  <span style={{ color: "#666666" }}>
                    {midlbr}
                    <br /> {aftrbr}
                  </span>
                </h1>
                <p>{serp}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={s_banarbotom}
          className={`img-fluid ${combanestyl.s_banarbotom}`}
        />
      </div>
    </div>
  );
}
