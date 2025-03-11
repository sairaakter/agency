import React from "react";
import comon from "../style/Comontittle.module.css";
export default function Comontittle({
  fulcont,
  r_tittle,
  r_p,
  fulcontsecond,
  folh1,
}) {
  return (
    <div className="row">
      <div className={`col-lg-12 ${comon.startcon_ttl}`}>
        <div className={`${comon.comon_tittles} ${r_tittle}`}>
          {folh1}
          <p>{fulcont}</p>
          <p className={r_p}>{fulcontsecond}</p>
        </div>
      </div>
    </div>
  );
}
