export const getStudentStats = async (req, res) => {
    // Example static data — replace with DB queries
    res.json({
      enrolledCourses: 5,
      completedLessons: 24,
      badges: 3,
    });
  };
  
  export const getInstructorStats = async (req, res) => {
    // Example static data — replace with DB queries
    res.json({
      coursesCreated: 8,
      totalStudents: 120,
      revenue: 3500,
    });
  };
  