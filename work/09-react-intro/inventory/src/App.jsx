import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Reorder from "./Reorder";

function App() {
  const [count, setCount] = useState(0);
  const onReorder = () => {
    setCount(5);
  };
  return (
    <div className="app">
      <span>count = {count}</span>
      <span>
          <button
              type="button"
              onClick={ () => setCount(count + 1) }
          >+</button>
      </span>
      <span>
          <button
              type="button"
              onClick={ () => setCount(count - 1) }
              disabled={!count}
          >-</button>
      </span>

      { count
          ?<span></span>
          :<Reorder className="reorder" onReorder={onReorder}/>
      }
    </div>
  );
}

export default App;


/*
<header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */