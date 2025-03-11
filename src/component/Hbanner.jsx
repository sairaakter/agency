import ban_two from "../assets/ban_two.png";
import banar from "../assets/banar.png";
import banstyl from "../style/Hbanner.module.css";
import Comonbtn from "./Comonbtn";
export default function Hbanner() {
  return (
    <div>
      <div className={banstyl.banner}>
        <div className={banstyl.cus_bner}>
          <div className={`container ${banstyl.cus_container}`}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className={banstyl.banner_content}>
                  <h1>
                    Digital Solutions
                    <span style={{ color: "#666666" }}>
                      That
                      <br /> Drive Success
                    </span>
                  </h1>
                  <p>
                    At DigitX, we believe in the transformative power of digital
                    solutions. Our team of experts is dedicated to helping
                    businesses like yours thrive in the fast-paced digital
                    landscape. From captivating web design to data-driven
                    marketing strategies, we are committed to delivering results
                    that exceed expectations.
                  </p>
                  <h2>Unlock Your Digital Potential Today</h2>
                  <Comonbtn forclass={banstyl.bto}>Get Started</Comonbtn>
                  <Comonbtn forclass={banstyl.bto} forclasstwo={banstyl.b_marg}>
                    Free Consultation
                  </Comonbtn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${banstyl.ims_continer}`}>
          <div className="row">
            <div className="col-lg-6">
              <div className={banstyl.one}>
                <img src={banar} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={banstyl.two}>
                <img src={ban_two} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
