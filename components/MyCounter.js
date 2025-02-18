"use client";
import React, { useState } from "react";

export default function MyCounter() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center p-0.5 border border-gray-300 rounded-lg overflow-hidden w-32">
      {/* Minus Button */}
      <button
        onClick={decrement}
        className="flex-1 text-center text-lg text-gray-600 hover:bg-gray-100"
      >
        -
      </button>

      {/* Count Display */}
      <div className="flex-1 text-center text-lg font-medium border-x border-gray-300">
        {count}
      </div>

      {/* Plus Button */}
      <button
        onClick={increment}
        className="flex-1 text-center text-lg text-gray-600 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
