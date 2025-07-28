import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { users } from "./users";

const Login = ({ setCurrentUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="login">
          <div className="login-header">
            <h2>Login</h2>
          </div>

          <form>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                className="inputBox"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              onClick={handleLogin}
              className="login-button"
              type="submit"
            >
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <a className="signup-link" href="/signup">
                Sign-up
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
