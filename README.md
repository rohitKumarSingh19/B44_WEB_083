📚 LearnHub - Full Stack Learning Platform
LearnHub is a full-stack online learning platform where students can enroll in courses, track their progress, and instructors can create and manage courses.
🚀 Features
Authentication
-Login and Signup using JWT tokens
Role-Based Authorization
 -Student and Instructor have different access levels
Courses
-View all available courses
-Instructors can create new courses
Enrollment
-Students can enroll into available courses
Progress Tracking
-Students can update their lesson and quiz progress
Dashboards
-Separate dashboard for Students and Instructors showing their own stats


🛠️ Tech Stack
Frontend | Backend | Database
React.js + Vite | Node.js + Express.js | MongoDB + Mongoose
Other libraries/tools:
-React Router DOM (for routing)
-Axios (for API requests)
-JWT (for authentication)
-CORS, Dotenv

📂 Project Structure
LearnHub/
├── client/           # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/ (axiosInstance.js)
│   │   └── App.jsx
│   └── package.json
├── server/           # Backend (Node.js + Express)
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/ (db.js)
│   ├── server.js
│   └── package.json
└── README.md

⚙️ How to Setup the Project Locally
1. Clone the repo
2. 1. Clone the repo
   git clone https://github.com/rohitKumarSingh19/LearnHub.git
cd LearnHub
2. Set up the backend server
   cd server
npm install
3. Set up the frontend client
cd client
npm install
npm run dev
🌐 API Routes
Method | Endpoint | Access | Description
POST | /api/auth/register | Public | Register new user
POST | /api/auth/login | Public | Login user
GET | /api/courses | Protected | List all courses
POST | /api/courses | Instructor only | Create new course
GET | /api/dashboard/student | Student only | Student dashboard data
GET | /api/dashboard/instructor | Instructor only | Instructor dashboard data
POST | /api/enrollments | Student only | Enroll in a course
GET | /api/enrollments | Student only | Get user enrollments
POST | /api/progress | Student only | Update lesson/quiz progress
GET | /api/progress | Student only | Get progress by student

✨ Future Improvements
Add Course Thumbnail Images
Add Instructor Profile Management
Build Quiz and Certification system
Responsive mobile-friendly UI
Admin Panel (to manage users and courses)



🙏 Acknowledgements
MongoDB Atlas
Vite
React Router
Express
JWT.io

📜 License
This project is licensed under the MIT License.

📢 Quick Demo
✅ Login →
✅ View courses →
✅ Enroll in a course →
✅ View progress →
✅ Instructor creates courses →
✅ See real-time dashboard stats!

