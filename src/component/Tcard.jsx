import React from "react";

export default function Tcard({
  testyle,
  mark,
  scialsvg,
  tesp,
  teshto,
  teshthre,
}) {
  return (
    <div>
      <div className={testyle.toptex_crd}>
        <div className={testyle.testi_card}>
          <div className={testyle.testi_img}>{scialsvg}</div>
          <div className={testyle.testi_cont}>
            <p>{tesp}</p>
          </div>
        </div>
        <button className={testyle.tooltip_btn}>
          <svg
            width="39"
            height="21"
            viewBox="0 0 39 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3758 17.9004C21.976 20.8053 17.524 20.8053 15.1242 17.9004L0.75 0.5L38.75 0.500003L24.3758 17.9004Z"
              fill="#262626"
            />
          </svg>
        </button>
        <div className={testyle.client_data}>
          <img src={mark} className="img-fluid" />
          <div className={testyle.client_name}>
            <h2>{teshto}</h2>
            <h3>{teshthre}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
