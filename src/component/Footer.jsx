import { NavLink } from "react-router-dom";
import dxlogo from "../assets/dxlogo.png";
import folo_insta from "../assets/folo_insta.png";
import folo_lidin from "../assets/folo_lidin.png";
import folo_twiter from "../assets/folo_twiter.png";
import fostyle from "../style/Footer.module.css";
export default function Footer() {
  return (
    <div>
      <section className={fostyle.footer}>
        <footer>
          <div className={`container ${fostyle.cus_container}`}>
            <div className={`row ${fostyle.f_top}`}>
              <div className="col-lg-12 p-0">
                <div className={`${fostyle.fot_nav}`}>
                  <div className={`${fostyle.fot_logo}`}>
                    <img src={dxlogo} className="img-fluid" />
                  </div>
                  <div className={`${fostyle.fotnav_cont}`}>
                    <div className={fostyle.f_folow}>
                      <p>Follow Us On Social Media</p>
                    </div>
                    <div className={fostyle.folo_logos}>
                      <NavLink to="https://bd.linkedin.com/">
                        <img src={folo_lidin} className="img-fluid" />
                      </NavLink>
                      <NavLink to="https://www.instagram.com/">
                        <img src={folo_insta} className="img-fluid" />
                      </NavLink>
                      <NavLink to="https://x.com/home">
                        <img src={folo_twiter} className="img-fluid" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${fostyle.f_middle}`}>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>Home</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">Benefits</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Our Testimonials</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Partners</NavLink>
                </p>
              </div>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>Services</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">Web Design</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Website Development</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">App Development</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Digital Marketing</NavLink>
                </p>
              </div>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>Projects</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">
                    ABC Tech Solutions
                  </NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">
                    GreenEarth Eco Store
                  </NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">
                    HealthTech Innovations
                  </NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">
                    GlobalTech Solutions
                  </NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">TechGuru Inc.</NavLink>
                </p>
              </div>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>About Us</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">Our Team</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Achievements</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Awards</NavLink>
                </p>
              </div>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>Careers</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">
                    Job Openings
                  </NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Benefits & Perks</NavLink>
                </p>
                <p>
                  <NavLink to="tel:+8801588889999">Employee Refral</NavLink>
                </p>
              </div>
              <div
                className={`col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ${fostyle.exclusiv}`}
              >
                <h5>Blogs</h5>
                <p>
                  <NavLink to="mailto:exclusive@gmail.com">Our Blogs</NavLink>
                </p>
              </div>
            </div>
            <div className={`row ${fostyle.f_bottom}`}>
              <div className="col-lg-12 p-0">
                <div className={`${fostyle.fot_copyright}`}>
                  <div>
                    <p>
                      <a>@2023 Digitax. All Rights Reserved.</a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <a>Version 1.0</a>
                    </p>
                  </div>
                  <div className={fostyle.fot_subcopy}>
                    <p>
                      <NavLink to="#">Privacy Policy</NavLink>
                    </p>
                    <p>
                      <NavLink to="#">Terms & Conditions</NavLink>
                    </p>
                    <p>
                      <NavLink to="#">Cookie Policy</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
