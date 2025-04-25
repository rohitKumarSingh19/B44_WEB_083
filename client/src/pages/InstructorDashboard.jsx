import React from 'react';
import DashboardCard from '../components/DashboardCard';
import './Dashboard.css';

const InstructorDashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome, Instructor</h2>
      <div className="dashboard-grid">
        <DashboardCard title="Courses Created" value="8 Courses" />
        <DashboardCard title="Total Students" value="120 Enrolled" />
        <DashboardCard title="Revenue" value="$3,500" />
      </div>
    </div>
  );
};

export default InstructorDashboard;
