import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Login.css'; 

const firebaseConfig = {
  apiKey: "AIzaSyBa-AtFuPM-bhEKsXNdWkUomro4q5ygVhM",
  authDomain: "siddhesh-travels.firebaseapp.com",
  projectId: "siddhesh-travels",
  storageBucket: "siddhesh-travels.appspot.com",
  messagingSenderId: "904772354648",
  appId: "1:904772354648:web:ef0b35c57115f51aee802d",
  measurementId: "G-5T38T4E404"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (role === 'admin') {
        // Fetch admin credentials from Realtime Database
        const adminRef = ref(database, 'Admin');
        const adminSnapshot = await get(adminRef);
        if (adminSnapshot.exists()) {
          const adminData = adminSnapshot.val();
          await signInWithEmailAndPassword(auth, adminData.Email, adminData.password);
        } else {
          throw new Error('Admin credentials not found');
        }
      } else {
        // For regular user, proceed with regular authentication
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/Dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="register-link">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;
