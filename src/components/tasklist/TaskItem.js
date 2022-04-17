import React from "react";
import classes from "./TaskItem.module.css";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import avatar from "../../assets/avatar.jpg";

const TaskItem = () => {
  return (
    <div className={classes.taskitem}>
      <span className={classes.icon}>
        <IoChevronDownCircleOutline />
      </span>
      <div className={classes.content}>
        <div className={classes.title}>Create a dummy todo app</div>
        <div>14 Aug, 2022</div>
      </div>
      <img src={avatar} className={classes.avatar} alt="av1" />
    </div>
  );
};

export default TaskItem;
