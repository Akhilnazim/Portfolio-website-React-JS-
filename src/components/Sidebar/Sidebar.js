import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
    let barClasses= 'sidebar';
    if (props.show) {
        barClasses = 'sidebar open';
    }
  return (
    <nav className={barClasses}>
      <ul>
        <li>Email: nazimthayyil7693@gmail.com</li>
        <li>Phone: 7907809278</li>
        <li>Address: Thayyil house Ramanattukara</li>
      </ul>
    </nav>
  );
};
export default Sidebar;
