import { useState } from "react";
import API from "../api";

export default function Register({ toggleRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registered! Now login.");
      toggleRegister();
    } catch (err) {
      alert(err.response?.data?.message || "Registration error");
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p onClick={toggleRegister} className="link-text">Already have account? Login</p>
    </div>
  );
}
