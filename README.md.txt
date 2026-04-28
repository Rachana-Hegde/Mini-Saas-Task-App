Mini SaaS Task Management App
   A full-stack task management application built using Node.js, Express, PostgreSQL, React, and JWT authentication.

Features -
User Signup & Login (JWT Authentication)
Secure Password Hashing (bcrypt)
Create, View, Update, Delete Tasks
Multi-user support (each user sees only their tasks)
Protected API routes
Clean and responsive UI

Tech Stack -
Frontend:
React (Vite)
CSS / Tailwind (optional)

Backend:
Node.js
Express.js
Sequelize ORM

Database:
PostgreSQL

Setup Instructions
1. Clone Repository
git clone <your-repo-link>
cd Mini-SaaS-Task-App

2. Backend Setup
cd backend
npm install

Create .env file in backend:
PORT=5000
DB_NAME=taskdb
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
JWT_SECRET=your_secret_key

Start backend server:
npm start

3. Frontend Setup
cd frontend
npm install
npm run dev

API Endpoints -
Auth:
POST /api/auth/signup
POST /api/auth/login

Tasks:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

Authentication -
Uses JWT token
Token stored in localStorage
Protected routes require Authorization header

Notes -
Ensure PostgreSQL is running locally
Backend runs on http://localhost:5000
Frontend runs on http://localhost:5173

Author
Rachana Hegde