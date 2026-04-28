import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getTasks,
  addTask,
  deleteTask,
  updateTask
} from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Load tasks
  const loadTasks = async () => {
    try {
      const data = await getTasks();
      console.log("Tasks:", data); 

      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Add Task
  const handleAdd = async () => {
    if (!title.trim()) return;

    await addTask(title);
    setTitle("");
    loadTasks();
  };

  // Update Task
  const handleUpdate = async (id) => {
    await updateTask(id, "Completed");
    loadTasks();
  };

  // Delete Task
  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="dashboard">
  <div className="min-h-screen bg-gray-100">
    <Navbar />

    <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

      {/* Add Task */}
      <div className="task-input">
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1 rounded"
          placeholder="Enter new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>
      </div>

      {/* Task List */}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.status === "Completed" ? "completed" : ""}`}
          >
            <span className={task.status === "Completed" ? "line-through text-gray-400" : ""}>
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(task.id)}
                className="btn btn-complete"
              >
                Done
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  </div>
);
}