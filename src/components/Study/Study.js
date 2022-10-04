import React, { useEffect, useState } from "react";
import StudyItem from "../StudyItem/StudyItem";
import "./Study.css";

const Study = () => {
  const [studyItems, setStudyItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudyItems(data));
  }, []);
  return (
    <div className="Study-container">
      <div className="study-items-container container">
        {studyItems.map((studyItem) => (
          <StudyItem details={studyItem} key={studyItem.id}></StudyItem>
        ))}
      </div>
      <div className="study-information-container">Comp2</div>
    </div>
  );
};

export default Study;
