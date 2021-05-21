import React from "react";

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
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => formSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserForm;
