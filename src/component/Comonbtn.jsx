import comnbtn from "../style/Comonbtn.module.css";

export default function Comonbtn({ forclass, forclasstwo, children }) {
  return (
    <button className={`${comnbtn.comon_btn} ${forclass} ${forclasstwo}`}>
      {children}
    </button>
  );
}
