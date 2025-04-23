import Progress from '../models/Progress.js';
export const updateProgress = async (req, res) => {
  const { courseId, lesson, quizScore } = req.body;

  let progress = await Progress.findOne({ user: req.user.id, course: courseId });
  if (!progress) {
    progress = new Progress({ user: req.user.id, course: courseId, completedLessons: [], quizScores: [] });
  }

  if (!progress.completedLessons.includes(lesson)) {
    progress.completedLessons.push(lesson);
  }

  if (quizScore !== undefined) {
    progress.quizScores.push({ lesson, score: quizScore });
  }
  await progress.save();
  res.json(progress);
};

export const getUserProgress = async (req, res) => {
  const progress = await Progress.find({ user: req.user.id }).populate('course');
  res.json(progress);
};
