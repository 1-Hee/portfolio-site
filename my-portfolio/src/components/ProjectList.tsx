import { useEffect, useRef } from "react";

//import redux
import { useAppDispatch } from "../redux/hooks";
import { setProject } from "../redux/headerPosition";

// import components
import ProjectItem from "./ProjectItem";

import "../styles/css/ProjectList.css";

const ProjectList = () => {
  const pjtRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (pjtRef.current) {
      console.log(pjtRef.current.offsetTop);
      dispatch(setProject(pjtRef.current.offsetTop));
    }
  }, [pjtRef]);

  return (
    <div className="project-list" ref={pjtRef}>
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
