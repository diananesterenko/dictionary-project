import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <span className="phonetic">
      <a
        className="listen"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        Listen
      </a>
      <span className="transcr">{props.phonetic.text}</span>
    </span>
  );
}
