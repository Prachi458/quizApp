import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, quizLoad, quizResult } from "../redux/actions";
import ClipLoader from "react-spinners/ClipLoader";
const QuestionBox = ({ submitHandler, category, difficulty }) => {
  const dispatch = useDispatch();
  const questionBank = useSelector((state) => state.quiz.questionBank);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(quizLoad(data.results));
      });
  }, [category, difficulty, dispatch]);

  const computeAnswer = (answer, correct_answer) => {
    dispatch(quizResult(answer, correct_answer));
  };

  return (
    <div>
      <div className="question-container">
        <div className="title">Quiz App</div>
        {isLoading ? <ClipLoader size={100} /> : null}
        {questionBank.length > 0 &&
          questionBank.map((item) => {
            return (
              <div className="questionBox">
                <div className="question">{item.question}</div>
                {item.incorrect_answers.map((text) => (
                  <label key={item.index}>
                    <input
                      type="radio"
                      name={item.incorrect_answers}
                      value={text}
                      className="answerBtn"
                      onClick={() => {
                        computeAnswer(text, item.correct_answer);
                      }}
                    />

                    {text}
                  </label>
                ))}
                <label key={item.index}>
                  <input
                    type="radio"
                    name={item.incorrect_answers}
                    className="answerBtn"
                    value={item.correct_answer}
                    onClick={() => {
                      computeAnswer(item.correct_answer, item.correct_answer);
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
    </div>
  );
};
export default QuestionBox;
