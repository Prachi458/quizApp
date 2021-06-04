import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { fetchData } from "../redux/thunk";
import UsersHistory from "./usersHistory";

const UserForm = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [difficulty, setDifficulty] = useState("Select Difficulty");

  const dispatch = useDispatch();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const difficultyHandler = (event) => {
    setDifficulty(event.target.value);
  };

  const submitHandler = () => {
    dispatch(fetchData());
    dispatch(addUser(name, category, difficulty));
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      direction="column"
    >
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="standard"
          size="medium"
          name="name"
          value={name}
          onChange={(e) => nameHandler(e)}
          className="form__select"
        />
      </Grid>
      <Grid item>
        <Select
          id="demo-simple-select-helper"
          className="form__select"
          name="category"
          value={category}
          onChange={(e) => categoryHandler(e)}
        >
          <MenuItem value="Select Category" disabled>
            Select Category
          </MenuItem>
          <MenuItem value="Entertainment: Books">Entertainment: Books</MenuItem>
          <MenuItem value="Entertainment: Film">Entertainment: Film</MenuItem>
          <MenuItem value="General Knowledge">General Knowledge</MenuItem>
          <MenuItem value="Entertainment: Music">Entertainment: Music</MenuItem>
          <MenuItem value="Entertainment: Musicals & Theatres">
            Entertainment: Musicals &amp; Theatres
          </MenuItem>
          <MenuItem value="Entertainment: Television">
            Entertainment: Television
          </MenuItem>
          <MenuItem value="Entertainment: Video Games">
            Entertainment: Video Games
          </MenuItem>
          <MenuItem value="Entertainment: Board Games">
            Entertainment: Board Games
          </MenuItem>
          <MenuItem value="Science & Nature">Science &amp; Nature</MenuItem>
          <MenuItem value="Science: Computers">Science: Computers</MenuItem>
          <MenuItem value="Science: Mathematics">Science: Mathematics</MenuItem>
          <MenuItem value="Mythology">Mythology</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Geography">Geography</MenuItem>
          <MenuItem value="History">History</MenuItem>
          <MenuItem value="Politics">Politics</MenuItem>
          <MenuItem value="Art">Art</MenuItem>
          <MenuItem value="Celebrities">Celebrities</MenuItem>
          <MenuItem value="Animals">Animals</MenuItem>
          <MenuItem value="Vehicles">Vehicles</MenuItem>
          <MenuItem value="Entertainment: Comics">
            Entertainment: Comics
          </MenuItem>
          <MenuItem value="Science: Gadgets">Science: Gadgets</MenuItem>
          <MenuItem value="Entertainment: Japanese Anime & Manga">
            Entertainment: Japanese Anime &amp; Manga
          </MenuItem>
          <MenuItem value="Entertainment: Cartoon &amp; Animations">
            Entertainment: Cartoon &amp; Animations
          </MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Select
          className="form__select"
          name="difficulty"
          value={difficulty}
          onChange={(e) => difficultyHandler(e)}
          onClick={submitForm}
        >
          <MenuItem value="Select Difficulty" disabled>
            Select Difficulty
          </MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={submitHandler}
          size="small"
        >
          <Link to="/quiz" className="link-class">
            Submit
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <UsersHistory />
      </Grid>
    </Grid>
  );
};
export default UserForm;
