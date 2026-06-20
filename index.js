const express = require("express");
const app = express() ;

const authRoutes = require("./routes/auth");
console.log("authRoutes =", authRoutes);

// load confid from env file 
require("dotenv").config();
const PORT =process.env.PORT || 4000 ;


// middleware to parse json request body
app.use(express.json());


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
app.get("/",(req,res) => {
    res.send('<h1> this is HOMEPAGE BODY </h1>');
})