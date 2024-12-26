import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Dashboard() {
  const [user, setUser] = useState({
    name: "Guest",
    donations: 0,
    impactScore: 0,
    points: 0,
  });

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Donations",
        data: [0, 0, 0, 0, 0, 0],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const handleLogin = () => {
    setUser({
      name: "Tanish Nagarkar",
      donations: 52,
      impactScore: 89,
      points: 750,
    });
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <div className="dashboard">
      <div>
        {/* Profile Section */}

        <div className="profile">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="profile-img"
          />
          <h2>{user.name}</h2>
          <p>Food Donation Enthusiast</p>
          <div className="progress">
            <span>Punya Points Progress</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(user.points / 1000) * 100}%` }}
              ></div>
            </div>
            <small>{user.points}/1000 points</small>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="stats">
          <div className="stat-card">
            <h4>Total Donations</h4>
            <p>{user.donations}</p>
          </div>
          <div className="stat-card">
            <h4>Impact Score</h4>
            <p>{user.impactScore}</p>
          </div>
        </div>
      </div>
      {/* Donation Activity Graph */}
      <div className="HalfDash">
        <div className="chart">
          <h4>Donation Activity</h4>
          <Line data={chartData} options={{ responsive: true }} />
        </div>

        {/* Recent Badges */}
        <div className="badges">
          <h4>Recent Badges</h4>
          <div className="badge">🏅 First Donation</div>
          <div className="badge">⭐ Top Donor</div>
          <div className="badge">💚 Community Hero</div>
        </div>

        {/* Community Leaderboard */}
        <div className="leaderboard">
          <h4>Community Leaderboard</h4>
          <ul>
            <li>1. Tanish Nagarkar - 1,250 points</li>
            <li>2. Manav Kothari- 1,100 points</li>
            <li>3. Prathamesh Arya - 950 points</li>
            <li>4. Aditya Jaiswar - 900 points</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="cta">
          <button className="donate-button">+ Donate Now</button>
          <button className="register-button">Register Organization</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
