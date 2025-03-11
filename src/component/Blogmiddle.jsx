import React, { useState } from "react";
import blog from "../assets/blog.png";

export default function Blogmidle({ blogstyl, hon, hpp }) {
  const [isread, setIsread] = useState(false);
  const hand = () => {
    setIsread(!isread);
  };
  return (
    <div className={`row ${blogstyl.b_marggg}`}>
      <div className="col-lg-5 col-md-12 ">
        <div className={blogstyl.blog_img}>
          <img src={blog} className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-7 col-md-12">
        <div className={blogstyl.blog_content}>
          <h1>{hon}</h1>
          <p>
            {isread ? hpp : `${hpp.substring(0, 270)}`}{" "}
            {!isread && (
              <span
                onClick={hand}
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "inline",
                }}
              >
                Read More...
              </span>
            )}
            {isread && (
              <span
                onClick={hand}
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "inline",
                }}
              >
                Show Less...
              </span>
            )}
          </p>

          <div className={blogstyl.abc_completion}>
            <div className="row">
              <div
                className={`${blogstyl.comple_conten} col-lg-3 col-md-3 col-sm-6 col-12`}
              >
                <h2>Category</h2>
                <p>E-commerce</p>
              </div>
              <hr className={blogstyl.blog_colhr} />
              <div
                className={`${blogstyl.comple_conten} col-lg-3 col-md-3 col-sm-6 col-12`}
              >
                <h2>Category</h2>
                <p>E-commerce</p>
              </div>
              <hr className={blogstyl.blog_hr} />
              <div
                className={`${blogstyl.comple_conten} col-lg-3 col-md-3 col-sm-6 col-12`}
              >
                <h2>Category</h2>
                <p>E-commerce</p>
              </div>
              <hr className={blogstyl.blog_colhr} />
              <div
                className={`${blogstyl.comple_conten} col-lg-3 col-md-3 col-sm-6 col-12`}
              >
                <h2>Category</h2>
                <p>E-commerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
