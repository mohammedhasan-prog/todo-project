import React from "react";

const Todo = ({ todos }) => {
  return todos.map((todo) => {
    return (
      <div>
        <h1>{todo.tital}</h1>
        <h3> {todo.description}</h3>
        {todo.isCompleted ? (
          <button> done</button>
        ) : (
          <button>Mark as done</button>
        )}
      </div>
    );
  } );
};

export default Todo;
