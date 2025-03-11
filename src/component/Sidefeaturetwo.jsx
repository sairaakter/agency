import React from "react";
import Sidehead from "./Sidehead";
import Subfeature from "./Subfeature";
export default function SidefeatureTwo({ sersidstyl }) {
  return (
    <div className={`${sersidstyl.side_feature} ${sersidstyl.side_marg}`}>
      <Sidehead
        sersidstyl={sersidstyl}
        hthre="Design Process"
        hpp={
          <p>
            Our Web Design process follows a systematic approach to deliver a
            website that aligns perfectly with your business needs and branding.
            Here's an overview of our design process
          </p>
        }
      />
      <div className="row">
        <Subfeature
          sersidstyl={sersidstyl}
          subh="Customized Design"
          subp="We craft bespoke designs tailored to match your brand personality and industry."
        />
        <hr className={sersidstyl.ser_hrsm} />
        <Subfeature
          sersidstyl={sersidstyl}
          subh="Customized Design"
          subp="We craft bespoke designs tailored to match your brand personality and industry."
          last
        />
      </div>
      <hr />
      <hr className={sersidstyl.ser_hrsm} />
      <div className="row">
        <Subfeature
          sersidstyl={sersidstyl}
          subh="Customized Design"
          subp="We craft bespoke designs tailored to match your brand personality and industry."
        />
        <hr className={sersidstyl.ser_hrsm} />
        <Subfeature
          sersidstyl={sersidstyl}
          subh="Customized Design"
          subp="We craft bespoke designs tailored to match your brand personality and industry."
          last
        />
      </div>
    </div>
  );
}
