import React from "react";
export default function Definition(props) {
  if (props.definition) {
    return (
      <span>
        <strong>Definition: </strong>
        {props.definition}
      </span>
    );
  } else {
    return null;
  }
}
