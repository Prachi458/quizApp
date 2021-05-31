import React from "react";
import { useSelector } from "react-redux";

const CorrectAnswers = () => {
  const questionBank = useSelector((state) => state.quiz.questionBank);
  return (
    <div>
      <div className="correct-answer-container">
        <div className="title">Quiz App</div>
        {questionBank.length > 0 &&
          questionBank.map((item) => (
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
