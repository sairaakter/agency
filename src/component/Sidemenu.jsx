import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidemenu({
  sersidstyl,
  options,
  handleSelect,
  selectedOption,
}) {
  return (
    <div className="col-lg-3 col-sm-12">
      <div className={sersidstyl.sidebar_menu}>
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              className={`${sersidstyl.comon_menu} ${
                selectedOption === option.id ? sersidstyl.active : ""
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <NavLink to="#" className={sersidstyl.gaps}>
                <span>
                  <img src={option.img} />
                </span>
                <span> {option.name}</span>
              </NavLink>
            </li>
          ))}

          {/* <li className={sersidstyl.comon_menu}>
            <NavLink href="#" className={sersidstyl.gaps}>
              <span>
                <img src={web_iconto} />
              </span>
              <span>Web Design</span>
            </NavLink>
          </li>
          <li className={sersidstyl.comon_menu}>
            <NavLink href="#" className={sersidstyl.gaps}>
              <span>
                <img src={web_icontre} />
              </span>
              <span>Web Design</span>
            </NavLink>
          </li>
          <li className={sersidstyl.comon_menu}>
            <NavLink href="#" className={sersidstyl.gaps}>
              <span>
                <img src={web_iconfor} />
              </span>
              <span>Digital Marketing</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
