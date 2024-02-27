import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("blue");

  const changeColor = (colorName) => {
    setColor(function (c) {
      return (c = colorName);
    });
  };

  //   function changeColor(colorName) {
  //     setColor(colorName);
  //   }

  return (
    <div
      className={`flex h-[500px] w-[700px] bg-${color}-500 rounded-lg mt-3 items-center justify-around border border-yellow-500`}
    >
      <div className="bg-white flex h-8 items-center justify-center gap-3 rounded-full px-2 py-5 ">
        <div
          onClick={() => changeColor("red")}
          className="bg-red-500 rounded-full px-8 text-lg hover:cursor-pointer"
        >
          Red
        </div>
        <div
          onClick={() => changeColor("yellow")}
          className="bg-yellow-500 rounded-full px-8 text-lg hover:cursor-pointer"
        >
          Yellow
        </div>
        <div
          onClick={() => changeColor("green")}
          className="bg-green-500 rounded-full px-8 text-lg hover:cursor-pointer"
        >
          Green
        </div>
      </div>
    </div>
  );
}

export default ColorChanger;
