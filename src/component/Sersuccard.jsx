import React, { useState } from "react";
import suce_desi from "../assets/suce_desi.png";
import suce_ecomerc from "../assets/suce_ecomerc.png";

import Comonbtn from "./Comonbtn";

export default function Sersuccard({
  sersucstyl,
  chaleng,
  solution,
  bfir,
  bsecon,
  abc_teach,
  tophd,
  // fultex,
}) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="col-lg-6 col-md-6">
      <div className={`${sersucstyl.for_bdr} ${sersucstyl.succes_cont}`}>
        <div className={`${sersucstyl.abc_teach} ${sersucstyl.abc_marg}`}>
          <img src={abc_teach} className="img-fluid" />
          <h2>{tophd}</h2>
        </div>
        <div className={sersucstyl.abc_teach}>
          <div className={sersucstyl.sidebtn}>
            <Comonbtn forclass={`${sersucstyl.bto} ${sersucstyl.suces_btn}`}>
              <span className="">
                <img src={suce_ecomerc} />
              </span>
              <span>{bfir}</span>
            </Comonbtn>
          </div>
          <div className={sersucstyl.sidebtn}>
            <Comonbtn forclass={`${sersucstyl.bto} ${sersucstyl.suces_btn}`}>
              <span className="">
                <img src={suce_desi} />
              </span>
              <span>{bsecon}</span>
            </Comonbtn>
          </div>
        </div>
        <div className={`${sersucstyl.for_bdr} ${sersucstyl.abc_challenge}`}>
          <h2>Challenge</h2>
          <p>{chaleng}</p>
          <hr />
          <input
            type="checkbox"
            className={sersucstyl.read_more_toggle}
            id="read_more_toggle"
          />
          <h2>Solution</h2>
          <p>
            {}
            {isReadMore ? solution : `${solution.substring(0, 250)}...`}
          </p>
          {/* <p className={sersucstyl.full_text}>{fultex}</p> */}
          <label
            onClick={toggleReadMore}
            htmlFor="read_more_toggle"
            className={sersucstyl.read_more_btn}
          >
            {isReadMore ? "Read Less Story" : "Read Full Story"}
          </label>
        </div>
      </div>
    </div>
  );
}
