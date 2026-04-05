import React from "react";
import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit} action="">
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
        <input
          type="checkbox"
          name="term"
          id="term"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          required
        />
        <label htmlFor="term">
          I agree to the Terms of Service and Privacy Policy
        </label>

        <button type="submit">Create Account</button>
      </form>
      <p>Or Sign Up With</p>

      <div>
        <button>google</button>
        <button>Github</button>
      </div>

      <p>Already hava an account? Sign In</p>
    </div>
  );
};

export default Signup;
