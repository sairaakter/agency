import React, { useState } from "react";
import march from "../assets/march.png";
import watch from "../assets/watch.png";

export default function Blocard({
  blogstyl,
  art,
  lee,
  time,
  date,
  intro,
  hto,
  hhp,
}) {
  const [isread, setIsread] = useState(false);
  const handlec = () => {
    setIsread(!isread);
  };
  return (
    <div>
      <div className={blogstyl.blog_cardd}>
        <div className={blogstyl.card_head}>
          <img src={art} className="img-fluid" />
        </div>
        <div className={blogstyl.card_boddy}>
          <div className={blogstyl.watch}>
            <div className={blogstyl.lee}>
              <img src={lee} className="img-fluid" />
              <p>{intro}</p>
            </div>
            <div className={blogstyl.lee_btn}>
              <button type="button" className={blogstyl.lee_flex}>
                <img src={watch} className="img-fluid" />
                <span>{time}</span>
              </button>
              <button type="button" className={blogstyl.lee_flex}>
                <img src={march} className="img-fluid" />
                <span>{date}</span>
              </button>
            </div>
          </div>
          <div className={blogstyl.blog_read}>
            <h2>{hto}</h2>
            <p>{isread ? hhp : `${hhp.substring(0, 150)}...`}</p>
          </div>
          <div className={blogstyl.blog_more}>
            <button type="button" onClick={handlec}>
              {isread ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
