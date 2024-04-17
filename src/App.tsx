/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector, useDispatch } from "react-redux";
import { CounterAction } from "./store/counterReducer";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.counter);
  const incrementHandler = () => {
    dispatch(CounterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(CounterAction.decrement());
  };
  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      <div className="value">{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
}

export default App;
