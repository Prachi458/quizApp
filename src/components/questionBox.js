import React from "react";
import { Button, Grid, FormControl } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/actions";
import SingleQuestion from "./singleQuestion";

const QuestionBox = () => {
  const dispatch = useDispatch();
  const questionBank = useSelector((state) => state.quiz.questionBank);
  const enteredName = useSelector((state) => state.user.name);
  const enteredCategory = useSelector((state) => state.user.category);
  const enteredDifficulty = useSelector((state) => state.user.difficulty);
  const score = useSelector((state) => state.result.score);

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
    <Grid
      container
      alignItems="center"
      justify="center"
      className="question-container"
    >
      <Grid item>
        <Grid item className="title">
          Quiz App
        </Grid>
        <FormControl component="fieldset">
          {questionBank.length > 0 &&
            questionBank.map((item, index) => {
              return (
                <SingleQuestion item={item} dispatch={dispatch} key={index} />
              );
            })}
        </FormControl>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={submitHandler}
          >
            <Link to="/result" className="link-class">
              Submit
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default QuestionBox;
