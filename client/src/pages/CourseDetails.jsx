import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance'; // Make sure you use your axiosInstance
import './CourseDetails.css';
const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await axios.post('/enrollments', { courseId: id });
      setEnrolled(true);
      alert('🎉 Successfully enrolled!');
    } catch (error) {
      console.error('Error enrolling:', error);
      alert('❌ Enrollment failed.');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!course) return <div className="error">Course not found.</div>;

  return (
    <div className="course-details-container">
      <div className="course-card">
        <h2>{course.title}</h2>
        <p className="description">{course.description}</p>
        <p><strong>Duration:</strong> {course.duration} hours</p>
        <p><strong>Instructor:</strong> {course.instructor?.name} ({course.instructor?.email})</p>

        {!enrolled ? (
          <button className="enroll-button" onClick={handleEnroll}>Enroll Now</button>
        ) : (
          <button className="enroll-button" disabled>Already Enrolled</button>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
