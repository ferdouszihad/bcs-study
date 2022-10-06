import React from "react";
import "./Break.css";

const Break = ({ setBreak }) => {
  const breakTime = (event) => {
    //console.log(event);
    const time = event.target.childNodes[0].textContent;

    setBreak(time.slice(0, 2));
  };
  return (
    <div>
      <h3>Add a Break</h3>

      <div className="break-container">
        <div className="break-time" id="break" onClick={breakTime}>
          <p id="b10">10m</p>
          <p id="b20">20m</p>
          <p id="b30">30m</p>
          <p id="b40">40m</p>
          <p id="b50">50m</p>
        </div>
      </div>
    </div>
  );
};

export default Break;
