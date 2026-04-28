const API = "http://localhost:5000/api";

// LOGIN
export const loginUser = async (data) => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  console.log("Login API result:", result);

  return result;
};

// TASKS
export const getTasks = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};

export const addTask = async (title) => {
  await fetch(`${API}/tasks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
};

export const deleteTask = async (id) => {
  await fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updateTask = async (id, status) => {
  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
};