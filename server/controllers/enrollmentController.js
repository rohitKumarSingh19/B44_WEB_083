import Enrollment from '../models/Enrollment.js';
export const enrollInCourse = async (req, res) => {
  const { courseId } = req.body;
  const enrollment = await Enrollment.create({
    user: req.user.id,
    course: courseId
  });
  res.status(201).json(enrollment);
};
export const getUserEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user.id }).populate('course');
  res.json(enrollments);
};
