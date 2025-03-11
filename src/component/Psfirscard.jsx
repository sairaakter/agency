import React, { useState } from "react";
import devmem from "../assets/devmem.png";
import p_showall from "../assets/p_showall.png";
import shobtn from "../assets/shobtn.png";
import shopless from "../assets/shopless.png";
import techonology from "../assets/techonology.png";
import pshostyl from "../style/Pshowcase.module.css";
import Comonbtn from "./Comonbtn";
export default function Psfirscard({ p_shoecasf }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`row ${pshostyl.p_margg}`}>
      <div className="col-lg-12">
        <div className={pshostyl.p_showfirst}>
          <img src={p_shoecasf} className="img-fluid" />
          <div className={pshostyl.p_showflex}>
            <h2>E-Commerce Revolution</h2>
            <button type="button" onClick={toggleSection}>
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <span>
                    <img src={shopless} />
                  </span>
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <span>
                    <img src={shobtn} />
                  </span>
                </>
              )}
            </button>
          </div>
          <div className={pshostyl.p_shoallbtns}>
            <div className={pshostyl.sidebtn}>
              <Comonbtn forclasstwo={pshostyl.bto}>
                <span className="">
                  <img src={p_showall} />
                </span>
                <span>View All Projects</span>
              </Comonbtn>
            </div>
            <div className={pshostyl.sidebtn}>
              <Comonbtn forclasstwo={pshostyl.bto}>
                <span className="">
                  <img src={p_showall} />
                </span>
                <span>Web Design & Development</span>
              </Comonbtn>
            </div>
            <div className={pshostyl.sidebtn}>
              <Comonbtn forclasstwo={pshostyl.bto}>
                <span className="">
                  <img src={p_showall} />
                </span>
                <span>Web Design & Development</span>
              </Comonbtn>
            </div>
          </div>
          <div className={pshostyl.all_shocontent}>
            <div className={pshostyl.p_description}>
              <h2>Project Description</h2>
              <p>
                A dynamic e-commerce platform that revolutionized online
                shopping for fashion enthusiasts. The website showcases the
                latest trends, offers personalized recommendations, and seamless
                checkout options.
              </p>
            </div>
            {isExpanded && (
              <div className={pshostyl.full_text}>
                <div className={pshostyl.fansho}>
                  <div
                    className={`${pshostyl.p_catagoris} ${pshostyl.comonbdrs} row`}
                  >
                    <div
                      className={`${pshostyl.sub_cat} col-lg-3 col-md-6 col-sm-6 col-6 `}
                    >
                      <h2>Category</h2>
                      <p>E-commerce</p>
                    </div>
                    <div
                      className={`${pshostyl.sub_cat} col-lg-3 col-md-6 col-sm-6 col-6 `}
                    >
                      <h2>Category</h2>
                      <p>E-commerce</p>
                    </div>
                    <hr className={pshostyl.p_hr} />
                    <div
                      className={`${pshostyl.sub_cat} col-lg-3 col-md-6 col-sm-6 col-6 `}
                    >
                      <h2>Category</h2>
                      <p>E-commerce</p>
                    </div>
                    <div
                      className={`${pshostyl.sub_cat} col-lg-3 col-md-6 col-sm-6 col-6 `}
                    >
                      <h2>Category</h2>
                      <p>E-commerce</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <div
                        className={`${pshostyl.p_technology} ${pshostyl.comonbdrs}`}
                      >
                        <h2>Technologies Used</h2>
                        <div className={pshostyl.p_imag}>
                          <img src={techonology} className="img-fluid" />
                          <img src={techonology} className="img-fluid" />
                          <img src={techonology} className="img-fluid" />
                          <img src={techonology} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${pshostyl.members} ${pshostyl.comonbdrs} row`}
                  >
                    <h2>Team Members</h2>
                    <div className={pshostyl.sub_member}>
                      <div className={pshostyl.p_devmem}>
                        <h2>Web Developers</h2>
                        <div className={pshostyl.p_intro}>
                          <img src={devmem} />
                          <p>John Smith ,</p>
                        </div>
                      </div>
                      <hr className={pshostyl.p_hr} />
                      <div className={pshostyl.p_devmem}>
                        <h2>Web Developers</h2>
                        <div className={pshostyl.p_intro}>
                          <img src={devmem} />
                          <p>John Smith ,</p>
                        </div>
                      </div>
                      <hr className={pshostyl.p_hr} />
                      <div className={pshostyl.p_devmem}>
                        <h2>Web Developers</h2>
                        <div className={pshostyl.p_intro}>
                          <img src={devmem} />
                          <p>John Smith ,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${pshostyl.method} ${pshostyl.comonbdrs} row`}
                  >
                    <h2>Methods Used</h2>
                    <div className={`${pshostyl.sub_method} row`}>
                      <div
                        className={`${pshostyl.first_method} col-lg-4 col-md-12 col-sm-12 col-12`}
                      >
                        <Comonbtn forclasstwo={pshostyl.bto}>
                          Agile Development
                        </Comonbtn>
                      </div>
                      <div
                        className={`${pshostyl.first_method} col-lg-4 col-md-6 col-sm-12 col-12`}
                      >
                        <Comonbtn forclasstwo={pshostyl.bto}>
                          Agile Development
                        </Comonbtn>
                      </div>
                      <div
                        className={`${pshostyl.first_method} col-lg-4 col-md-6 col-sm-12 col-12`}
                      >
                        <Comonbtn forclasstwo={pshostyl.bto}>
                          Agile Development
                        </Comonbtn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
