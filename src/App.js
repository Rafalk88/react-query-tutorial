import { useState } from 'react';

import { UsersList1 } from './UsersList1'
import { UsersList2 } from './UsersList2'

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(<UsersList1 />);

  return (
    <div className="App">
      <h1>TanStack Query</h1>
      <button
        onClick={() => setCurrentPage(<UsersList1 />)}
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
        onClick={() => setCurrentPage(<UsersList2 />)}
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
        currentPage
      }
    </div>
  );
}

export default App;
