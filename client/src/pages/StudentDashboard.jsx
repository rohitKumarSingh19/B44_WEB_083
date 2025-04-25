import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardCard from '../components/DashboardCard';
import './Dashboard.css';

const StudentDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/dashboard/student', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome, Student</h2>
      <div className="dashboard-grid">
        {stats ? (
          <>
            <DashboardCard title="Enrolled Courses" value={`${stats.enrolledCourses} Courses`} />
            <DashboardCard title="Completed Lessons" value={`${stats.completedLessons} Lessons`} />
            <DashboardCard title="Achievements" value={`${stats.badges} Badges`} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
