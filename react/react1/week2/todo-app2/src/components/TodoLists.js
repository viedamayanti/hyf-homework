import React, { useState } from 'react';

const TodoLists = ({ item, onDelete }) => {
  const [checked, setChecked] = useState(false);

  return (
    <p
      style={{
        textDecoration: checked ? 'line-through' : 'none',
      }}
      key={item.id}
    >
      {' '}
      {item.id}, {item.activity} ,{item.dateline}{' '}
      <input type='checkbox' onChange={() => setChecked(!checked)} />
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </p>
  );
};

export default TodoLists;
