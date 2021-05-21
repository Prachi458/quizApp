import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, correct, viewCorrect }) => {
  const [answer, setAnswer] = useState(options);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleRadio = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <div className="questionBox">
        <div className="question">{question}</div>
        {!viewCorrect
          ? answer.map((text, index) => (
              <label key={index}>
                <input
                  className="answerBtn"
                  type="radio"
                  name={answer}
                  value={text}
                  onChange={(e) => handleRadio(e)}
                  onClick={() => {
                    selected(text);
                  }}
                />
                {text}
              </label>
            ))
          : null}

        {viewCorrect ? <button className="answerBtn">{correct}</button> : null}
      </div>
    </div>
  );
};
export default QuestionBox;
