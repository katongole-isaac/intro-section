import React, { useContext } from "react";
import PlanIcon from "../intro-section/images/icon-planning.svg";
import TodoIcon from "../intro-section/images/icon-planning.svg";
import CalendarIcon from "../intro-section/images/icon-calendar.svg";
import ReminderIcon from "../intro-section/images/icon-reminders.svg";
import DropdownItem from "./DropdownItem";
import { AppContext } from "../App";

export default function FeatureDropdown() {
  return (
    <>
      <div
        className={`card ml-2 border-0 feature-dropdown position-absolute `}
        style={{ width: "12rem" }}
      >
        <div className="d-flex justify-content-center">
          <ul className="list-group d-flex flex-column w-100">
            <DropdownItem icon={TodoIcon} label="Todo List" />
            <DropdownItem icon={CalendarIcon} label="Calendar" />
            <DropdownItem icon={ReminderIcon} label="Reminders" />
            <DropdownItem icon={PlanIcon} label="Planning" />
          </ul>
        </div>
      </div>
    </>
  );
}
