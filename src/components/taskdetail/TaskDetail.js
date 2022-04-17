import React from "react";
import { Header } from "./header/Header";
import classes from "./TaskDetail.module.css";

const TaskDetail = () => {
  return (
    <div className={classes.taskdetail}>
      <Header />
    </div>
  );
};

export default TaskDetail;
