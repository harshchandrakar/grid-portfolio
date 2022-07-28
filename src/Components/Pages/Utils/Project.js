import GitHub from "@mui/icons-material/GitHub";
import React from "react";
import classes from "../Style/Projects.module.css";
import Typewriter from "typewriter-effect";
import Link from "@mui/material/Link";
import Skill from "./Skill";
function Project(props) {
  return (
    <div className={classes.Project}>
      <a href={props.host}>
        <Typewriter
          options={{
            strings: [props.name],
            autoStart: true,
            loop: true,
            pauseFor: 20000000,
          }}
        />
      </a>
      <br />
      <p>{props.desc}</p>
      <br />
      <h1 className={classes.used}>Used :</h1>
      <div className={classes.stack}>
        <div>
          {props.stack.map((data) => (
            <Skill skill={data} />
          ))}
        </div>

        <Link href={props.link} sx={{ alignSelf: "center", mr: "1em" }}>
          <GitHub sx={{ ml: "2rem", color: "#c2c2c2", translateY: "50%" }} />
        </Link>
      </div>
    </div>
  );
}

export default Project;
