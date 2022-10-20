import React, { useState } from 'react';

const TodoRow = ({ id, setTodos, todos, item }) => {
  const [editMode, setEditMode] = useState(false);
  const [descValue, setDescValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = () => {
    const filtered = todos.filter((el) => el.id !== item.id);
    setTodos(filtered);
  };

  const checkedHandler = () => {
    setIsChecked(!isChecked);
  };

  function editHandler() {
    setEditMode(!editMode);
  }

  const editTextHandler = (e) => {
    setDescValue(e.target.value);
  };

  function updateHandler(id) {
    console.log(descValue);
    const update = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          description: descValue,
        };
      }
      return item;
    });
    setTodos(update);
    setEditMode(false);
  }

  return (
    <div>
      <p style={{ textDecoration: isChecked ? 'line through' : 'none' }}>
        {!editMode ? (
          <div>
            id : {id} description: {item.description} deadline: {item.deadline}
          </div>
        ) : (
          <input type='text' onChange={editTextHandler} value={descValue} />
        )}
        <input className='checkbox' type='checkbox' onChange={checkedHandler} />
        <button onClick={deleteHandler}> Delete</button>
        {!editMode ? (
          <button onClick={() => editHandler()}> Edit</button>
        ) : (
          <button onClick={() => updateHandler(item.id)}> Update</button>
        )}
      </p>
    </div>
  );
};

export default TodoRow;
