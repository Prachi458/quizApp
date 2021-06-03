import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";

const CorrectAnswers = () => {
  const questionBank = useSelector((state) => state.quiz.questionBank);
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className="correct-answer-container"
    >
      <Grid item>
        <Grid item className="title">
          Quiz App
        </Grid>
        {questionBank.length > 0 &&
          questionBank.map((item, index) => (
            <Grid item className="questionBox" key={index}>
              <div className="question" key={index}>
                {item.question}
              </div>
              <Button variant="contained" color="secondary" key={item.question}>
                {item.correct_answer}
              </Button>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default CorrectAnswers;
