import React, { useState } from "react";
import art from "../assets/art.png";
import artfor from "../assets/artfor.png";
import artthre from "../assets/artthre.png";
import arttwo from "../assets/arttwo.png";
import lee from "../assets/lee.png";
import leefor from "../assets/leefor.png";
import leethre from "../assets/leethre.png";
import leeto from "../assets/leeto.png";
import blogstyl from "../style/Blog.module.css";
import Blocard from "./Blocard";
import Blogbutton from "./Blogbutton";
import Blogmidle from "./Blogmiddle";
import Blogmidlesec from "./Blogmidlesec";
export default function Blogmain() {
  const options = [
    { id: "All", name: "All" },
    { id: "Business", name: "Business" },
    { id: "Design", name: "Design" },
    { id: "Development", name: "Development" },
  ];
  const [selectop, setSelectop] = useState("Design");
  const handlselect = (id) => {
    setSelectop(id);
    console.log("Selected Option:", id);
  };
  const renderselect = () => {
    switch (selectop) {
      case "Design":
        return (
          <Blogmidle
            blogstyl={blogstyl}
            hon="Web Design Trends Shaping 2023"
            hpp="Stay ahead of the design curve with insights into the latest web
            design trends. From immersive user experiences to bold color
            choices, explore the design elements that will dominate the digital
            landscape in 2023 and beyond ahead of the design curve with insights into the latest web
            design trends. From immersive user experiences to bold color
            choices, explore the design elements that will dominate the digital
            landscape in 2023 and beyond"
          />
        );
      case "All":
        return (
          <Blogmidle
            blogstyl={blogstyl}
            hon="All the sectors of Web Design and Trends Shaping 2023"
            hpp="Stay ahead of the design curve with insights into the latest web
            2023 and beyond ahead of the design curve with insights into the latest web
            design trends. From immersive user experiences to bold color
            choices, explore the design elements that will dominate the digital
            landscape in 2023 and beyond"
          />
        );
      case "Business":
        return (
          <Blogmidle
            blogstyl={blogstyl}
            hon="Business Trends Shaping 2023 internatinal"
            hpp="Stay ahead of the design curve with insights into the la
            design trends. From immersive user experiences to bold color
            choices, explore ead of the design curve with insights into the la
            design trends. From immersive user experiences to bold colorthe design elements that will dominate the digital
            landscape in 2023 and beyond"
          />
        );
      case "Development":
        return (
          <Blogmidle
            blogstyl={blogstyl}
            hon="Web Development Trends immersive user experiences landscape in Shaping 2023"
            hpp="Stay ahead of the design curve with insights into the latest web
            design trends. From immersive user experiences to bold color
            choices, explore the design elements that will dominate 
            choices, explore the design elements that will dominate the digital
            landscape in 2023 and beyond"
          />
        );
    }
  };

  const blogData = [
    {
      lee: lee,
      art: art,
      time: "6 min read",
      date: "March 2019",
      intro: "Daniel Lee",
      hto: "The Art of User-Centric Design",
      hhp: "User-centric design is the key to creating intuitive and engaging digital experiences Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates",
    },
    {
      lee: leeto,
      art: arttwo,
      time: "5 min read",
      date: "January 2022",
      intro: "Emily Carter",
      hto: "Designing for Accessibility",
      hhp: "Ensuring inclusivity in digital design enhances user experience for everyone.Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rate.Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates",
    },
    {
      lee: leethre,
      art: artthre,
      time: "7 min read",
      date: "April 2021",
      intro: "Michael Brown",
      hto: "The Future of AI in UX",
      hhp: "How artificial intelligence is shaping the future of user experience design.Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates",
    },
    {
      lee: leefor,
      art: artfor,
      time: "4 min read",
      date: "August 2020",
      intro: "Sophia Wilson",
      hto: "Minimalist Web Design Trends",
      hhp: "Exploring the power of simplicity and whitespace in modern web design.Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates",
    },
  ];

  return (
    <div className={blogstyl.blog}>
      <div className="container cus_container">
        <div className="row justify-content-center">
          <div className="col-lg-6  col-md-9 col-12 d-flex justify-content-center">
            <div className={blogstyl.blog_btns}>
              <Blogbutton
                cle={blogstyl.active}
                options={options}
                selectop={selectop}
                handlselect={handlselect}
              />
              {/* <Blogbutton>Business</Blogbutton>
              <Blogbutton>Design</Blogbutton>
              <Blogbutton>Development</Blogbutton> */}
            </div>
          </div>
        </div>
        <Blogmidlesec blogstyl={blogstyl} renderselect={renderselect} />
        <div class="row">
          {blogData.map((card, index) => {
            // Render the card
            const blogDataElement = (
              <div key={index} className="col-lg-6">
                <Blocard
                  blogstyl={blogstyl}
                  lee={card.lee}
                  art={card.art}
                  time={card.time}
                  date={card.date}
                  intro={card.intro}
                  hto={card.hto}
                  hhp={card.hhp}
                />
                {/* Render hr elements dynamically based on hrCount */}
              </div>
            );

            return blogDataElement;
          })}
        </div>
      </div>
    </div>
  );
}
