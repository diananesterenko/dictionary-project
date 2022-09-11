import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import "./Meaning.css";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div classname="results ">
        <div className="box phonetic">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </div>

        <Photos photos={props.photos} />

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
