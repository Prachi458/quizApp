import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, correct, viewCorrect }) => {
  const [answer, setAnswer] = useState(options);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {!viewCorrect
        ? answer.map((text, index) => (
            <button
              key={index}
              className="answerBtn"
              onClick={() => {
                setAnswer([text]);
                selected(text);
              }}
            >
              {text}
            </button>
          ))
        : null}
      {viewCorrect ? <button className="answerBtn">{correct}</button> : null}
    </div>
  );
};
export default QuestionBox;
