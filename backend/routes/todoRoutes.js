const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
 
});

// Create a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

    const newTodo = await todo.save();
    res.status(201).json(newTodo);
});

// Update a todo
router.patch('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    await todo.save();
    res.json(todo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.json({ message: 'Todo deleted' });
});

module.exports = router;
