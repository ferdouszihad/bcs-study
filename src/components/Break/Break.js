import React from "react";
import "./Break.css";

const Break = ({ setBreak }) => {
  const breakTime = (event) => {
    console.log(event);
    const time = event.target.childNodes[0].textContent;

    setBreak(time.slice(0, 2));
  };
  return (
    <div>
      <h3>Add a Break</h3>

      <div className="break-container">
        <div className="break-time" id="break" onClick={breakTime}>
          <p>20m</p>
          <p>10m</p>
          <p>30m</p>
          <p>40m</p>
          <p>50m</p>
        </div>
      </div>
    </div>
  );
};

export default Break;
