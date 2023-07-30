import React from "react";
import "./index.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Register</h1>
      <div className="login-input-container">
        <input type="text" placeholder="Enter Name" className="input-text" />
        <input type="email" placeholder="Enter Email" className="input-text" />
        <input
          type="password"
          placeholder="Enter Password"
          className="input-text"
        />
      </div>
      <button className="login-btn">Submit</button>
    </div>
  );
};

export default LoginPage;
