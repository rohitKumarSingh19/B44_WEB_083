import express from 'express';
import { getAllCourses, createCourse } from '../controllers/courseController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
const router = express.Router();
router.get('/', getAllCourses);
router.post('/', protect, authorizeRoles('instructor', 'admin'), createCourse);

export default router;
