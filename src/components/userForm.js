import React from "react";
import { Link } from "react-router-dom";

const UserForm = ({ name, nameHandler, formSubmit }) => {
  return (
    <div>
      <form className="form">
        <input
          className="input-text"
          placeholder="Enter Your Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => nameHandler(e)}
        />

        <button className="submit-btn" type="submit">
          <Link to="/quiz" className="link-class">
            Submit
          </Link>
        </button>
      </form>
    </div>
  );
};
export default UserForm;
