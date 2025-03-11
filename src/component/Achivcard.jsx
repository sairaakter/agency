import React from "react";
import calender from "../assets/calender.png";

export default function Achivcard({ achivstyl, htwo, hthre, hpp, date }) {
  return (
    <div className="row">
      <div
        className={`col-lg-1 col-md-1 col-sm-1 col-12 ${achivstyl.foundation}`}
      >
        <div className={achivstyl.hunderds}>
          <h2>{htwo}</h2>
        </div>
      </div>
      <div
        className={`col-lg-11 col-md-11 col-sm-11 col-11 ${achivstyl.foundation}`}
      >
        <div className={achivstyl.achiv_flex}>
          <div className={achivstyl.sub_achivflex}>
            <div>
              <h3>{hthre}</h3>
            </div>

            <div className={`${achivstyl.lee_btn} ${achivstyl.leeetwo}`}>
              <button type="button" className={achivstyl.lee_flex}>
                <img src={calender} className="img-fluid" />
                <span>{date}</span>
              </button>
            </div>
          </div>
        </div>
        <div className={achivstyl.achiv_descr}>
          <h2>Description</h2>
          <p>{hpp}</p>
        </div>
      </div>
    </div>
  );
}
