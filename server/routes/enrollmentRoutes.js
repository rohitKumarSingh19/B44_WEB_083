import express from 'express';
import { enrollInCourse, getUserEnrollments } from '../controllers/enrollmentController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/', protect, enrollInCourse);
router.get('/', protect, getUserEnrollments);
export default router;
