import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
