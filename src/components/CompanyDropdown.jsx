import React from "react";
import DropdownItem from "./DropdownItem";

export default function CompanyDropdown() {
  return (
    <div
      className="card ml-2 border-0 position-absolute d-none company-dropdown "
      style={{ width: "10rem" }}
    >
      <div className="d-flex justify-content-center">
        <ul className="list-group d-flex flex-column w-100">
          <DropdownItem label="History" />
          <DropdownItem label="Our Team" />
          <DropdownItem label="Blog" />
        </ul>
      </div>
    </div>
  );
}
