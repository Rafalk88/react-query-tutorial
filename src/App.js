import { useState } from 'react';

import { PostsList1 } from './PostsList1'

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);

  return (
    <div className="App">
      <h1>TanStack Query</h1>
      <button
        onClick={() => setCurrentPage(<PostsList1 />)}
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
      <br />
      {
        currentPage
      }
    </div>
  );
}

export default App;
