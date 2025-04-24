import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:5000/api/auth/register', form);
  //   console.log(res.data);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      console.log(res.data);
      alert("Registered Successfully");
      navigate('/login'); // ⬅️ Redirect after success
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Registration failed. Check the console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" value={form.password} placeholder="Password" onChange={handleChange} />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
