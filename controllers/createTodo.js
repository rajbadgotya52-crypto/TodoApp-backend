// import the models 
const Todo = require("../models/Todoo");
// console.log("Todo =", Todo);

// define route  handler 

exports.createTodo = async(req , res)  => {
    try{
    //  extract tittle and description from request body 
   const { title, description } = req.body;
   // create anew todo obj and insert teh database
const response = await Todo.create({ title, description });
     
    
    // send a json reponse with aseccess flag
    res.status(200).json({
        success : true,
        data:response,
        message: 'entry creatted successfully'
    }
);
    
    }
   catch(err) {
    console.error(err);
     console.log(err);
     res.status(500)
     .json({
        success:false,
        data:"internal server error ",
        message:err.message,
     });
   }
}

