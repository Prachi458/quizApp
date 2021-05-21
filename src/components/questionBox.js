import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, correct, viewCorrect }) => {
  const [answer, setAnswer] = useState(options);

  return (
    <div>
      <div className="questionBox">
        <div className="question">{question}</div>
        {!viewCorrect
          ? answer.map((text, index) => (
              <label>
                <input
                  className="answerBtn"
                  type="radio"
                  name="answers"
                  value={text}
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
