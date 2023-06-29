import React from "react";

import dateIcon from "../assets/personals/pj-date.png";

// temp
import sampleImage from "../assets/background.png";
// import class
import { Project } from "../constant/ProjectInfo";

import "../styles/css/ProjectItem.css";

const getBadgeType = (type: string): string => {
  switch (type) {
    case "Android":
      return "android";
    case "Web-Application":
      return "web-app";
    default:
      return "def-type";
  }
};

const ProjectItem = ({ project = new Project() }) => {
  return (
    <div
      className="project-item"
      onClick={(e) => {
        window.location.href = project.url;
      }}
    >
      <div
        className="project-thumbnail"
        style={{ background: `url(${project.imgURL})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="project-infos">
        <p className="project-name sunshine-bold">{project.name}</p>
        <div className="date-text">
          <img className="date-icon" style={{ content: `url(${dateIcon})` }} alt="date-icon" />
          <p>{project.startDate + " ~ " + project.endDate}</p>
        </div>
        <div className={`pj-type-badge ${getBadgeType(project.type)}`}>
          <p>{project.type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
