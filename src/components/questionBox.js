import React from "react";
import { Link } from "react-router-dom";

const QuestionBox = ({ selected, questionBank }) => {
  return (
    <div className="container">
      <div className="title">Quiz App</div>
      {questionBank.length > 0 &&
        questionBank.map(({ question, answers, correct, questionId }) => (
          <div className="questionBox">
            <div className="question">{question}</div>
            {answers.map((text) => (
              <label key={questionId}>
                <input
                  className="answerBtn"
                  type="radio"
                  name={answers}
                  value={text}
                  onClick={() => {
                    selected(text, correct);
                  }}
                />
                {text}
              </label>
            ))}
          </div>
        ))}
      <button className="submitBtn">
        <Link to="/result" className="link-class">
          Submit
        </Link>
      </button>
    </div>
  );
};
export default QuestionBox;
