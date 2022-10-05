import React, { useEffect, useState } from "react";
import StudyItem from "../StudyItem/StudyItem";
import User from "../User/User";
import "./Study.css";
import Header from "../Header/Header";
import Break from "../Break/Break";
import Summery from "../Summery/Summery";

const Study = () => {
  const [studyItems, setStudyItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [breakTime, setbreakTime] = useState("");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setStudyItems(data));
  }, []);

  const addTopic = (topicDetails) => {
    setTotal(total + topicDetails.studyTime);
  };
  const setBreakFromSummery = (data) => {
    console.log(data);
    setbreakTime(data);
  };
  return (
    <div className="Study-container">
      <div className="container">
        <Header></Header>
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
        <div className="study-information">
          <User></User>
          <Break setBreak={setBreakFromSummery}></Break>
          <Summery breakTime={breakTime} total={total}></Summery>
        </div>
      </div>
    </div>
  );
};

export default Study;
