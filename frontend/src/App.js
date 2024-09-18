import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data);
    }
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
      const response = await axios.post('http://localhost:5000/api/todos', { text });
      setTodos([...todos, response.data]);
  };

  const toggleCompleted = async (id) => {
      const todo = todos.find(todo => todo._id === id);
      const response = await axios.patch(`http://localhost:5000/api/todos/${id}`, { completed: !todo.completed });
      setTodos(todos.map(t => t._id === id ? response.data : t));
  };

  const deleteTodo = async (id) => {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
