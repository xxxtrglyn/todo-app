import React from "react";
import SideBar from "../sidebar/SideBar";
import TaskDetail from "../taskdetail/TaskDetail";
import TaskList from "../tasklist/TaskList";
import classes from "./Wrapper.module.css";

const Wrapper = () => {
  return (
    <div className={classes.wrapper}>
      <SideBar />
      <TaskList />
      <TaskDetail />
    </div>
  );
};

export default Wrapper;
