import React from "react";
import classes from "./SideBar.module.css";
import avatar from "../../assets/avatar.jpg";
import {
  IoSettingsOutline,
  IoMailOutline,
  IoNotificationsOutline,
  IoChevronDownCircleOutline,
} from "react-icons/io5";
import ProgressBar from "../progressbar/ProgressBar";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.profile}>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <div className={classes.fullname}>
          <span>Trương Văn Luyn</span>
        </div>
        <div>xxxtrglyn@gmail.com</div>
      </div>
      <div>
        <span className={classes.icon}>
          <IoSettingsOutline />
        </span>
        <span className={classes.icon}>
          <IoMailOutline />
        </span>
        <span className={classes.icon}>
          <IoNotificationsOutline />
        </span>
      </div>
      <ProgressBar />
      <div className={classes.taskwrapper}>
        <div className={classes.taskscount}>
          <div className={classes.taskstracker}>
            <span className={classes.number}>12</span>
            <span className={classes.status}>Completed</span>
            <span className={classes.small}>tasks</span>
          </div>
        </div>
        <div className={classes.taskscount}>
          <div className={classes.taskstracker}>
            <span className={classes.number}>12</span>
            <span className={classes.status}>To do</span>
            <span className={classes.small}>tasks</span>
          </div>
        </div>
        <div className={classes.taskscount}>
          <div className={classes.taskstracker}>
            <span className={classes.number}>12</span>
            <span className={classes.status}>All</span>
            <span className={classes.small}>completed</span>
          </div>
        </div>
      </div>

      <div className={classes.project}>
        <h2>PROJECT</h2>
        <div className={classes.job}>
          <IoChevronDownCircleOutline />
          <span> Marketing</span>
        </div>
        <div className={classes.job}>
          <IoChevronDownCircleOutline />
          <span> Design</span>
        </div>
        <div className={classes.job}>
          <IoChevronDownCircleOutline />
          <span> Development</span>
        </div>
        <div className={classes.job}>
          <IoChevronDownCircleOutline />
          <span> Management</span>
        </div>
      </div>

      <div className={classes.team}>
        <h2>TEAM</h2>
        <img className={classes.teammember} src={avatar} alt="avatar" />
        <img className={classes.teammember} src={avatar} alt="avatar" />
        <img className={classes.teammember} src={avatar} alt="avatar" />
        <img className={classes.teammember} src={avatar} alt="avatar" />
        <img className={classes.teammember} src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default SideBar;
