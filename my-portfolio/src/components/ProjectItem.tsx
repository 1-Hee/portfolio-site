import React from "react";

import dateIcon from "../assets/personals/pj-date.png";

// temp
import sampleImage from "../assets/background.png";

import "../styles/css/ProjectItem.css";

const pjName = "무슨무슨프로젝트";
const pjDate = "2023. 01. 01. ~ 2023. 02. 02.";
const pjType = "WEB-APPLICATION";
const badgeColor = "#E1F4FF";

const ProjectItem = () => {
  return (
    <div className="project-item">
      <div
        className="project-thumbnail"
        style={{ background: `url(${sampleImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="project-infos">
        <p className="project-name sunshine-bold">{pjName}</p>
        <div className="date-text">
          <img className="date-icon" style={{ content: `url(${dateIcon})` }} alt="date-icon" />
          <p>{pjDate}</p>
        </div>
        <div className="pj-type-badge" style={{ backgroundColor: `${badgeColor}` }}>
          <p>{pjType}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
