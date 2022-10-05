import React from "react";
import "./Summery.css";

const Summery = (props) => {
  const { total, breakTime } = props;
  return (
    <div>
      <div className="work-container">
        <h3>Study details</h3>

        <div className="study-box">
          <p>Study Time</p>
          <h4>
            <span style={{ color: "green" }}>{total}</span> minute
          </h4>
        </div>
        <div className="break-box">
          <p>Break Time</p>
          <h4>
            <span style={{ color: "green" }}>{breakTime}</span> minute
          </h4>
        </div>
      </div>
      <div className="complete-btn">
        <button className="card-btn">Study completed</button>
        <a href="#study-main" className="card-btn user-btn">
          Back to top
        </a>
      </div>
    </div>
  );
};

export default Summery;
