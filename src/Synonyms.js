import React from "react";
import "./Meaning.css";
export default function Synonyms(props) {
  console.log(props.synonyms.synonyms);
  return (
    <span className="synonyms">
      <h3 className="partOfSpeech  sss ">Synonyms:</h3>
      {props.synonyms.synonyms.map(function (synonym, index) {
        return (
          <li className="ssb" key={index}>
            {synonym},{" "}
          </li>
        );
      })}
    </span>
  );
}
