import { FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import { quizResult } from "../redux/actions";

const SingleQuestion = ({ item, dispatch }) => {
  const [answerValue, setAnswerValue] = useState("");

  const computeAnswer = (answer, correct_answer) => {
    dispatch(quizResult(answer, correct_answer));
  };

  const handleChange = (event) => {
    setAnswerValue(event.target.value);
  };

  return (
    <Grid item className="questionBox">
      <Grid item className="question">
        {item.question}
      </Grid>
      <Grid item>
        {item.incorrect_answers.map((text) => (
          <RadioGroup
            name={item.incorrect_answers}
            value={answerValue}
            onChange={(e) => handleChange(e)}
            onClick={() => {
              computeAnswer(text, item.correct_answer);
            }}
          >
            <FormControlLabel value={text} control={<Radio />} label={text} />
          </RadioGroup>
        ))}

        <RadioGroup
          name={item.incorrect_answers}
          value={answerValue}
          onChange={(e) => handleChange(e)}
          onClick={() => {
            computeAnswer(item.correct_answer, item.correct_answer);
          }}
        >
          <FormControlLabel
            value={item.correct_answer}
            control={<Radio />}
            label={item.correct_answer}
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default SingleQuestion;
