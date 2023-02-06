import React from "react";
import { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");

  return (
    <div className="box">
      <div className="registration-box">
        <h2 className="reg">Register</h2>
        <form>
          <div>
            <input
              className="signupINput"
              value={name}
              type="text"
              placeholder="First Name"
            />
            <input
              className="signupINput"
              value={name}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="signupINput"
            value={name}
            type="email"
            placeholder="Email"
          />
          <input
            className="signupINput"
            value={name}
            type="password"
            placeholder="Password"
          />
          <input
            className="signupINput"
            value={name}
            type="password"
            placeholder="Confirm Password"
          />
          <div className="btn">
            <button className="signup-btn"> Create Account</button>
            <button className="signup-btn"> Already registered? Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
