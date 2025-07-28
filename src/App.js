import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";

import LandingPage from "./components/home";
import ProductsPage from "./components/products";
import Signup from "./components/signup";
import Login from "./components/login";
import UserProfile from "./components/profile";

import AboutPage from "./components/aboutus";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
  }, []);

  return (
    <div id="root">
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/aboutUs" element={<AboutPage />} />

            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
