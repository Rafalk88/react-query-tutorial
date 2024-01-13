import { useState } from 'react';

import { UsersList } from './UsersList'

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      <h1>TanStack Query</h1>
      <button
        onClick={() => setCurrentPage(1)}
        style={{
          height: '55px',
          width: '160px',
          border: '1px solid #000000',
          borderRadius: '5px',
          outline: 'none',
          fontSize: '20px',
          marginRight: '15px'
        }}
      >
        Posts List 1
      </button>
      <button
        onClick={() => setCurrentPage(2)}
        style={{
          height: '55px',
          width: '160px',
          border: '1px solid #000000',
          borderRadius: '5px',
          outline: 'none',
          fontSize: '20px',
        }}
      >
        Posts List 2
      </button>
      <br />
      {
        <UsersList listNumber={currentPage} />
      }
    </div>
  );
}

export default App;
