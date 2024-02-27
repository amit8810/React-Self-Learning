import "./App.css";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-black text-center">Learning useReducer-hook!</h1>
      <Counter/>
    </div>
  );
}

export default App;
