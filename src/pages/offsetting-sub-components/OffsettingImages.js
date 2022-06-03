import React from "react";

function OffsettingImages(props) {
  return (
    <div>
      <h5>{props.name}</h5>
      <img src={props.imgURL} alt={props.name} className="offsetting_images" />
    </div>
  );
}

export default OffsettingImages;
