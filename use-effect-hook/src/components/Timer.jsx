import React from "react";
import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    function timer() {
        if(count >= 10) return
        setTimeout(() => {
            setCount(() => count + 1)
        }, 1000)
    }

    useEffect(() => {
        timer()
    })

    return (
        <div className="mt-5">
            <span className="bg-yellow-500 px-5 text-bold text-2xl rounded py-1">Counter : {count}</span>
        </div>
    )
}

export default Timer;