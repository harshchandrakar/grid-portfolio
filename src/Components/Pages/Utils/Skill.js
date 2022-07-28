import React from "react";
import classes from "../Style/Skill.module.css";

function Skill(props) {
  return (
    <div className={classes.Skill}>
      <h1>{props.skill}</h1>
    </div>
  );
}

export default Skill;
