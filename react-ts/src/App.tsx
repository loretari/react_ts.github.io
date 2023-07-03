import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from "./components/NewTodo";

function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('LearnTypeScript')
    ];

    const addTodoHandler = (todoText: string) => {};


  return (
    <div>
        <NewTodo  onAddTodo={addTodoHandler}/>
        <Todos items={ todos }/>
    </div>
  );
}

export default App;
