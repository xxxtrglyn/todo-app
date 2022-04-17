import React from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.count}>13/54</div>
      <div className={classes.progressbar}></div>
    </div>
  );
};

export default ProgressBar;
