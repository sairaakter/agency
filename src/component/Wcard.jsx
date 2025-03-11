import React from "react";
import arow_right from "../assets/arow_right.png";
import Comonbtn from "./Comonbtn";

export default function Wcard({
  workstyl,
  w_platform,
  w_plattwo,
  hto,
  hpp,
  hfirt,
  hsecon,
}) {
  return (
    <div className="">
      <div className={`${workstyl.for_bdr} ${workstyl.w_bdr}`}>
        <div className={`${workstyl.work_card}`}>
          <img src={w_plattwo} className={`img-fluid ${workstyl.w_plattwo}`} />
          <img src={w_platform} className={`img-fluid ${workstyl.w_platon}`} />
          <div className={workstyl.work_btn}>
            <Comonbtn forclass={workstyl.bto} forclasstwo={workstyl.srvc_btn}>
              <span>View Projects Details</span>
              <span className={`${workstyl.nessrvc_btn}`}>
                <img src={arow_right} />
              </span>
            </Comonbtn>
          </div>
          <h2>{hto}</h2>
          <div className={workstyl.w_flax}>
            <h3>{hfirt}</h3>
            <h3>{hsecon}</h3>
          </div>
          <p>{hpp}</p>
        </div>
      </div>
    </div>
  );
}
