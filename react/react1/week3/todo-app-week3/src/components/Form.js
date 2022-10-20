import React from 'react';

const Form = ({
  setInput,
  todos,
  setTodos,
  input,
  deadlineValue,
  setDeadlineValue,
}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      description: input,
      deadline: deadlineValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const deadlineHandler = (e) => {
    e.preventDefault();
    setDeadlineValue(e.target.value);
  };

  return (
    <form className='form'>
      <p>Todo Description</p>
      <input
        onChange={inputHandler}
        type='text'
        className='todo-input'
        value={input}
      />
      <p>Todo deadline</p>
      <input onChange={deadlineHandler} type='date' value={deadlineValue} />
      <br />
      <button onClick={submitHandler} className='todo-btn' type='submit'>
        {' '}
        Add todo
      </button>
      <br />
      {todos.length === 0 && <span>No item</span>}
    </form>
  );
};
export default Form;
