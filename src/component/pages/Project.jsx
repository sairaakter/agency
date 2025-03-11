import React from "react";
import Comonbanner from "../Comonbanner";
import ProJourney from "../Projourny";
import ProSersucces from "../Prosucces";
import Pshowcas from "../Pshowcas";
import Ready from "../Ready";
export default function Project() {
  return (
    <>
      <Comonbanner
        befbr="Our Comprehensive"
        midlbr=" Digital"
        aftrbr="Solutions"
        serp="At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence."
      />
      <ProJourney />
      <Pshowcas />
      <ProSersucces />
      <Ready
        folh1={
          <h1>
            <span style={{ color: "#666666" }}></span>Join us in your digital
            journey and be the next success story!
          </h1>
        }
        fulcont="These success stories are a testament to the dedication and expertise of our team at DigitX. We are driven by a commitment to delivering outstanding results and helping businesses flourish in the digital landscape."
      />
    </>
  );
}
