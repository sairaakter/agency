import React from "react";
export default function Sidemain({ sersidstyl, renderContent }) {
  return (
    <div className="col-lg-9">
      <div className={sersidstyl.gg}>
        {renderContent()}

        {/* <div className={sersidstyl.sedebar_main}>
        <Sidehead
          sersidstyl={sersidstyl}
          hthre="Web Design"
          hpp={
            <p>
              Web Design is the art and science of creating visually appealing
              and user-friendly websites that reflect your brand identity and
              resonate with your target audience. At DigitX, our web design
              process involves a careful blend of creativity, user experience
              (UX) design, and cutting-edge technologies. We take the time to
              understand your business goals, target market, and unique selling
              points to create a website that not only looks great but also
              drives results.
            </p>
          }
        />
        <Sidefeature sersidstyl={sersidstyl} />
        <SidefeatureTwo sersidstyl={sersidstyl} />
        <SidefeatureThree sersidstyl={sersidstyl} />
        <SidefeatureFour sersidstyl={sersidstyl} />
      </div> */}
      </div>
    </div>
  );
}
