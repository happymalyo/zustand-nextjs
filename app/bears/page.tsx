"use client";

import React from "react";
import { useBearStore } from "./_store";

export default function Page() {
  const {bears, increment, decrement} = useBearStore(state => state);
  return (
    <main className="m-auto p-10">
      <h1>Bears</h1>
      <p>How many Bears are in our Store? {bears}</p>

      <div className="flex space-x-2">
        <button onClick={increment} className="item bg-slate-500 text-white rounded p-2">
          Increase
        </button>
        <button onClick={decrement} className="item bg-slate-500 text-white rounded p-2">
          Decrease
        </button>
      </div>
    </main>
  );
}
