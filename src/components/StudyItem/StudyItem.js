import React from "react";
import "./StudyItem.css";

const StudyItem = (props) => {
  const { img, name, studyTime, distribution } = props.details;
  return (
    <div class="study-item-card">
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
            <strong>Study time :</strong> {studyTime} hour
          </p>
        </div>
      </div>
      <div className="card-footer">
        <button className="card-btn">Add to list</button>
      </div>
    </div>
  );
};

export default StudyItem;
