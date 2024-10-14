import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Notifi.css";
import { faCircleCheck, faX } from "@fortawesome/free-solid-svg-icons";

const Notifi = (props) => {
  return (
    <div className={props.actives ? "notifi-con active" : "notifi-con"}>
      <FontAwesomeIcon
        icon={props.icons ? faCircleCheck : faX}
        style={{ color: props.icons ? "green" : "red" }}
        className="FontAwesomeIcon"
      />
      <h5>{props.message}</h5>
    </div>
  );
};

export default Notifi;
