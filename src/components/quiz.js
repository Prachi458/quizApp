import React from "react";
import QuestionBox from "./questionBox";
import Result from "./result";

const Quiz = ({
  questionBank,
  computeAnswer,
  responses,
  score,
  name,
  viewCorrectAnswers,
  viewCorrect,
}) => {
  return (
    <div className="container">
      <div className="title">Quiz App</div>
      {questionBank.length > 0 &&
        responses < 5 &&
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
      {responses === 5 ? (
        <Result
          score={score}
          name={name}
          questionBank={questionBank}
          computeAnswer={computeAnswer}
          responses={responses}
          viewCorrectAnswers={viewCorrectAnswers}
          viewCorrect={viewCorrect}
        />
      ) : null}
    </div>
  );
};

export default Quiz;
