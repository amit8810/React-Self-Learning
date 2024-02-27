import "./App.css";
import Basic from "./components/Basic";
import Advanced from "./components/Advanced";

function App() {
  return (
    <div className="m-5">
      {/* basic section */}
      <h1 className="text-3xl font-bold underline text-center">
        How to render multiple components at a time
      </h1>
      <section className="rendering-list">
        <Basic />
      </section>

      {/* advanced section */}
      <section className="mt-4">
        <h1 className="text-3xl font-bold underline text-center">
          Rendering Data from Array and objects
        </h1>
        <Advanced />
      </section>
    </div>
  );
}

export default App;
