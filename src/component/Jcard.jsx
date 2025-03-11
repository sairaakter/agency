import arow_right from "../assets/arow_right.png";
import Comonbtn from "./Comonbtn";
export default function Jcard({
  jornstyle,
  htwo,
  hpp,
  expertis,
  isbutton,
  project_card,
}) {
  const istton = isbutton ? (
    <div className={jornstyle.j_btn}>
      <Comonbtn forclass={jornstyle.bthre}>
        <span>Learn More</span>
        <div className={`${jornstyle.nes_btn}`}>
          <img src={arow_right} className="img-fluid" />
        </div>
      </Comonbtn>
    </div>
  ) : (
    ""
  );

  return (
    <div className="">
      <div className={`${jornstyle.j_cards} ${project_card}`}>
        <img src={expertis} className="img-fluid" />
        <h2>{htwo}</h2>
        <p>{hpp}</p>
        {istton}
      </div>
    </div>
  );
}
