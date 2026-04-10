# 🚀 MERN Todo App

A full-stack Todo application built using the MERN stack (MongoDB, Express, React, Node.js).  
This project allows users to create, read, update, and delete tasks (CRUD operations).

---

## 📌 Live Demo

> ⚠️ Replace links below with your deployed URLs

- 🌐 Frontend: https://your-frontend-link.com  
- ⚙️ Backend API: https://your-backend-link.com  
- 🗄️ Database: MongoDB Atlas (cloud hosted)

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Axios
- JavaScript
- CSS (basic styling)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### Database
- MongoDB Atlas

---

## 📁 Project Structure

```bash

mern-todo-app/
│
├── server/        # Backend (Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── public/    # Frontend build (Vite dist)
│   ├── server.js
│
├── client/        # Frontend (React Vite)
│   ├── src/
│   ├── index.html
│
└── README.md

````

---

## ⚙️ Features

- ➕ Add new tasks
- 📋 View all tasks
- ✏️ Mark tasks as completed
- ❌ Delete tasks
- 🔄 Real-time UI updates
- 🌍 Full-stack integration

---

## 🚀 Installation & Setup (Local)

### 1. Clone repository
```bash
git clone https://github.com/Mdbe897/Cloud_Fundamentals_and_Deployment.git
````

---

### 2. Backend setup

```bash
cd server
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend setup

```bash
cd client
npm install
npm run dev
```

---

## 🏗️ Build for Production

```bash
cd client
npm run build
```

Then move `dist/` content into:

```
server/public/
```

---

## 🌐 API Endpoints

| Method | Route          | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/todos     | Get all todos |
| POST   | /api/todos     | Create a todo |
| PUT    | /api/todos/:id | Update todo   |
| DELETE | /api/todos/:id | Delete todo   |

---

## 📦 Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_atlas_uri
NODE_ENV=production
```

---

## 🚀 Deployment

### Frontend

* Vercel / Azure Static Web Apps

### Backend

* Azure Web App / Render

### Database

* MongoDB Atlas

---

## 👨‍💻 Author

* Name: Mohamed
* Project: MERN Stack Todo App
* Purpose: Cloud Fundamentals & Deployment Checkpoint

---

## 📌 Notes

This project was built for educational purposes to demonstrate:

* Full-stack development skills
* REST API creation
* MongoDB integration
* Cloud deployment readiness