import React from "react";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  const { fname, lname, email, password } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
    setChecked(false);
  };

  return (
    <div className="Profile-form">
      <div className="logo">
        <i className="fa-solid fa-graduation-cap"></i>
        <h2>Grow LMS</h2>
      </div>
      <h1>Create Account</h1>
      <p>Join us and start your learning journey</p>
      <form onSubmit={handleSubmit} action="">
        <div>
          {" "}
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fname"
            value={fname}
            id="fName"
            placeholder="Enter Your First Name"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          {" "}
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lname"
            value={lname}
            id="lName"
            placeholder="Enter Your Last Name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Enter Your email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
        </div>

        <div id="check-box">
          <input
            type="checkbox"
            name="term"
            id="term"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            required
          />
          <label htmlFor="term">
            I agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p>Or Sign Up With</p>

      <div>
        <div className="social-buttons">
          <button className="google-btn">
            <i className="fa-brands fa-google"></i> Google
          </button>

          <button className="github-btn">
            <i className="fa-brands fa-github"></i> GitHub
          </button>
        </div>
      </div>

      <p className="bottom-text">
        Already have an account? <a href="#">Sign In</a>
      </p>
    </div>
  );
};

export default Signup;
