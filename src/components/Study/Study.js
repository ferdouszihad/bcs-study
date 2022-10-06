import React, { useEffect, useState } from "react";
import StudyItem from "../StudyItem/StudyItem";
import User from "../User/User";
import "./Study.css";
import Header from "../Header/Header";
import Break from "../Break/Break";
import Summery from "../Summery/Summery";
import { addToDb, getFromDb } from "../Utilites/LocalDb";

const Study = () => {
  const [studyItems, setStudyItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [breakTime, setbreakTime] = useState("0");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudyItems(data));
  }, []);

  useEffect(() => {
    const previousData = getFromDb();
    if (previousData) {
      setbreakTime(previousData);
    } else {
      setbreakTime("0");
    }
  }, [breakTime]);

  const addTopic = (topicDetails) => {
    setTotal(total + topicDetails.studyTime);
    addToDb(topicDetails);
  };
  const setBreakFromSummery = (data) => {
    setbreakTime(data);
    addToDb(data);
  };
  return (
    <div className="Study-container">
      <div className="study-main container" id="study-main">
        <Header></Header>
        <a href="#user" className="card-btn user-btn">
          See User Information
        </a>
        <h3 className="title">Add Study Topics to your list</h3>
        <div className="study-items-container">
          {studyItems.map((studyItem) => (
            <StudyItem
              details={studyItem}
              key={studyItem.id}
              addTopic={addTopic}
            ></StudyItem>
          ))}
        </div>
      </div>

      <div className="study-information-container">
        <div id="user" className="study-information">
          <User></User>
          <div className="test-p">
            <Break setBreak={setBreakFromSummery}></Break>
            <Summery breakTime={breakTime} total={total}></Summery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
