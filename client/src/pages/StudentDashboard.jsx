// import { useEffect, useState } from 'react';
// //import axios from 'axios';
// import DashboardCard from '../components/DashboardCard';
// import './Dashboard.css';
// import axiosInstance from '../services/axiosInstance';

// const StudentDashboard = () => {
//   const [stats, setStats] = useState(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axiosInstance.get('http://localhost:5000/api/dashboard/student', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setStats(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchStats();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h2 className="dashboard-title">Welcome, Student</h2>
//       <div className="dashboard-grid">
//         {stats ? (
//           <>
//             <DashboardCard title="Enrolled Courses" value={`${stats.enrolledCourses} Courses`} />
//             <DashboardCard title="Completed Lessons" value={`${stats.completedLessons} Lessons`} />
//             <DashboardCard title="Achievements" value={`${stats.badges} Badges`} />
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance'; // 👈 import your axiosInstance
import DashboardCard from '../components/DashboardCard';

const StudentDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axiosInstance.get('/dashboard/student'); // 👈 use instance
        setStats(data);
      } catch (error) {
        console.error('Error fetching student stats:', error);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <div className="dashboard-cards">
        <DashboardCard title="Enrolled Courses" value={stats.enrolledCourses} />
        <DashboardCard title="Completed Lessons" value={stats.completedLessons} />
        <DashboardCard title="Badges Earned" value={stats.badges} />
      </div>
    </div>
  );
};

export default StudentDashboard;
