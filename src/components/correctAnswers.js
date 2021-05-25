import React from "react";
import Error from "./error";

const CorrectAnswers = ({ questionBank, name, category, difficulty }) => {
  if (name === "" || category === "" || difficulty === "") {
    return <Error />;
  }
  return (
    <div>
      <div className="correct-answer-container">
        <div className="title">Quiz App</div>
        {questionBank.results.length > 0 &&
          questionBank.results.map((item) => (
            <div className="questionBox">
              <div className="question">{item.question}</div>
              <button className="answerBtn">{item.correct_answer}</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CorrectAnswers;
