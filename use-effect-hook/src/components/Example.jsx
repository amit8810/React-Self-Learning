import React, { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count])


    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex justify-center items-center gap-2">
            <h1 className="text-white font-bold">Count : {count}</h1>
            <h1 className="text-white font-bold">Calculation : {calculation}</h1>
     
            </div>
            <button onClick={() => setCount((count) => count + 1)} className="bg-teal-500 rounded m-2 px-3">Click Me!</button>
        </div>
    )
}

export default Example;