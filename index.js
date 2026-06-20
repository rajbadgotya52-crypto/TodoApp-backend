const express = require("express");
const cors = require("cors");


const app = express() ;

const authRoutes = require("./routes/auth");
console.log("authRoutes =", authRoutes);

// load confid from env file 
require("dotenv").config();
const PORT =process.env.PORT || 4000 ;


// middleware to parse json request body
app.use(express.json());

app.use(cors());
// impoort routes for todo api 

const todoRoutes = require("./routes/todo");
//mount the todo api routes 

console.log("todoRoutes =", typeof todoRoutes);
console.log("authRoutes =", typeof authRoutes);
console.log(authRoutes);

app.use("/api/v1", todoRoutes);
app.use("/auth",authRoutes);




// start server 
app.listen(PORT, () => {
   console.log(`server started successfully at ${PORT}`);

})

// connect to the database 
const dbConnect =require("./config/database");
const {db} = require("./models/Todoo");
dbConnect();

// defaukt route 
app.get("/", (req,res) => {
    res.send(`
    <h1>Todo Backend API 🚀</h1>
    <p>Backend is running successfully.</p>
    // <p>Created by Raj Badgotya</p>

    <h3>Available Endpoints:</h3>
    <ul>
      <li>POST /auth/signup</li>
      <li>POST /auth/login</li>
      <li>POST /api/v1/createTodo</li>
      <li>GET /api/v1/getTodo</li>
      <li>GET /api/v1/getTodo/:id</li>
      <li>PUT /api/v1/updateTodo/:id</li>
      <li>DELETE /api/v1/deleteTodo/:id</li>
    </ul>
    `);
});
