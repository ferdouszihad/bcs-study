import React from "react";
import "./Break.css";

const Break = () => {
  return (
    <div>
      <h3>Add a Break</h3>
      <div className="break-container">
        <div className="break-time">
          <p>10m</p>
          <p>20m</p>
          <p>30m</p>
          <p>40m</p>
          <p>50m</p>
        </div>
      </div>
      <div className="work-container">
        <h3>Study details</h3>

        <div className="study-box">
          <p>Study Time</p>
          <h4>
            <span>0</span> hour
          </h4>
        </div>
        <div className="break-box">
          <p>Break Time</p>
          <h4>
            <span>0</span> min
          </h4>
        </div>
      </div>
      <div className="complete-btn">
        <button className="card-btn">Study completed</button>
      </div>
    </div>
  );
};

export default Break;
