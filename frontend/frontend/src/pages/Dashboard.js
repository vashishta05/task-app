import { useEffect, useState } from "react";
import API from "../api";
import TaskCard from "./TaskCard";

export default function Dashboard({ setAuth }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch {
      alert("Failed to load tasks");
    }
  };

  useEffect(() => { loadTasks(); }, []);

  const addTask = async () => {
    if (!title) return;
    const res = await API.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = async (id, newTitle) => {
  await API.put(`/tasks/${id}`, { title: newTitle });
  setTasks(tasks.map(t => t.id === id ? { ...t, title: newTitle } : t));
};


  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button className="logout" onClick={logout}>Logout</button>
      <div className="add-task">
        <input placeholder="New Task" value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
        ))}
      </div>
    </div>
  );
}
