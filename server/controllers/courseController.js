import Course from '../models/Course.js';
export const getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name email');
  res.json(courses);
};
export const createCourse = async (req, res) => {
  const { title, description, duration } = req.body;
  const course = await Course.create({
    title,
    description,
    duration,
    instructor: req.user.id
  });
  res.status(201).json(course);
};
export const getCourseById = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('instructor', 'name email');
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};
