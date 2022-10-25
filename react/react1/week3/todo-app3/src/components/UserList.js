import React, { useContext } from 'react';
import { UserContext } from './Context';

function UserList() {
  const { input, setInput } = useContext(UserContext);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Write here'
        onChange={inputHandler}
        value={input}
      />
      <p>{input}</p>
    </div>
  );
}

export default UserList;
