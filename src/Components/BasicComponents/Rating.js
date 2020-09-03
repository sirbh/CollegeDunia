import React from "react";
import cssClasses from "./Rating.module.scss";

export default function Rating(props) {
  return (
    <div className={cssClasses.Rating}>
      <div>
  <h3>{props.rating}/</h3>
        <h4>5</h4>
  <p>{props.remark}</p>
      </div>
    </div>
  );
}
