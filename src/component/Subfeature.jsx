import React from "react";

export default function Subfeature({ sersidstyl, subh, subp, last }) {
  return (
    <div className={`col-lg-6 col-md-6 ${last ? sersidstyl.last_col : ""}`}>
      <div className={sersidstyl.brigth}>
        <h5>{subh}</h5>
        <p>{subp}</p>
      </div>
    </div>
  );
}
