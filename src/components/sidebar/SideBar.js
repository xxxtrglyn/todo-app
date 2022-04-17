import React from "react";
import classes from "./SideBar.module.css";
import avatar from "../../assets/avatar.jpg";
import {
  IoSettingsOutline,
  IoMailOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.profile}>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <div>Trương Văn Luyn</div>
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
    </div>
  );
};

export default SideBar;
