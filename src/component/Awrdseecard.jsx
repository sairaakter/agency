import React from "react";
import arow_right from "../assets/arow_right.png";
import Comonbtn from "./Comonbtn";

export default function Awordseecard({ awardstyl, worldcup, htwo, hpp }) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className={awardstyl.for_bdr}>
        <div className={awardstyl.award_card}>
          <div className={awardstyl.padcard}>
            <img src={worldcup} className="" />

            <h2>{htwo}</h2>
            <p>{hpp}</p>
            <div className={awardstyl.ard_btn}>
              <Comonbtn forclass={awardstyl.sbthre}>
                <span>View Page</span>
                <div className={awardstyl.nes_btn}>
                  <img src={arow_right} className="img-fluid" />
                </div>
              </Comonbtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
