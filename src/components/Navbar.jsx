import React, { useContext } from "react";
import CompanyDropdown from "./CompanyDropdown";
import FeatureDropdown from "./FeatureDropdown";
import ArrowUpIcon from "../intro-section/images/icon-arrow-up.svg";
import ArrowDownIcon from "../intro-section/images/icon-arrow-down.svg";
import { AppContext } from "../App";

export default function Navbar() {
  const { setFirstDrop, setShowDropdown, firstDrop, showDropdown } =
    useContext(AppContext);

  return (
    <>
      <nav className="navbar  navbar-light navbar-expand-md">
        <a className="navbar-brand font-weight-bold d-sm-inline-block mr-4">
          Snap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-nav w-100  collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          <div className="d-sm-flex flex-row d-block ">
            <div className="feature-menu-item">
              <NavItem
                label="Features"
                downIcon={ArrowDownIcon}
                upIcon={ArrowUpIcon}
                showDropdown={firstDrop}
              />
              <FeatureDropdown />
            </div>
            {/* <FeatureDropdown /> */}

            <div className="company-menu-item">
              <NavItem
                label="Company"
                downIcon={ArrowDownIcon}
                upIcon={ArrowUpIcon}
                showDropdown={showDropdown}
              />
              <CompanyDropdown />
            </div>
            <CompanyDropdown />

            <NavItem label="Careers" />
            <NavItem label="About" />
          </div>
          <div className="d-flex other">
            <NavItem label="Login" />
            <NavItem label="Register" />
          </div>
        </div>
      </nav>
    </>
  );
}

const NavItem = ({ downIcon, upIcon, label, showDropdown, className }) => {
  return (
    <>
      <a
        className={`nav-item nav-link d-flex ${className} align-items-center  `}
        href="#"
      >
        <span className="mr-1">{label}</span>
        {upIcon && !showDropdown ? (
          <>
            <div className="menu-icon ">
              <img src={downIcon} alt="arrow_down_icon" />
            </div>
          </>
        ) : null}
      </a>
    </>
  );
};
