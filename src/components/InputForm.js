import React from "react";
import "./InputForm.css";

function InputForm() {
  return (
    <form className="form-inputs">
      <div className="form-username">
        <label for="username">Username</label>
        <input type="text" name="username" />
      </div>

      <div className="form-age">
        <label for="age" className="age-label">
          Age
        </label>
        <input type="number" min="1" max="100" className="age-input" />
      </div>

      <button className="button">Add User</button>
    </form>
  );
}

export default InputForm;
