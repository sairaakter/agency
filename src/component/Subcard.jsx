import arow_right from "../assets/arow_right.png";
import Comonbtn from "./Comonbtn";

export default function Subcard({
  servstyl,
  htwo,
  hppp,
  serv_subfirst,
  serv_first,
  price,
}) {
  return (
    <div>
      <div className={`${servstyl.for_bdr} ${servstyl.pc_bdr}`}>
        <div className={`${servstyl.srvc_cards} ${servstyl.pc_card}`}>
          <img
            src={serv_subfirst}
            className={`img-fluid ${servstyl.sm_plat}`}
          />
          <img src={serv_first} className={`img-fluid ${servstyl.parttwo}`} />
          <div className={servstyl.s_content}>
            <h2>{htwo}</h2>
            <p>{hppp}</p>
            <div className={servstyl.s_flex}>
              <div className={servstyl.s_subfx}>
                <p>Starts at Price: </p>
                <p>
                  <span style={{ color: "#fff" }}> {price} </span>
                </p>
              </div>
              <div className={servstyl.j_btn}>
                <Comonbtn forclass={servstyl.sbthre}>
                  <span>Book a Call</span>
                  <div className={`${servstyl.nes_btn}`}>
                    <img src={arow_right} className="img-fluid" />
                  </div>
                </Comonbtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
