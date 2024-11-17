import React, { useState } from "react";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("token", "mock-token");
      navigate("/products");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    {error && <p className="error">{error}</p>}
    <div className="form">
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    </div>
    <p>Don't have an account? <a href="/signup">Sign up</a> </p>
  </div>
  );
};

export default LoginPage;
