import React from "react";

// import components
import ProjectItem from "./ProjectItem";

import "../styles/css/ProjectList.css";

const ProjectList = () => {
  return (
    <div className="project-list">
      <p className="project-title">PROJECTS</p>
      <div className="project-frame scroll">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((e, i) => (
          <ProjectItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
