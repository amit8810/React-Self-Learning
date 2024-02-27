import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import porcheImage from "./assets/porsche.png";
import porcheSilverImage from "./assets/porsche-silver.png";

import Person from "./components/Person";

function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <h1 className="text-3xl text-yellow-400 mt-3 text-center font-bold underline">
        Learning Functional Component in React!
      </h1>

      {/* Button Component */}
      <div className="flex gap-3 item-center justify-center mt-8">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <h2 className="text-white text-center mt-5 font-semibold tracking-wider">
        This is How a Simple Component is Created and Imported in React.
      </h2>

      <h1 className="text-3xl text-yellow-400 mt-8 text-center font-bold underline">
        Learning Functional Component with{" "}
        <span className="text-red-500">PROP</span> in React!
      </h1>

      <div className="flex justify-center items-center mt-8">
        <div className="flex items-center border-4 border-yellow-500 rounded-lg mt-3 px-5 py-5 gap-4 ">
          <div className="border rounded-lg">
            <Card
              imageSrc={porcheImage}
              altText="porsche-911-carrens"
              title="Porsche 911 Carrera"
              description="Fewer kilograms equals more agility and contact with the road is more important than ever. The 911 Carrera T is a commitment to purism. A conscious release for increased driving pleasure."
            />
          </div>
          <div className="border rounded-lg">
            <Card
              imageSrc={porcheSilverImage}
              altText="porsche-911-carrens"
              title="Porsche 911 Carrera"
              description="Fewer kilograms equals more agility and contact with the road is more important than ever. The 911 Carrera T is a commitment to purism. A conscious release for increased driving pleasure."
            />
          </div>
        </div>
      </div>
      <div>
        <Person/>
      </div>
    </div>
  );
}

export default App;
