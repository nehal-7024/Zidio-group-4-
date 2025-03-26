import React, { useState } from 'react';
import './App.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="registration-container">
        <h2 className="form-title">Create a New Account</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
        <p className="login-prompt">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
