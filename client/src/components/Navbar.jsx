import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>LearnHub</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </nav>
);

export default Navbar;
