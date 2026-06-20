# TodoApp Backend API 🚀

A complete Backend Todo Application built using Node.js, Express.js, MongoDB, JWT Authentication, and Mongoose.

## Live Demo

Backend URL:

https://todoapp-backend-ox9m.onrender.com

---

## Features

* User Registration (Signup)
* User Login (JWT Authentication)
* Password Hashing using bcrypt
* Protected Routes using JWT Middleware
* Create Todo
* Get All Todos
* Get Todo By ID
* Update Todo
* Delete Todo
* MongoDB Atlas Integration
* Render Deployment

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* Render

---

## Installation

### Clone Repository

```bash
git clone https://github.com/rajbadgotya52-crypto/TodoApp-backend.git
cd TodoApp-backend
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:4000
```

---

## API Endpoints

### Authentication Routes

#### Signup

```http
POST /auth/signup
```

Request Body:

```json
{
  "name": "Raj",
  "email": "raj@gmail.com",
  "password": "123456"
}
```

#### Login

```http
POST /auth/login
```

Request Body:

```json
{
  "email": "raj@gmail.com",
  "password": "123456"
}
```

---

### Todo Routes

#### Create Todo

```http
POST /api/v1/createTodo
```

Headers:

```http
Authorization: Bearer <JWT_TOKEN>
```

Body:

```json
{
  "title": "Learn JWT",
  "description": "Complete authentication project"
}
```

#### Get All Todos

```http
GET /api/v1/getTodo
```

#### Get Todo By ID

```http
GET /api/v1/getTodo/:id
```

#### Update Todo

```http
PUT /api/v1/updateTodo/:id
```

#### Delete Todo

```http
DELETE /api/v1/deleteTodo/:id
```

---

## Project Structure

```text
TodoApp-backend/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## Deployment

Deployed on Render:

https://todoapp-backend-ox9m.onrender.com

---

## Author

Raj Badgotya

GitHub:
https://github.com/rajbadgotya52-crypto

LinkedIn:
https://www.linkedin.com/in/raj-badgotya-a6ab70328

---

## Future Improvements

* User-specific Todos
* Role-Based Authentication
* Refresh Tokens
* Swagger API Documentation
* Docker Deployment
* Unit Testing
