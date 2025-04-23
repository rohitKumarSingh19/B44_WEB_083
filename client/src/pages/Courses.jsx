import { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/courses', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setCourses(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Available Courses</h2>
      <ul className="course-list">
        {courses.map(c => <li key={c._id}>{c.title}</li>)}
      </ul>
    </div>
  );
};

export default Courses;
