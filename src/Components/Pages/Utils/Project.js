import GitHub from "@mui/icons-material/GitHub";
import React from "react";
import classes from "../Style/Projects.module.css";
import Typewriter from "typewriter-effect";
import Link from "@mui/material/Link";
import Skill from "./Skill";
import { useSpring, animated as A } from "react-spring";
function Project(props) {
  const animatedProps = useSpring({
    from: { marginLeft: -200, opacity: 0 },
    opacity: 1,
    marginLeft: 0,
    config: { mass: 1, tension: 140, friction: 42 },
  });
  return (
    <A.div className={classes.Project} style={{ ...animatedProps }}>
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
    </A.div>
  );
}

export default Project;
