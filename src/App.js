import logo from './logo.svg';
import './App.css';
import { getTasks } from './Services/TaskService';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App ">
      <Container>
        <TodoList />
      </Container>

    </div>
  );
}

export default App;
