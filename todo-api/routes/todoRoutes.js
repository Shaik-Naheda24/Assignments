// Routes

const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

// Routes
router.get("/", getTodos); // Get all todos
router.post("/", createTodo); // Create a new todo
router.put("/:id", updateTodo); // Update a todo
router.delete("/:id", deleteTodo); // Delete a todo

module.exports = router;
