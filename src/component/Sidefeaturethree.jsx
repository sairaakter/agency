import React from "react";
import arow_right from "../assets/arow_right.png";
import port_first from "../assets/port_first.png";
import port_secon from "../assets/port_secon.png";
import Comonbtn from "./Comonbtn";
import Sidehead from "./Sidehead";

export default function SidefeatureThree({ sersidstyl }) {
  return (
    <div className={`${sersidstyl.side_feature} ${sersidstyl.side_marg}`}>
      <Sidehead
        sersidstyl={sersidstyl}
        hthre="Web Design Portfolio"
        hpp={
          <p>
            Check out some of our most recent Web Design projects in the table
            below
          </p>
        }
      />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div className={sersidstyl.port_img}>
            <img src={port_first} className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
          <div className={sersidstyl.port_img}>
            <img src={port_secon} className="img-fluid" />
          </div>
        </div>
        <div className={`${sersidstyl.work_btn} ${sersidstyl.sidebtn}`}>
          <Comonbtn forclass={sersidstyl.bto} forclasstwo={sersidstyl.srvc_btn}>
            <span>View All Projects</span>
            <span className={`${sersidstyl.nessrvc_btn}`}>
              <img src={arow_right} />
            </span>
          </Comonbtn>
        </div>
      </div>
    </div>
  );
}
