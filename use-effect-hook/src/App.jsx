import "./App.css";
import Timer from "./components/Timer";
import Example from "./components/Example";

function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <h1 className="font-bold text-3xl text-center underline">
        Learning useEffect-hook!
      </h1>

      <div className="flex items-center justify-center flex-col mt-10">
        <div className="flex flex-col items-center justify-center">

          <h2 className="font-bold text-red-500 ">Timer Example</h2>
          <Timer/>
          <div className="mt-10 bg-black min-h-[200px] rounded shadow-xl px-5 py-5">
            <Example/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
