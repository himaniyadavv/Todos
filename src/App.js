import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const startEditing = (id, text) => {
    setEditingTodoId(id);
    setEditedText(text);
  };

  const saveEditedTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => startEditing(todo.id, todo.text)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
