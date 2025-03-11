import React from "react";
import Sidefeature from "./Sidefeature";
import SidefeatureFour from "./Sidefeaturefor";
import SidefeatureThree from "./Sidefeaturethree";
import SidefeatureTwo from "./Sidefeaturetwo";
import Sidehead from "./Sidehead";

export default function Webcontent({ sersidstyl, hthre, hpp }) {
  return (
    <div className="">
      <div className={sersidstyl.sedebar_main}>
        <Sidehead sersidstyl={sersidstyl} hthre={hthre} hpp={hpp} />
        <Sidefeature sersidstyl={sersidstyl} />
        <SidefeatureTwo sersidstyl={sersidstyl} />
        <SidefeatureThree sersidstyl={sersidstyl} />
        <SidefeatureFour sersidstyl={sersidstyl} />
      </div>
    </div>
  );
}
