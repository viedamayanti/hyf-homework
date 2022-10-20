import React from 'react';
import TodoRow from './TodoRow';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-container'>
      <p className='todo-list'>
        {todos.map((item) => (
          <TodoRow
            key={item.id}
            item={item}
            id={item.id}
            description={item.description}
            deadline={item.deadline}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </p>
    </div>
  );
};

export default TodoList;
