import React from "react";
import abc_teach from "../assets/abc_teach.png";
import fitne from "../assets/fitne.png";

import arow_right from "../assets/arow_right.png";
import sersucstyl from "../style/Sersucces.module.css";
import Comonbtn from "./Comonbtn";
import Comontittle from "./Comontittle";
import Sersuccard from "./Sersuccard";

export default function Sersucces() {
  return (
    <div className={sersucstyl.succes}>
      <div className="container cus_container">
        <Comontittle
          fulcont="Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Success</span> Stories
            </h1>
          }
        />
        <div className="row">
          <Sersuccard
            sersucstyl={sersucstyl}
            chaleng="ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales."
            solution="Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.Additionally, we integrated an efficient checkout process and optimized the site for search engines."
            bfir="View All Projects"
            bsecon="Web Design & Development"
            abc_teach={abc_teach}
            tophd="ABC Tech Solutions"
          />
          <Sersuccard
            sersucstyl={sersucstyl}
            chaleng="Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features."
            solution="Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals fitness goals, track their progress, and share achievements on social media platforms.Additionally, we integrated an efficient checkout process and optimized the site for search engines."
            bfir="Health & Fitness"
            bsecon="Mobile App Development"
            abc_teach={fitne}
            tophd="Fitness Tracker App"
          />
          <div className={sersucstyl.j_btn}>
            <Comonbtn forclass={sersucstyl.sbthre}>
              <span>View All Stories</span>
              <div className={`${sersucstyl.nes_btn}`}>
                <img src={arow_right} className="img-fluid" />
              </div>
            </Comonbtn>
          </div>
        </div>
      </div>
    </div>
  );
}
