import React from "react";
import Sidehead from "./Sidehead";
import Subfeature from "./Subfeature";
export default function Sidefeature({ sersidstyl }) {
  return (
    <div className={`${sersidstyl.side_feature} ${sersidstyl.side_marg}`}>
      <Sidehead sersidstyl={sersidstyl} hthre="Key Features" />
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
