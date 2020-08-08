import React from "react";
import "./Navbar.css";
import Button from "../Sidebar/Button";


const Navbar = (props) => (
  <header className="navbar">
    <div className="dashboard">
      <h1>
        <b>AKHIL NAZIM KT</b>
      </h1>
    </div>
    <nav className="nav_nav">
        <Button click={props.clickHandler}/>
      <div></div>
      <div className="navbar_logo">
        <a href="#">DASHBOARD</a>
      </div>
      <div className="spacer"></div>

      <div className="nav_nav_items">
        <ul>
          <li>
            <a href="https://github.com/Akhilnazim?tab=repositories">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akhil-nazim-kt-8b143818b/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Navbar;
