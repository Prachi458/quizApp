import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.result.score);
  const name = useSelector((state) => state.user.name);

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className="result-container"
    >
      <Grid item>
        <Grid item className="title">
          Quiz App
        </Grid>
        <Grid item className="questionBox">
          <Grid item className="score">
            {name} <br />
            <p>You Scored {result} / 10 correct answers!!</p>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" size="medium">
              <Link to="/correct-answers" className="link-class">
                View Correct Answers
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Result;
