import { useEffect, useRef } from "react";

//import redux
import { useAppDispatch } from "../redux/hooks";
import { setProject } from "../redux/headerPosition";

//import data
import { pjtInfos } from "../constant/ProjectInfo";

// import components
import ProjectItem from "./ProjectItem";

import "../styles/css/ProjectList.css";

const ProjectList = () => {
  const pjtRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pjtRef.current) {
      dispatch(setProject(pjtRef.current.offsetTop));
    }
  }, [pjtRef]);

  return (
    <div className="project-list" ref={pjtRef}>
      <p className="project-title">PROJECTS</p>
      <div className="project-frame scroll">
        {pjtInfos.map((e, i) => (
          <ProjectItem key={i} project={e} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
