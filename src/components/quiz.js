import React from "react";
import QuestionBox from "./questionBox";
import Result from "./result";

const Quiz = ({
  questionBank,
  computeAnswer,
  score,
  name,
  viewCorrectAnswers,
  viewCorrect,
  isResult,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <div className="title">Quiz App</div>
      {questionBank.length > 0 &&
        !isResult &&
        questionBank.map(({ question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={answers}
            correct={correct}
            key={questionId}
            viewCorrect={viewCorrect}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        ))}

      {isResult ? (
        <Result
          score={score}
          name={name}
          questionBank={questionBank}
          computeAnswer={computeAnswer}
          viewCorrectAnswers={viewCorrectAnswers}
          viewCorrect={viewCorrect}
        />
      ) : null}
      {!viewCorrect && !isResult ? (
        <button onClick={handleSubmit} className="submitBtn">
          Submit
        </button>
      ) : null}
    </div>
  );
};

export default Quiz;
