# 🧩 Mini SaaS Task Management App

A full-stack **Task Management Web Application** built as part of a screening assignment.
It supports secure authentication, multi-user task management, and a clean responsive UI.

---

## 🚀 Features

### 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes

### 📋 Task Management

* Create tasks
* View only your tasks (multi-user isolation)
* Update task status (Pending → Completed)
* Delete tasks

### 💻 Frontend

* React (Vite)
* Responsive UI
* API integration using fetch

### ⚙️ Backend

* Node.js + Express
* RESTful APIs
* Sequelize ORM

### 🗄️ Database

* PostgreSQL
* Proper schema with user-task relationship

---

## 🛠️ Tech Stack

| Layer    | Technology                   |
| -------- | ---------------------------- |
| Frontend | React (Vite), CSS / Tailwind |
| Backend  | Node.js, Express             |
| Database | PostgreSQL                   |
| Auth     | JWT, bcrypt                  |

---

## 📁 Project Structure

```
Mini-SaaS-Task-App/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── README.md
└── .gitignore
```

---

## ⚙️ Setup Instructions

---

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-saas-task-app.git
cd mini-saas-task-app
```

---

## 🔹 2. Backend Setup

```bash
cd backend
npm install
```

### 📄 Create `.env` file in backend folder:

```
PORT=5000
DB_NAME=taskdb
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
JWT_SECRET=your_secret_key
```

### ▶️ Start Backend Server

```bash
npm start
```

👉 Backend runs on:

```
http://localhost:5000
```

---

## 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/signup` | Register new user |
| POST   | `/api/auth/login`  | Login user        |

---

### 📋 Tasks

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/tasks`     | Get user tasks |
| POST   | `/api/tasks`     | Create task    |
| PUT    | `/api/tasks/:id` | Update task    |
| DELETE | `/api/tasks/:id` | Delete task    |

---

## 🔐 Authentication Flow

* JWT token is generated on login
* Token stored in localStorage
* Token sent in Authorization header:

```
Authorization: Bearer <token>
```

---

## ⚠️ Notes

* PostgreSQL must be running locally
* `.env` file is required in backend
* Ensure correct DB credentials

---

## 📌 Conclusion

This project demonstrates:

* Full-stack development skills
* Authentication & security handling
* Database design
* API integration
* Clean UI implementation

## 👩‍💻 Author
🔗 **GitHub**: [Rachana-Hegde](https://github.com/Rachana-Hegde)

## 🌐 Live API

https://mini-saas-task-app-rho.vercel.app
