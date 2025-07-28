import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/"); // Or your login route
  };
  return (
    <div>
      <div className="signup-wrapper">
        <div className="signup">
          <div className="signup-header">
            <h2>Sign Up</h2>
          </div>
          <form>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                className="inputBox"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input
                className="inputBox"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password :</label>
              <input
                className="inputBox"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password :</label>
              <input
                className="inputBox"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button
              onClick={handleSignUp}
              className="signup-button"
              type="submit"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <a className="login-link" href="/login">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
