import React from "react";
import { Link } from "react-router-dom";
import Error from "./error";

const Result = ({ score, name, category, difficulty }) => {
  if (name === "" || category === "" || difficulty === "") {
    return <Error />;
  }
  return (
    <div className="result-container">
      <div className="title">Quiz App</div>
      <div className="score-board">
        <div className="score">
          {name} <br />
          You Scored {score} / 10 correct answers!!
        </div>
        <Link to="/correct-answers">
          <button type="submit" className="viewAnswer-btn">
            View Correct Answers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
