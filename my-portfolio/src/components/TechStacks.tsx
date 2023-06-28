import { useEffect, useRef } from "react";

//import redux
import { useAppDispatch } from "../redux/hooks";
import { setTech } from "../redux/headerPosition";

//import image
// web-base-skills;
import htmlIcon from "../assets/skill-icons/html.png";
import cssIcon from "../assets/skill-icons/css.png";
import jsIcon from "../assets/skill-icons/javascript.png";
// web-frameworks
import reactIcon from "../assets/skill-icons/react.png";
import tsIcon from "../assets/skill-icons/typescript.png";
import sassIcon from "../assets/skill-icons/sass.png";
import vueIcon from "../assets/skill-icons/vue.png";
import vuexIcon from "../assets/skill-icons/vuex.png";
import reduxIcon from "../assets/skill-icons/redux.png";
// android-stacks
import javaIcon from "../assets/skill-icons/java.png";
import ktIcon from "../assets/skill-icons/kotlin.png";
import asIcon from "../assets/skill-icons/android-studio.png";
import rtfIcon from "../assets/skill-icons/retrofit2.png";
import jtpIcon from "../assets/skill-icons/jetpack.png";
import compIcon from "../assets/skill-icons/compose.png";
import fcmIcon from "../assets/skill-icons/fcm.png";
// communication skill
import notionIcon from "../assets/skill-icons/notion.png";
import jiraIcon from "../assets/skill-icons/jira.png";
// config management skill
import gitIcon from "../assets/skill-icons/git.png";
import gitlabIcon from "../assets/skill-icons/gitlab.png";
import gitHubIcon from "../assets/skill-icons/github.png";

import "../styles/css/TechStacks.css";

const TechStacks = () => {
  const techRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (techRef.current) {
      console.log(techRef.current.offsetTop);
      dispatch(setTech(techRef.current.offsetTop));
    }
  }, [techRef]);

  return (
    <div className="tech-board" ref={techRef}>
      <p className="tech-skill-title">TECH-SKILLS</p>
      <div className="top-skill-board">
        <div className="front-skills tech-card-item">
          <p className="tech-title-text">Front-End</p>
          <hr className="title-line"></hr>
          <div className="web-base-skill">
            <img style={{ content: `url(${htmlIcon})` }} alt="html" />
            <img style={{ content: `url(${cssIcon})` }} alt="css" />
            <img style={{ content: `url(${jsIcon})` }} alt="js" />
          </div>
          <img className="react-icon" style={{ content: `url(${reactIcon})` }} alt="react" />
          <div className="redux-ts-sass-div">
            <img style={{ content: `url(${reduxIcon})` }} alt="redux" />
            <img style={{ content: `url(${tsIcon})` }} alt="ts" />
            <img style={{ content: `url(${sassIcon})` }} alt="sass" />
          </div>
          <div className="vue-stacks">
            <img style={{ content: `url(${vueIcon})` }} alt="vue" />
            <img style={{ content: `url(${vuexIcon})` }} alt="vuex" />
          </div>
        </div>
        <div className="android-skills tech-card-item">
          <p className="tech-title-text">Android</p>
          <hr className="title-line"></hr>
          <div className="and-top-skills">
            <img style={{ content: `url(${javaIcon})` }} alt="java" />
            <img style={{ content: `url(${ktIcon})` }} alt="kt" />
            <img style={{ content: `url(${asIcon})` }} alt="android-studio" />
          </div>
          <img className="retrofit-icon" style={{ content: `url(${rtfIcon})` }} alt="retrofit2" />
          <div className="and-bottom-skills">
            <img style={{ content: `url(${jtpIcon})` }} alt="jetpack" />
            <img style={{ content: `url(${compIcon})` }} alt="compose" />
            <img style={{ content: `url(${fcmIcon})` }} alt="fcm" />
          </div>
        </div>
      </div>
      <div className="bottom-skill-board">
        <div className="communication-tools tech-card-item">
          <p className="tech-title-text">Communication Tools</p>
          <hr className="title-line"></hr>
          <div className="communication-skills">
            <img style={{ content: `url(${notionIcon})` }} alt="notion" />
            <img style={{ content: `url(${jiraIcon})` }} alt="jira" />
          </div>
        </div>
        <div className="config-management tech-card-item">
          <p className="tech-title-text">Configuration Management</p>
          <hr className="title-line"></hr>
          <div className="config-icons">
            <img style={{ content: `url(${gitlabIcon})` }} alt="gitlab" />
            <div className="config-bottom-skills">
              <img style={{ content: `url(${gitHubIcon})` }} alt="github" />
              <img style={{ content: `url(${gitIcon})` }} alt="git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
