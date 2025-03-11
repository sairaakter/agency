import React from "react";
import calender from "../assets/calender.png";

export default function Awordcard({
  awardstyl,
  worldcup,
  date,
  htwo,
  hpp,
  why,
}) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className={awardstyl.for_bdr}>
        <div className={awardstyl.award_card}>
          <div className={awardstyl.padcard}>
            <img src={worldcup} className="" />
            <div
              className={`${awardstyl.lee_btn} ${awardstyl.leeetwo} ${awardstyl.award_thitd}`}
            >
              <button type="button" className={awardstyl.lee_flex}>
                <img src={calender} className="img-fluid" />
                <span>{date}</span>
              </button>
            </div>
            <h2>{htwo}</h2>
            <p>{hpp}</p>
            <div className={awardstyl.why}>
              <h3>Why</h3>
              <p>{why}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
