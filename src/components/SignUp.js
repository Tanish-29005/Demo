import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = () => {
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
    } else {
      alert("OTP sent to your phone number!");
      setOtpSent(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !phone && !address && !otp) {
      alert("Please fill out all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!otp.match(/^\d{6}$/)) {
      alert("OTP must be 6 digits");
      return;
    } else {
      alert("Sign Up Successful!");
      navigate("/");
    }
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
    // You can process the Google login response here
    // For example, you can send the token to your backend to authenticate the user
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            autoComplete="name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            pattern="\d{10}"
            maxLength="10"
            required
            autoComplete="tel"
          />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
            autoComplete="address"
          ></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            pattern="\d{6}"
            maxLength="6"
            required
            autoComplete="off"
          />
          {!otpSent ? (
            <button type="button" onClick={sendOtp}>
              Send OTP
            </button>
          ) : (
            <span>OTP Sent</span>
          )}
        </div>

        <div className="input-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>

      <div className="google-login">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </div>
  );
}

export default SignUp;
