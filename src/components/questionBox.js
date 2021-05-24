import React from "react";
import { Link } from "react-router-dom";

const QuestionBox = ({ selected, questionBank }) => {
  console.log(questionBank.results);
  return (
    <div className="container">
      <div className="title">Quiz App</div>
      {questionBank.results.length > 0 &&
        questionBank.results.map((item) => {
          return (
            <div className="questionBox">
              <div className="question">{item.question}</div>
              {item.incorrect_answers.map((text) => (
                <label key={item.index}>
                  <input
                    className="answerBtn"
                    type="radio"
                    name={item.incorrect_answers}
                    value={text}
                    onClick={() => {
                      selected(text);
                    }}
                  />

                  {text}
                </label>
              ))}
              <label>
                <input
                  type="radio"
                  name={item.incorrect_answers}
                  className="answerBtn"
                  value={item.correct_answer}
                  onClick={() => {
                    selected();
                  }}
                />
                {item.correct_answer}
              </label>
            </div>
          );
        })}
      <button className="submitBtn">
        <Link to="/result" className="link-class">
          Submit
        </Link>
      </button>
    </div>
  );
};
export default QuestionBox;
