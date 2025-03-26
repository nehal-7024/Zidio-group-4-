import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import signupImage from '../asserts/image.png'; // Adjust the path as needed

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert(res.data.message);
      navigate('/signin');
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={signupImage} alt="Signup Illustration" />
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Signup</button>
          
          <p className="signin-text">Already have an account? 
            <span className="signin-link" onClick={() => navigate('/signin')}> Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
