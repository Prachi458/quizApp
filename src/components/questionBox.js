import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizLoad, quizResult, history } from "../redux/actions";

const QuestionBox = ({ category, difficulty }) => {
  const dispatch = useDispatch();
  const questionBank = useSelector((state) => state.quiz.questionBank);

  const enteredName = useSelector((state) => state.user.name);
  const enteredCategory = useSelector((state) => state.user.category);
  const enteredDifficulty = useSelector((state) => state.user.difficulty);
  const score = useSelector((state) => state.result.score);

  useEffect(() => {
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

  const submitHandler = () => {
    dispatch(
      history({
        name: enteredName,
        category: enteredCategory,
        difficulty: enteredDifficulty,
        score: score,
      })
    );
  };

  return (
    <div>
      <div className="question-container">
        <div className="title">Quiz App</div>

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
