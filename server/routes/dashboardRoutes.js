import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { getStudentStats, getInstructorStats } from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/student', protect, authorizeRoles('student'), getStudentStats);
router.get('/instructor', protect, authorizeRoles('instructor'), getInstructorStats);

export default router;
