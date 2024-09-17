import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed} 
        onChange={() => toggleCompleted(todo._id)}  
      />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
