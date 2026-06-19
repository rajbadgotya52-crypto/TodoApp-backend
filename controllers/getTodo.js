const Todo = require("../models/Todoo");


exports.getTodo = async(req , res)  => {
    try{
//    fetch all todo item 
      const todos = await Todo.find({});

    //   response
    res.status(200).json({
        success : true ,
        data : todos,
        message : "Entire Todo data is fetched",
    });
    }
    catch(err){
console.error(err);
res.status(500).json({
    success : false ,
    error : err.message ,
    message : "server err0r"
});
    }
}

exports.getTodoById = async(req , res ) => {
    try{
//  extract todo item basis on id 
const id = req.params.id;
const todo = await Todo.findById(id);
   
// data forgicen id noot foud
if(!todo){
    return res.status(404).json({
        success : false,
        message : " no data found"
    })
}
// datat for given id FOUND 
 res.status(200).json({
    success:true ,
    data : todo,
    message : `Todo ${id} data successfully fetched`,
 })
    }
    catch(err){
console.error(err);
res.status(500).json({
    success : false ,
    error : err.message ,
    message : "server err0r"
});

    }
}