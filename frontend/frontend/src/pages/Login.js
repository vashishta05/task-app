import { useState } from "react";
import API from "../api";

export default function Login({ setAuth, toggleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p onClick={toggleRegister} className="link-text">Don't have account? Register</p>
    </div>
  );
}
