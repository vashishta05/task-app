import { useState } from "react";

export default function TaskCard({ task, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div className="task-card">
      {editing ? (
        <>
          <input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
          <button onClick={() => { editTask(task.id, newTitle); setEditing(false); }}>Save</button>
        </>
      ) : (
        <>
          <p>{task.title}</p>
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
