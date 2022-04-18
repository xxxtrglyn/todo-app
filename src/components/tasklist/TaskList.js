import React from "react";
import Button from "../../UI/Button";
import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TaskList = () => {
  return (
    <div className={classes.tasklist}>
      <h2 className={classes.title}>TASKS</h2>
      <div className={classes.list}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>

      <div className={classes.item}>
        <Button label="Add task"></Button>
      </div>
    </div>
  );
};

export default TaskList;
