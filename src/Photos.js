import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-sm-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  className="Photo img-fluid"
                  src={photo.src.landscape}
                  alt="img"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
