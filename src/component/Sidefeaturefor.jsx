import React from "react";
import Sidehead from "./Sidehead";
import Subfeature from "./Subfeature";
export default function SidefeatureFour({ sersidstyl }) {
  return (
    <div className={`${sersidstyl.side_feature}`}>
      <Sidehead
        sersidstyl={sersidstyl}
        hthre="Our Web Design Competed Projects"
        hpp={
          <p>
            At DigitX, we are dedicated to creating transformative mobile apps
            that empower your business and enrich your users' experiences.
          </p>
        }
      />
      <div className={sersidstyl.side_secon}>
        <div className={`row ${sersidstyl.side_seconborder}`}>
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
        </div>
        <div className={`row ${sersidstyl.side_seconborder}`}>
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
        </div>
        <div className={`row ${sersidstyl.side_seconborder}`}>
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
          <hr className={sersidstyl.ser_hrsm} />
          <Subfeature
            sersidstyl={sersidstyl}
            subh="Project 1"
            subp="GlobalTech Solutions"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className={sersidstyl.tables}>
            <div className={`row ${sersidstyl.fir_brdo}`}>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Project Name</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Industry</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={`${sersidstyl.tbls} ${sersidstyl.brnon}`}>
                  <p>Website URL</p>
                </div>
              </div>
            </div>
            <div className={`row ${sersidstyl.secon_brdo}`}>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Project Name</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Industry</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={`${sersidstyl.tbls} ${sersidstyl.brnon}`}>
                  <p>Website URL</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Project Name</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Industry</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={`${sersidstyl.tbls} ${sersidstyl.brnon}`}>
                  <p>Website URL</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Project Name</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={sersidstyl.tbls}>
                  <p>Industry</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 p-0">
                <div className={`${sersidstyl.tbls} ${sersidstyl.brnon}`}>
                  <p>Website URL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
