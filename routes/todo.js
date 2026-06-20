const express = require("express");
const router = express.Router() ;


// import controller
const{createTodo} = require("../controllers/createTodo");
const{getTodo, getTodoById} = require("../controllers/getTodo");
const{updateTodo} = require("../controllers/updateTodo");
const{deleteTodo} = require("../controllers/deleteTodo");
const { auth } = require("../middlewares/auth");


console.log("auth =", typeof auth);
console.log("createTodo =", typeof createTodo);
console.log("getTodo =", typeof getTodo);
console.log("getTodoById =", typeof getTodoById);
console.log("updateTodo =", typeof updateTodo);
console.log("deleteTodo =", typeof deleteTodo);



// define api  routes
router.post("/createTodo",auth ,createTodo);
// router.get("/getTodos" , getTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);



module.exports = router;