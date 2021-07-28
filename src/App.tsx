import { useReducer } from "react";

const initialState = { count: 0 };

type State = { count: number }

type ActionType = {
  type: 'increment' | 'decrement'
}

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatcher({ type: 'decrement' })}> - </button>
      <button onClick={() => dispatcher({ type: 'increment' })}> + </button>
    </>
  )
}


function App() {
  return (
    <Counter />
  );
}

export default App;
