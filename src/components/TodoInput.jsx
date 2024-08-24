import React from 'react';

function TodoInput({ todoValue, setTodoValue, handleAddTodos }) {
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim()) {
      handleAddTodos(todoValue.trim());
      setTodoValue('');
    }
  };

  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        type="text"
        value={todoValue}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
