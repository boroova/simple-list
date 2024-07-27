import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
//comment
function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addToList = () => {
    if (inputValue.trim()) {
      setList((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Simple List</h1>
      <div className="card">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={addToList} type="submit">Add</button>
        <div>
          <h2>List:</h2>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
