import React from "react";
import { Link } from "react-router-dom";
import UsersHistory from "./usersHistory";

const UserForm = ({
  name,
  category,
  difficulty,
  usersData,
  formHandler,
  submitForm,
}) => {
  return (
    <div>
      <div className="form">
        <form>
          <label className="form__name-label">Name : </label>
          <br />
          <input
            className="form__input-text"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => formHandler(e)}
            required
          />
          <br />
          <label className="form__label"> Select Category : </label>
          <br />
          <select
            className="form__select"
            name="category"
            value={category}
            onChange={(e) => formHandler(e)}
          >
            <option>Any Category</option>
            <option value="Entertainment: Books">Entertainment: Books</option>
            <option value="Entertainment: Film">Entertainment: Film</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Entertainment: Music">Entertainment: Music</option>
            <option value="Entertainment: Musicals & Theatres">
              Entertainment: Musicals &amp; Theatres
            </option>
            <option value="Entertainment: Television">
              Entertainment: Television
            </option>
            <option value="Entertainment: Video Games">
              Entertainment: Video Games
            </option>
            <option value="Entertainment: Board Games">
              Entertainment: Board Games
            </option>
            <option value="Science & Nature">Science &amp; Nature</option>
            <option value="Science: Computers">Science: Computers</option>
            <option value="Science: Mathematics">Science: Mathematics</option>
            <option value="Mythology">Mythology</option>
            <option value="Sports">Sports</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Politics">Politics</option>
            <option value="Art">Art</option>
            <option value="Celebrities">Celebrities</option>
            <option value="Animals">Animals</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Entertainment: Comics">Entertainment: Comics</option>
            <option value="Science: Gadgets">Science: Gadgets</option>
            <option value="Entertainment: Japanese Anime & Manga">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="Entertainment: Cartoon &amp; Animations">
              Entertainment: Cartoon &amp; Animations
            </option>
          </select>

          <br />
          <label className="form__label"> Select Difficulty : </label>
          <br />
          <select
            className="form__select"
            name="difficulty"
            value={difficulty}
            onChange={(e) => formHandler(e)}
          >
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <br />

          <button
            type="submit"
            className="form__submit-btn"
            onClick={submitForm}
          >
            <Link to="/quiz" className="link-class">
              Submit
            </Link>
          </button>
        </form>
      </div>
      <div>
        <UsersHistory usersData={usersData} />
      </div>
    </div>
  );
};
export default UserForm;
