import React, { useState, useEffect } from "react";

const Todos = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((Todos) => setTodos(Todos));
  }, []);
  return (
    <div>
      THis is my post
      {Todos.map((Todos, index) => (
        <h4 key={Todos.id}>{Todos.title}</h4>
      ))}
    </div>
  );
};

export default Todos;
