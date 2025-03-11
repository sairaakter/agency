import React from "react";
import r_dx from "../assets/r_dx.png";
import redystyl from "../style/Ready.module.css";
import Comonbtn from "./Comonbtn";
import Comontittle from "./Comontittle";

export default function Ready({ folh1, fulcont }) {
  return (
    <div className={redystyl.ready}>
      <div className="container cus_container">
        <div className={`${redystyl.for_bdr} ${redystyl.r_content}`}>
          <Comontittle
            folh1={folh1}
            fulcont={fulcont}
            fulcontsecond="Take the first step towards digital success with DigitX by
                  your side."
            r_tittle={redystyl.r_tittle}
            r_p={redystyl.r_p}
          />
          <div className="row">
            <div className="col-lg-12">
              <div className={redystyl.r_btns}>
                <h2>Unlock Your Digital Potential Today</h2>
                <Comonbtn forclass={redystyl.bto}>Get Started</Comonbtn>
                <Comonbtn forclass={redystyl.bto} forclasstwo={redystyl.b_marg}>
                  Free Consultation
                </Comonbtn>
              </div>
            </div>
          </div>
          <div className={redystyl.rdx}>
            <img src={r_dx} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
