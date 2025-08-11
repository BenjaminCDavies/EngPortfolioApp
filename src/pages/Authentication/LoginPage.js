import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../database/supabaseClient';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
  
    if (error) {
      console.error('Login error:', error.message);
      setErrorMsg(error.message);
    } else {
      console.log('User logged in:', data.user);
      navigate('/profile');
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="auth-form">
          <label>
            Email
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </label>

          {errorMsg && <p className="auth-error">{errorMsg}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

