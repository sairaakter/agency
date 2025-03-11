import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import mark from "../assets/mark.png";
import markthre from "../assets/markthre.png";
import markto from "../assets/markto.png";
import testyle from "../style/Testimonial.module.css";
import Comontittle from "./Comontittle";
import Tcard from "./Tcard";
markto, markthre;

export default function Testimonial() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 1,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };

  const tcardData = [
    {
      mark: mark, // Replace with actual mark
      scialsvg: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
        </svg>
      ),
      tesp: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      teshto: "Mark Roberts",
      teshthre: "Founder of GreenEarth Eco Store",
    },
    {
      mark: markto, // Replace with actual mark
      scialsvg: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
        </svg>
      ),
      tesp: "DigitX helped us bring our vision to life. Their team worked tirelessly to create a seamless user experience, and the end result exceeded our expectations.",
      teshto: "Sarah Jane",
      teshthre: "CEO of GreenTech Innovations",
    },
    {
      mark: markthre, // Replace with actual mark
      scialsvg: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
        </svg>
      ),
      tesp: "The team at DigitX were a dream to work with. They understood our needs and delivered a polished website that has helped us reach a wider audience.",
      teshto: "John Doe",
      teshthre: "Marketing Director at SuperMart",
    },
    {
      mark: mark, // Replace with actual mark
      scialsvg: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
        </svg>
      ),
      tesp: "Working with DigitX was smooth, and the result is a website that works well. Some small improvements could have been made, but overall, we're satisfied.",
      teshto: "Linda Carver",
      teshthre: "CTO of SoftWorks Inc.",
    },
    {
      mark: mark, // Replace with actual mark
      scialsvg: (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
        </svg>
      ),
      tesp: "DigitX has done a great job in modernizing our website. The team was very responsive and delivered exactly what we asked for.",
      teshto: "Mary Kline",
      teshthre: "Founder of Kline & Co.",
    },
  ];

  return (
    <div className={testyle.testimonial}>
      <div className="container-fluid">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Our</span> Testimonials
            </h1>
          }
          fulcont="Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."
        />
        <div className="row">
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
          >
            {tcardData.map((card, index) => {
              // Render the card
              const tcardData = (
                <div key={index}>
                  <Tcard
                    testyle={testyle}
                    mark={card.mark}
                    scialsvg={card.scialsvg}
                    tesp={card.tesp}
                    teshto={card.teshto}
                    teshthre={card.teshthre}
                  />
                </div>
              );

              return tcardData;
            })}
          </Carousel>
          {/* <Tcard
            testyle={testyle}
            mark={mark}
            scialsvg={
              <svg
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.4406 5.40089C22.4558 5.62129 22.4558 5.84168 22.4558 6.06411C22.4558 12.8415 17.2964 20.6578 7.86208 20.6578V20.6538C5.07516 20.6579 2.34613 19.8596 0 18.3544C0.405241 18.4031 0.812513 18.4275 1.2208 18.4285C3.53037 18.4305 5.77392 17.6556 7.5909 16.2286C5.3961 16.187 3.47146 14.756 2.79911 12.6668C3.56795 12.8151 4.36015 12.7846 5.11477 12.5784C2.72192 12.095 1.00041 9.99261 1.00041 7.551C1.00041 7.52866 1.00041 7.50733 1.00041 7.486C1.71339 7.88312 2.51168 8.10351 3.32826 8.12789C1.07455 6.62169 0.37985 3.62352 1.74081 1.27942C4.34491 4.48377 8.18708 6.43177 12.3116 6.63794C11.8982 4.85651 12.4629 2.98976 13.7955 1.73748C15.8613 -0.20443 19.1103 -0.104897 21.0522 1.9599C22.2009 1.73341 23.3018 1.31192 24.3094 0.714725C23.9265 1.90201 23.1251 2.91054 22.0546 3.55141C23.0713 3.43157 24.0646 3.15937 25 2.74398C24.3114 3.77587 23.444 4.67471 22.4406 5.40089Z" />
              </svg>
            }
            tesp=" Working with DigitX was a pleasure. Their web design team created
              a stunning website that perfectly captured our brand's essence.
              The feedback from our customers has been overwhelmingly positive."
            teshto="Mark Roberts"
            teshthre="Founder of GreenEarth Eco Store"
          /> */}
        </div>
      </div>
    </div>
  );
}
