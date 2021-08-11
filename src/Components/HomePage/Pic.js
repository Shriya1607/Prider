import React from "react";
import "./pic.css"

function Pic() {
  return (
    <div className="pic">
      <img
        src={process.env.PUBLIC_URL + "/pride1.jpg"}
        className="picture"
      ></img>
    </div>
  );
}

export default Pic;
