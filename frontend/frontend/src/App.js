import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./styles/Auth.css";  // <- updated path

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  const toggleRegister = () => setShowRegister(!showRegister);

  if (!auth) {
    return showRegister
      ? <Register toggleRegister={toggleRegister} />
      : <Login setAuth={setAuth} toggleRegister={toggleRegister} />;
  }

  return <Dashboard setAuth={setAuth} />;
}

export default App;
