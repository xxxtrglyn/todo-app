import React from "react";
import classes from "./TaskContent.module.css";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const TaskContent = () => {
  return (
    <div className={classes.taskcontent}>
      <div className={classes.header}>
        <span className={classes.icon}>
          <IoChevronDownCircleOutline />
        </span>
        <div className={classes.titlerow}>
          <span className={classes.title}>
            Write an article about design trends
          </span>
          <span className={classes.date}>14 Aug, 2022</span>
        </div>
      </div>

      <p className={classes.content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className={classes.taskstatus}>
        <span className={classes.iconcompleted}>
          <IoChevronDownCircleOutline />
        </span>
        <span className={classes.completed}>Luyn completed this task</span>
        <span className={classes.datecompleted}>15 Aug, 2022</span>
      </div>
    </div>
  );
};

export default TaskContent;
