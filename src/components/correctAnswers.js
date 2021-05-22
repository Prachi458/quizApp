import React from "react";

const CorrectAnswers = ({ questionBank }) => {
  return (
    <div>
      <div className="container">
        <div className="title">Quiz App</div>
        {questionBank.length > 0 &&
          questionBank.map(({ question, correct }) => (
            <div className="questionBox">
              <div className="question">{question}</div>
              <button className="answerBtn">{correct}</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CorrectAnswers;
