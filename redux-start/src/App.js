import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/actions";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useReduxState from "./hooks/useReduxState";
import useReduxDispatch from "./hooks/useReduxDispatch";
function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <button onClick={click}>추가</button>
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );

  function click() {
    dispatch(addTodo("할일"));
  }
}

export default App;
