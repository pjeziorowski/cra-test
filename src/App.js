import logo from './logo.svg';
import './App.css';

const msg = process.env.REACT_APP_MSG

function App() {
  console.log(msg)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {msg}
        </a>
      </header>
    </div>
  );
}

export default App;
