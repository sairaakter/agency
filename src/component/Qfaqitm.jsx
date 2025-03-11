import React from "react";
import minustoggle from "../assets/minustoggle.png";
import onopentgl from "../assets/onopentgl.png";

export default function Qfaqitm({
  questyle,
  mainqes,
  mainans,
  isOpen,
  toggleFaq,
}) {
  return (
    <div className={questyle.faq_item}>
      <label className={questyle.faq_question} onClick={toggleFaq}>
        <span className={questyle.main_ques}>{mainqes}</span>
        <span>
          <img
            className={`img-fluid ${questyle.faq_img}`}
            src={isOpen ? minustoggle : onopentgl} // Open/Close Toggle
          />
        </span>
      </label>
      {isOpen && ( // Only Show Answer if Open
        <div className={questyle.faq_answer}>
          <p>{mainans}</p>
        </div>
      )}
    </div>
  );
}
