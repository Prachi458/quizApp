import React from "react";

const UserForm = ({ name, nameHandler, submitHandler }) => {
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
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserForm;
