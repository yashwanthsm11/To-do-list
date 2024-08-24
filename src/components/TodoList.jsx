import React from 'react';

function TodoList({ todos, handleEditTodo, handleDeleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <p>{todo}</p>
          <div>
            <button className="edit-button" onClick={() => handleEditTodo(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
