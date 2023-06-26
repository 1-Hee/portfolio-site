import React from "react";

import "../styles/css/Header.css";

function Header() {
  return (
    <div className="header">
      <p className="header-title">1-Hee</p>
      <div className="right-menu">
        <p>Introduce</p>
        <p>Skills</p>
        <p>Project</p>
        <p>Blog & GitHubs</p>
      </div>
    </div>
  );
}

export default Header;
