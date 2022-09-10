import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div classname="results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <span className="synonyms">
          <Synonyms synonyms={props.results.meanings[0]} />
        </span>
      </div>
    );
  } else {
    return null;
  }
}
