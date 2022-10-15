import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import TodoLists from './components/TodoLists';
import './App.css';

const todoItems = [
  {
    id: 1,
    activity: 'Get out of bed',
    dateline: 'Wed Sep 13 2017',
  },
  {
    id: 2,
    activity: 'Brush teeth',
    dateline: 'Thu Sep 14 2017',
  },
  {
    id: 3,
    activity: 'Eat breakfast',
    dateline: 'Fri Sep 15 2017',
  },
];

function App() {
  const [todos, setTodos] = useState(todoItems);

  const addingTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      activity: 'Random text',
      dateline: 'Wed Sep 13 2017',
    };

    const mynextTodo = todos.concat(newTodo);
    setTodos([...todos, newTodo]);
    console.log('My next todo is', mynextTodo);
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
          <TodoLists item={item} onDelete={onDelete} />
        ))}
      </p>

      <button onClick={addingTodo}>Add Todo</button>
    </div>
  );
}

export default App;
