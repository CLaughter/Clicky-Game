import React from "react";
import "./style.css";

function Images(props) {
  return (
    <div className="img-container">
      <img
        src={`img/${props.image.imgURL}`}
        alt="HDMotorcycles"
        onClick={() => props.clicked(props.image.id)}
      ></img>
    </div>
  );
}

export default Images;
