import React from "react";
import { Header } from "./header/Header";
import TaskContent from "./taskcontent/TaskContent";
import classes from "./TaskDetail.module.css";
import Input from "../../UI/Input";

const TaskDetail = () => {
  return (
    <div className={classes.taskdetail}>
      <Header />
      <TaskContent />
      <div className={classes.bottom}>
        <Input />
        <button className={classes.button}>Completed</button>
      </div>
    </div>
  );
};

export default TaskDetail;
