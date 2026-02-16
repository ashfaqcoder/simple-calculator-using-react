import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [obtainmarks, setOtbtainmarks] = useState(0);
  const [totalmarks, setTotalmarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function calculatePercentage(e){
       e.preventDefault()
       setPercentage((obtainmarks / totalmarks) * 100)
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h2>count: {count}</h2>
      <button onClick={decrement}>Decrement</button>
      <div>
        <form onSubmit={calculatePercentage}>
          <input
            type="number"
            placeholder="Enter obtain Marks"
            onChange={(e) => setOtbtainmarks(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter totals Marks"
            onChange={(e) => setTotalmarks(e.target.value)}
          />
          <button>Finde %</button>
          <h2>percentage: {percentage}</h2>
        </form>
      </div>
    </div>
  );
}
export default App;
