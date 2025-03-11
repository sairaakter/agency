import React from "react";

export default function Pcard({ Parstyl, sm_plat, parttwo, hto, hpp }) {
  return (
    <div className="">
      <div className={`${Parstyl.for_bdr} ${Parstyl.pc_bdr}`}>
        <div className={Parstyl.pc_card}>
          <img src={sm_plat} className={`img-fluid ${Parstyl.sm_plat}`} />
          <img src={parttwo} className={`img-fluid ${Parstyl.parttwo}`} />
          <h2>{hto}</h2>
          <p>{hpp}</p>
        </div>
      </div>
    </div>
  );
}
