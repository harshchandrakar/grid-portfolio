import React from "react";
import classes from "./Style/GridView.module.css";
import { useNavigate } from "react-router-dom";
function GridView() {
  const navigate = useNavigate();
  return (
    <div className={classes.GridView}>
      <div
        className={`${classes.grid} ${classes.grid1}`}
        onClick={() => {
          navigate("/profile");
        }}
      >
        <div className={classes.header}>
          <h1>My Profile</h1>
        </div>

        <iframe
          className={classes.frame}
          scrolling="no"
          src="/profile"
          title="W3Schools Free Online Web Tutorials"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
      <div
        className={`${classes.grid} ${classes.grid2}`}
        onClick={() => {
          navigate("/projects");
        }}
      >
        <div className={classes.header}>
          <h1>Projects</h1>
        </div>
        <iframe
          className={classes.frame}
          scrolling="no"
          src="/projects"
          title="W3Schools Free Online Web Tutorials"
          onClick={() => {
            navigate("/projects");
          }}
        />
      </div>
      <div className={`${classes.grid} ${classes.grid3}`}>
        <div className={classes.header}>
          <h1>Hobbies</h1>
        </div>
      </div>
      <div className={`${classes.grid} ${classes.grid4}`}>
        <div className={classes.header}>
          <h1> Achievements</h1>
        </div>
      </div>
    </div>
  );
}

export default GridView;
