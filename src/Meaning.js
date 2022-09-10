import React from "react";
import "./Meaning.css";

import Definition from "./Definition";
import Example from "./Example";
export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3 className="partOfSpeech ">{props.meaning.partOfSpeech}:</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <Definition definition={definition.definition} />
              <br />
              <Example example={definition.example} />
              <br />
            </p>
          </div>
        );
      })}

      <p>{props.meaning.definitions[0].definition}</p>
      <p> {props.meaning.definitions[0].example}</p>
    </div>
  );
}
