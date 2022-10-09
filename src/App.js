import Video from './Video';
import './App.css';
import { useStore, actions } from './store'

function App() {

  const [ state, dispatch ] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  }

  console.log(todos)

  return (
    <div className="App">
      <input
        value={todoInput}
        placeholder="Enter todo ..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
