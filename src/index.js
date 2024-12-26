import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider
import App from "./components/App";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Google Client ID

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    {" "}
    {/* Wrap your app with GoogleOAuthProvider */}
    <App />
  </GoogleOAuthProvider>
);
