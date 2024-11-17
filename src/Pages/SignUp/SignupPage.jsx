import { useState } from "react";
import './SignupPage.css';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setError("User already exists");
    } else {
      const newUser = { email, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      alert("Sign up successful! Please log in.");
      navigate("/");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="toggle-button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="toggle-button"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button onClick={handleSignUp} className="button">Sign Up</button>
      </div>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default SignupPage;
