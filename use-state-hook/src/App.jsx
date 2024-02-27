import { useState } from "react";
import "./App.css";
import ColorChanger from "./components/ColorChanger"

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((cnt) => cnt + 1);
  }

  function decrement() {
    
    if(count <= 0) return

    setCount(function (cnt) {
      return cnt - 1;
    });
  }

  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center underline mt-3">
        Learning UseState-hook!
      </h1>

      <h2 className="bg-yellow-500 px-3 py-3 font-bold text-lg rounded-md mt-8">
        Counter : {count}
      </h2>

      <div className="flex gap-3 mt-4">

        <button 
        className="bg-green-500 text-white rounded px-2 py-1 font-bold"
        onClick={() => increment()}
        >
          Click to Increase Counter
        </button>

        <button 
        className="bg-red-500 text-white rounded px-2 py-1 font-bold"
        onClick={() => decrement()}
        >
          Click to Decrease Counter
        </button>
      </div>

      <ColorChanger/>
    </div>
  );
}

export default App;
