const { Todo } = require("../models/index");
const { Op } = require("sequelize");

class TodoRepository {
  async createTodo({ task }) {
    try {
      const todo = await Todo.create({
        task,
      });
      return todo;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteTodo(taskId) {
    try {
      await Todo.destroy({
        where: { id: taskId },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateTodo( taskId, newTaskData ) {
    try {
      const todo = await Todo.findByPk(taskId);
      if (!todo) {
        throw { error: "Todo not found" };
      }
      todo.task = newTaskData.task;
      await todo.save();
      return todo;
    } catch (error) {
      console.log("Something went wrong in the repository layer:", error);
      throw error; // Throw the original error for better handling
    }
  }
  async getAllTodos() {
    try {
      const todos = await Todo.findAll();
      return todos;
    } catch (error) {
      console.log("somthing went wrong int the repository layer");
      throw { error };
    }
  }

  //searching the repository
  async searchTodo(searchTerm) {
    try {
      const todos = await Todo.findAll({
        where: {
          task: {
            [Op.like]: `%${searchTerm}%`,
          },
        },
      });
      return todos;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }


  }

}

module.exports = TodoRepository;
