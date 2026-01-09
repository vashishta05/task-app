# Task App

A modern **Full-Stack Task Manager** application that allows users to **sign up, log in, manage tasks**, and log out. Built with **React** for the frontend and **Node.js + Express + SQLite** for the backend.

---

## Features

- User authentication with **JWT** (Login / Signup)
- **Add, Edit, Delete, View tasks**
- Logout functionality
- Responsive and clean UI with cards
- Input validation for forms
- Axios used for API requests

---

## Installation & Setup

### Backend

1. Open terminal in the `backend` folder:

```bash
cd backend
```
2. Install required dependencies:
```bash
npm install express sequelize sqlite3 bcrypt jsonwebtoken cors
```
3. Start the backend server:
```bash
node server.js
```

The backend runs on: http://localhost:5000

### Frontend

1. Open terminal in the frontend/frontend folder:
```bash
cd frontend/frontend
```


2. Install dependencies:
```bash
npm install
npm install axios
```

3. Start the React frontend:
```bash
npm start
```
The frontend runs on: http://localhost:3000

### API Endpoints
| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register a user |
| POST   | /api/auth/login    | Login a user    |

### Tasks(Requires JWT token)
| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/tasks     | Get all tasks  |
| POST   | /api/tasks     | Add a new task |
| PUT    | /api/tasks/:id | Edit a task    |
| DELETE | /api/tasks/:id | Delete a task  |

### Usage / Test Cases

1. Register a new user → Should add user to database

2. Login → Should return a JWT token

3. Add a task → Task appears on dashboard

4. Edit a task → Task updates correctly

5. Delete a task → Task removed from dashboard

6. Logout → Clears token and redirects to login

### Demo

Record a short screen capture demonstrating:

Login → Dashboard → Add/Edit/Delete Tasks → Logout

### Author

Vashishta Nagi




