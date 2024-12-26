import React, { useState } from "react";
import "./Register.css";

function Register() {
  console.log("Register component is rendering..."); // Check if the component renders
  const [organizationName, setOrganizationName] = useState("");
  const [organizationLocation, setOrganizationLocation] = useState("");
  const [organizationDescription, setOrganizationDescription] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !organizationName ||
      !organizationLocation ||
      !organizationDescription ||
      !contactPerson ||
      !contactEmail
    ) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Thank you for registering your organization!");
  };

  return (
    <div className="register-organization-container">
      <h2>Register Your Organization</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Form Fields */}
        <div className="form-group">
          <label htmlFor="organizationName">Organization Name</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationLocation">Organization Location</label>
          <input
            type="text"
            id="organizationLocation"
            name="organizationLocation"
            value={organizationLocation}
            onChange={(e) => setOrganizationLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizationDescription">Description</label>
          <textarea
            id="organizationDescription"
            name="organizationDescription"
            value={organizationDescription}
            onChange={(e) => setOrganizationDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Person</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-btn">
          Register Organization
        </button>
      </form>
    </div>
  );
}

export default Register;
