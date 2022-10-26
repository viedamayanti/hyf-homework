import React from 'react';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import ResultData from './components/ResultData';
import { UserProvider } from './components/Context';

function App() {
  return (
    <UserProvider>
      <Header />
      <UserList />
      <ResultData />
    </UserProvider>
  );
}

export default App;
