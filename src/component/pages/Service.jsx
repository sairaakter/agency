import React from "react";
import Comonbanner from "../Comonbanner";
import Ready from "../Ready";
import Serservic from "../Serservic";
import Sersidebar from "../Sersidebar";
import Sersucces from "../Sersucces";
export default function Service() {
  return (
    <div>
      <Comonbanner
        befbr="Our Comprehensive"
        midlbr=" Digital"
        aftrbr="Solutions"
        serp="At DigitX, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts"
      />
      <Serservic />
      <Sersidebar />
      <Sersucces />
      <Ready
        folh1={
          <h1>
            <span style={{ color: "#666666" }}></span>Join us in your digital
            journey and be the next success story!
          </h1>
        }
        fulcont="These success stories are a testament to the dedication and expertise of our team at DigitX. We are driven by a commitment to delivering outstanding results and helping businesses flourish in the digital landscape."
      />
    </div>
  );
}
