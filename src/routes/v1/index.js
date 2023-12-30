const express = require("express")
const router = express.Router();

const TodoController = require("../../controllers/todo-controller");


router.get("/todos",TodoController.getAll);
router.get("/search",TodoController.searchingTodos)
router.post("/todo", TodoController.create);
router.delete("/todo/:id", TodoController.destroy);
router.put("/todo/:id", TodoController.update);

module.exports = router; 