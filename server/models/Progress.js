import mongoose from 'mongoose';
const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  completedLessons: [String],
  quizScores: [{
    lesson: String,
    score: Number
  }]
});
export default mongoose.model('Progress', progressSchema);
