import React from "react";
import "./AddBtn.css";

const AddBtn = props =>
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />;

export default AddBtn;
