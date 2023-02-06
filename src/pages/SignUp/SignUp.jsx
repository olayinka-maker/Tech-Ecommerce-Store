import React from "react";
import { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    const [name, value, type, checked] = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
  }

  return (
    <div className="box">
      <div className="registration-box">
        <h2 className="reg">Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="firstName"
              className="signupINput"
              defaultValue={formData.firstName}
              type="text"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              className="signupINput"
              defaultValue={formData.lastName}
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <input
            name="email"
            className="signupINput"
            defaultValue={formData.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            className="signupINput"
            defaultValue={formData.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            className="signupINput"
            defaultValue={formData.passwordConfirm}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
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
