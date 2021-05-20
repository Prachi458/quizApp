import React from "react";
import Quiz from "./quiz";

const Result = ({
  score,
  viewCorrectAnswers,
  name,
  questionBank,
  computeAnswer,
  responses,
  viewCorrect,
}) => {
  console.log(viewCorrect);
  return (
    <div className="score-board">
      <div className="score">
        {name} <br />
        You Scored {score} / 5 correct answers!!
      </div>
      <button className="viewAnswer-btn" onClick={viewCorrectAnswers}>
        View Correct Answers
      </button>
      {viewCorrect ? (
        <Quiz
          questionBank={questionBank}
          computeAnswer={computeAnswer}
          responses={responses}
          score={score}
        />
      ) : null}
    </div>
  );
};

export default Result;
