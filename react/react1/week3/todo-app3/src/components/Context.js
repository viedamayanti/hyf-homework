import React, { useState, createContext } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <UserContext.Provider
      value={{
        input,
        setInput,
        list,
        setList,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
