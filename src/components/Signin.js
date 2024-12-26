import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/.test(password)) {
      alert(
        "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Sign-In Successful!");
        navigate("/Dashboard");
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            autoComplete="email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          {loading ? <p>Loading...</p> : <button type="submit">Sign In</button>}
        </form>
        {error && <p className="error-message">{error}</p>}
        <div className="sign-up-redirect">
          <p>
            Not registered yet?{" "}
            <Link to="/sign-up" className="sign-up-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
