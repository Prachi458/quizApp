import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.result.score);
  const usersData = useSelector(
    (state) => state.user.usersData[state.user.usersData.length - 1]
  );
  console.log(result);

  return (
    <div className="result-container">
      <div className="title">Quiz App</div>
      <div className="score-board">
        <div className="score">
          {usersData.name} <br />
          <p>You Scored {result} / 10 correct answers!!</p>
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
