const Todo = require("../models/Todoo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id.trim();
    const { title, description } = req.body;
console.log("BODY =", req.body);

    console.log("PARAMS =", req.params);
console.log("ID =", req.params.id);

    const todo = await Todo.findByIdAndUpdate(
      id,
      { title,
         description, 
         updateAt: Date.now() ,
        },
        {new :true}
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: "update succeessfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server err0r",
    });
  }
};
