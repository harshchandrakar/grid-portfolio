import React from "react";
import classes from "./Style/Projects.module.css";
import Project from "./Utils/Project";
import { AllProject } from "../Helpers/AllProject";
function Projects() {
  return (
    <div className={classes.Projects}>
      {AllProject.map((data) => (
        <Project
          name={data.name}
          desc={data.desc}
          link={data.link}
          host={data.host}
          stack={data.stack}
        />
      ))}
    </div>
  );
}

export default Projects;
