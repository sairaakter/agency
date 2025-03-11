import React from "react";

export default function Sidehead({ sersidstyl, hthre, hpp }) {
  return (
    <div className={sersidstyl.side_head}>
      <h3>{hthre}</h3>
      {hpp}
    </div>
  );
}
