const TodoRepository = require("../repository/todo-repository");
const todoRepo = new TodoRepository();
const create = async (req, res) => {
  try {
    let todo = await todoRepo.createTodo(req.body);
    return res.status(201).json({
      data: todo,
      success: true,
      message: "Successfully created a Todo",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create Todo",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await todoRepo.deleteTodo(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully delete a Todo",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete Todo",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const todo = await todoRepo.updateTodo(req.params.id, req.body);
    return res.status(201).json({
      data: todo,
      success: true,
      message: "Successfully update a Todo",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update Todo",
      err: error,
    });
  }
};

const getAll = async(req,res)=>{
  try {
    const todos = await todoRepo.getAllTodos();
     return res.status(200).json({
       data: todos,
       success: true,
       message: "Successfully fetched a city",
       err: {},
     });
  } catch (error) {
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to fetch the cities !",
        err: error,
      });
  }
}
const searchingTodos = async (req, res) => {
   const query = req.query.q;
   if (!query) {
     return res.status(400).json({ error: 'Query parameter "q" is required' });
   }
  try {
    const todos = await todoRepo.searchTodo(query);
    if(todos.length > 0){
      return res.status(200).json({
        data: todos,
        success: true,
        message: "Successfully fetched a todo",
        err: {},
      });
    }else{
      return res.status(404).json({
        data: {},
        success: false,
        message: "No found todo",
        err: {},
      });
    }
  } catch (error) {
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to fetch the todo!",
        err: error,
      });
  }
}

module.exports = {
  create,
  destroy,
  update,
  getAll,
  searchingTodos
};
