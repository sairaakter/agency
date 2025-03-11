import React from "react";
import Hbanner from "../Hbanner";
import Journey from "../Journey";
import Partnar from "../Partnar";
import Question from "../Question";
import Ready from "../Ready";
import Servic from "../Servic";
import Testimonial from "../Testimonial";
import Work from "../Work";
export default function Home() {
  return (
    <div>
      <Hbanner />
      <Journey />
      <Servic />
      <Work />
      <Testimonial />
      <Question />
      <Partnar />
      <Ready
        folh1={
          <h1>
            <span style={{ color: "#666666" }}></span> Ready to Transform Your
            Digital Presence?
          </h1>
        }
        fulcont="Take the first step towards digital success with DigitX by
                  your side. Our team of experts is eager to craft tailored
                  solutions that drive growth for your business. Whether you
                  need a stunning website, a powerful mobile app, or a
                  data-driven marketing campaign, we've got you covered. Let's
                  embark on this transformative journey together."
      />
    </div>
  );
}
