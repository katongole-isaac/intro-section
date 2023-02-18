import React from "react";
import MakerIcon from "../intro-section/images/client-maker.svg";
import DataIcon from "../intro-section/images/client-databiz.svg";
import MeetIcon from "../intro-section/images/client-meet.svg";
import AudioPhileIcon from "../intro-section/images/client-audiophile.svg";
export default function MainSection() {
  return (
    <div className="d-flex flex-column main-section text-center text-md-left">
      <h1 className="display-1 font-weight-bold">
        Make remote
        <span className="text-nowrap"> work</span>
      </h1>

      <div className="content text-center text-md-left">
        <p>
          Get your team in sync, no matter your location. <br />
          <span>
            Streamline processes, create team rituals, <br /> and watch
            productivity soar.
          </span>
        </p>
      </div>
      <div className="controls text-center text-md-left ">
        <button className="btn btn-dark">Learn more</button>
      </div>
      <div className="icons d-flex ">
        <div className="icon-wrapper">
          <img src={DataIcon} alt="databiz_icon" />
        </div>
        <div className="icon-wrapper">
          <img src={AudioPhileIcon} alt="AudioPhileIcon" />
        </div>
        <div className="icon-wrapper">
          <img src={MeetIcon} alt="meet_icon" />
        </div>
        <div className="icon-wrapper">
          <img src={MakerIcon} alt="maker_icon" />
        </div>
      </div>
    </div>
  );
}
