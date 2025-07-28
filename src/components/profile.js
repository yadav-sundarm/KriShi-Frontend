import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const UserProfile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="profile-container">
        <div className="profile-pic">
          <img
            src="/static/profilepic.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
