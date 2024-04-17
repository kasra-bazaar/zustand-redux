import { useStoreValues } from "./store/store";

function App() {
  const count = useStoreValues((state) => state.count);
  const increment = useStoreValues((state) => state.increment);
  const decrement = useStoreValues((state) => state.decrement);
  return (
    <main>
      <p>{count}</p>
      <div>
        <button onClick={increment}> increment </button>
        <button onClick={decrement}> decrement </button>
      </div>
    </main>
  );
}

export default App;
