import React from "react";
import { Link } from "react-router-dom";
import Error from "./error";

const QuestionBox = ({
  selected,
  questionBank,
  name,
  category,
  difficulty,
  submitHandler,
}) => {
  if (name === "" || category === "" || difficulty === "") {
    return <Error />;
  }
  return (
    <div className="question-container">
      <div className="title">Quiz App</div>
      {questionBank.results.length > 0 &&
        questionBank.results.map((item) => {
          return (
            <div className="questionBox">
              <div className="question">{item.question}</div>
              {item.incorrect_answers.map((text) => (
                <label key={item.index}>
                  <input
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

      <button
        type="submit"
        onClick={submitHandler}
        className="form__submit-btn"
      >
        <Link to="/result" className="link-class">
          Submit
        </Link>
      </button>
    </div>
  );
};
export default QuestionBox;
