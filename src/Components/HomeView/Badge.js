import React from "react";
import classes from "./Style/Badge.module.css";
import bdg from "./Image/Badge.png";
function Badge() {
  return (
    <div className={classes.Badge}>
      <img src={bdg} alt="Badge" />
    </div>
  );
}

export default Badge;
