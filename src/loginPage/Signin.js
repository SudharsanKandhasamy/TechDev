import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/internal.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if(username && password === "sudharsan"){
        navigate("/home")
    }
  };

  return (
    <div className='mainbody'>
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your Username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your Password"
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <div className="terms-link">Terms and Conditions</div>
      </div>
    </div>
    </div>
  );
};

export default Login;