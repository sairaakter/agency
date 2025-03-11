import React from "react";
import folo_insta from "../assets/folo_insta.png";
import folo_lidin from "../assets/folo_lidin.png";
import folo_twiter from "../assets/folo_twiter.png";

export default function Acard({ aastyl, jhon, name, intro }) {
  return (
    <div>
      <div className={aastyl.for_bdr}>
        <div className={aastyl.about_card}>
          <div className={aastyl.padcard}>
            <img src={jhon} className="" />

            <h2>{name}</h2>
            <button type="button" className={aastyl.abt_btn}>
              {intro}
            </button>
          </div>

          <hr />
          <div className={aastyl.card_img}>
            <a href="https://bd.linkedin.com/">
              <img src={folo_lidin} className="img-fluid" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={folo_insta} className="img-fluid" />
            </a>
            <a href="https://x.com/home">
              <img src={folo_twiter} className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
