const DropdownItem = ({ icon, label }) => (
  <>
    <li className="list-group-item border-0 d-flex ">
      {icon && (
        <>
          <div className="nav-icon">
            <img src={icon} />
          </div>
        </>
      )}

      <span> {label} </span>
    </li>
  </>
);

export default DropdownItem;
