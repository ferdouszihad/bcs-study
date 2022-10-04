import React from "react";
import userImage from "../../images/man.png";
import "./User.css";
import { GoLocation } from "react-icons/go";
const User = () => {
  return (
    <div className="user-container">
      <div className="user-profile">
        <div className="user-img">
          <img src={userImage} alt="" />
        </div>
        <div className="user-info">
          <h2 className="name">MD Nazmus Sakib</h2>
          <p className="address">
            <GoLocation></GoLocation> 332, BSMRH Hall , HSTU
          </p>
        </div>
      </div>
      <div className="user-details">
        <div className="age">
          <h1>27</h1>
          <p>Age</p>
        </div>
        <div className="Avarage">
          <h1>112</h1>
          <p>Mark</p>
        </div>
        <div className="age">
          <h1>98</h1>
          <p>Position</p>
        </div>
      </div>
    </div>
  );
};

export default User;
