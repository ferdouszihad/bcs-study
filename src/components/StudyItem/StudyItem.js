import React, { useState } from "react";
import "./StudyItem.css";

const StudyItem = ({ details, addTopic }) => {
  const { img, name, studyTime, distribution } = details;
  const [btnText, setBtnText] = useState("Add to the list");
  const [btnclass, setBtnclass] = useState("card-btn");

  return (
    <div className="study-item-card">
      <div className="card-body">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-text">
          <h3>{name}</h3>
          {/* <p className="details">{shortDetail}</p> */}
          <p>
            <strong>Number :</strong> {distribution}
          </p>
          <p>
            <strong>Study time :</strong> {studyTime} minute
          </p>
        </div>
      </div>
      <div className="card-footer">
        <button
          className={btnclass}
          onClick={() => {
            addTopic(details);
            setBtnText("Topic added!!");
            setBtnclass(btnclass + " added");
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default StudyItem;
