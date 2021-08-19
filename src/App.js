import logo from './logo.svg';
import './App.css';
import { GetTasks } from './Services/TaskService';

function Get() {
  GetTasks().then(response => {
    console.log(response.message);
  });
}
function App() {

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
          Learn React
        </a>
        <a href="#" className="btn" onClick={() => Get()}> This is the button to click</a>
      </header>
    </div>
  );
}

export default App;
