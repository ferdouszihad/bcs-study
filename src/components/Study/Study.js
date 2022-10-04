import React, { useEffect, useState } from "react";
import StudyItem from "../StudyItem/StudyItem";
import User from "../User/User";
import "./Study.css";
import logo from "../../images/logo.png";
import Header from "../Header/Header";
import Break from "../Break/Break";

const Study = () => {
  const [studyItems, setStudyItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudyItems(data));
  }, []);
  return (
    <div className="Study-container">
      <div className="container">
        <Header></Header>
        <h3 className="title">Add Study Topics to your list</h3>
        <div className="study-items-container">
          {studyItems.map((studyItem) => (
            <StudyItem details={studyItem} key={studyItem.id}></StudyItem>
          ))}
        </div>
      </div>

      <div className="study-information-container">
        <div className="study-information">
          <User></User>
          <Break></Break>
        </div>
      </div>
    </div>
  );
};

export default Study;
