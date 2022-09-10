import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span>
      <a className="listen" href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <span className="transcr">{props.phonetic.text}</span>
    </span>
  );
}
