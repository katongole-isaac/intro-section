import React from "react";
import bgImage from "../intro-section/images/image-hero-desktop.png";
import mobileBgImage from "../intro-section/images/image-hero-mobile.png";
import MainSection from "./MainSection";

export default function Main() {
  return (
    <div className="row ">
      <div
        className="col col-12 col-md-6  order-2 order-md-1
     
      "
      >
        <MainSection />
      </div>
      <div className="col col-12 col-md-6 order-md-2 ">
        <div className="img-wrapper">
          <picture>
            <source
              srcSet={mobileBgImage}
              alt="image_hereo_desktop"
              media="(max-width: 767px)"
            />
            <img src={bgImage} alt="image_hereo_desktop" />
          </picture>
        </div>
      </div>
    </div>
  );
}
