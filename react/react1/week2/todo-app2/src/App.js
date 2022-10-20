import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import TodoLists from './components/TodoLists';
import todoItems from './components/TodoItems';
import './App.css';

function App() {
  const [todos, setTodos] = useState(todoItems);

  const addingTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      activity: 'Random text',
      dateline: 'Wed Sep 13 2017',
    };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  };

  return (
    <div className='App'>
      <Header />
      <Timer />
      <br />
      {todos.length === 0 && <h1>No Item</h1>}
      <p>
        {todos.map((item) => (
          <TodoLists key={item.id} item={item} onDelete={onDelete} />
        ))}
      </p>

      <button onClick={addingTodo}>Add Todo</button>
    </div>
  );
}

export default App;
