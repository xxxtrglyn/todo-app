import React from "react";
import classes from "./Header.module.css";
import avatar from "../../../assets/avatar.jpg";
import {
  IoTrashOutline,
  IoPersonOutline,
  IoPricetagOutline,
  IoPaperPlaneSharp,
  IoPower,
} from "react-icons/io5";

export const Header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.avatar} src={avatar} alt="avt" />
      <span className={classes.name}>Luyn Trương</span>
      <div className={classes.iconleft}>
        <span className={classes.icon}>
          <IoTrashOutline />
        </span>
        <span className={classes.icon}>
          <IoPersonOutline />
        </span>
        <span className={classes.icon}>
          <IoPricetagOutline />
        </span>
        <span className={classes.icon}>
          <IoPaperPlaneSharp />
        </span>
        <span className={classes.icon}>
          <IoPower />
        </span>
      </div>
    </div>
  );
};
