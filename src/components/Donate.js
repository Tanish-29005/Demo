import React, { useState, useEffect } from "react";
import "./Donate.css";

const Donate = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState("");

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError("");
        },
        () => setError("Unable to retrieve your location.")
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="donate-food-page">
      <div className="header">
        <h1>Donate Food</h1>
        <p>Share Your Kindness with Those in Need</p>
      </div>
      <div className="main-section">
        <div className="donation-form">
          <h3>Donation Form</h3>
          <div className="form-group">
            <label htmlFor="foodType">Type of Food</label>
            <select id="foodType">
              <option>Non-perishable Food</option>
              <option>Perishable Food</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <div className="quantity-input">
              <input id="quantity" type="number" placeholder="Enter amount" />
              <select>
                <option>Grams</option>
                <option>Kilograms</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location</label>
            <input
              id="pickupLocation"
              type="text"
              placeholder="Enter your address"
            />
            <button className="locate-button" onClick={handleLocateMe}>
              Locate Me
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="additionalNotes">Additional Notes</label>
            <textarea
              id="additionalNotes"
              placeholder="Any special instructions or details"
            ></textarea>
          </div>
          <button className="submit-button">Submit Donation</button>
        </div>

        <div className="map-section">
          {/* <h3>Nearby Donation Centers</h3> */}

          <div className="map-container">
            {location.lat && location.lng ? (
              <iframe
                title="User Location"
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                allowFullScreen
              ></iframe>
            ) : (
              <p>{error || "Click 'Locate Me' to find your location."}</p>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Contact Us: 1-800-FOOD-HELP</p>
        <p>© 2024 Food Donation Platform. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Donate;
