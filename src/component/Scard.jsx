import arow_right from "../assets/arow_right.png";
import Comonbtn from "./Comonbtn";

export default function Scard({ servstyl, htwo, hppp, cod_icon }) {
  return (
    <div className="">
      <div className={servstyl.for_bdr}>
        <div className={servstyl.srvc_cards}>
          <img src={cod_icon} className="img-fluid" />
          <h2>{htwo}</h2>
          <p>{hppp}</p>
          <div className={servstyl.j_btn}>
            <Comonbtn forclass={servstyl.bto} forclasstwo={servstyl.srvc_btn}>
              <span>Learn More</span>
              <div className={`${servstyl.nessrvc_btn}`}>
                <img src={arow_right} className="img-fluid" />
              </div>
            </Comonbtn>
          </div>
        </div>
      </div>
    </div>
  );
}
