import React from "react";
import { Link } from "react-router-dom";

const Result = ({ score, name }) => {
  return (
    <div className="result-container">
      <div className="title">Quiz App</div>
      <div className="score-board">
        <div className="score">
          {name} <br />
          You Scored {score} / 10 correct answers!!
        </div>
        <button className="viewAnswer-btn">
          <Link to="/correct-answers" className="link-class">
            View Correct Answers
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Result;
