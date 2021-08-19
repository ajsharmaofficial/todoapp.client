import logo from './logo.svg';
import './App.css';
import { getTasks } from './Services/TaskService';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';


function App() {
  return (
    <div className="App">

      <TodoList />
    </div>
  );
}

export default App;
