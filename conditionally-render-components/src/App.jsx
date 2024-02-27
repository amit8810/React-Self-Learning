import "./App.css";
import PackingList from "./components/PackingList";

function App() {
  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold underline text-center">
        Learning: How to conditionally render components
      </h1>

      <div>
        <PackingList/>
      </div>
    </div>
  );
}

export default App;
