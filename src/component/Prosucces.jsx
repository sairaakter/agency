import React from "react";
import abc_teach from "../assets/abc_teach.png";
import sersucstyl from "../style/Prosucces.module.css";
import Comontittle from "./Comontittle";
import Prosuccard from "./Prosuccard";
export default function ProSersucces() {
  return (
    <div className={sersucstyl.succes}>
      <div className="container cus_container">
        <Comontittle
          fulcont="At DigitX, we are continually working on exciting new projects to push the boundaries of digital innovation and deliver exceptional solutions to our valued clients. While we are thrilled to share our upcoming projects with you, we understand the importance of confidentiality and safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming projects while keeping specific details concealed."
          folh1={
            <h1>
              Upcoming
              <span style={{ color: "#666666" }}> Projects</span>
            </h1>
          }
        />
        <div className="row">
          <Prosuccard
            Category="E-commerce"
            Expected="E-commerce"
            sersucstyl={sersucstyl}
            abc_teach={abc_teach}
            tophd="ABC Tech Solutions"
            fultex="We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
          />
          <Prosuccard
            Category="E-commerce"
            Expected="E-commerce"
            sersucstyl={sersucstyl}
            abc_teach={abc_teach}
            tophd="ABC Tech Solutions"
            fultex="We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
          />
          <Prosuccard
            Category="E-commerce"
            Expected="E-commerce"
            sersucstyl={sersucstyl}
            abc_teach={abc_teach}
            tophd="ABC Tech Solutions"
            fultex="We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
          />
          <Prosuccard
            Category="E-commerce"
            Expected="E-commerce"
            sersucstyl={sersucstyl}
            abc_teach={abc_teach}
            tophd="ABC Tech Solutions"
            fultex="We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
          />
        </div>
      </div>
    </div>
  );
}
