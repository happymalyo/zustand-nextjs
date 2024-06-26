
export default function Home() {
  return (
    <main className="m-auto p-10">
      <h1>Bears</h1>
      <p>How many Bears are in our Store? {0}</p>

      <div className="flex space-x-2">
        <button className="item bg-slate-500 text-white rounded p-2">
          Increase
        </button>
        <button className="item bg-slate-500 text-white rounded p-2">
          Decrease
        </button>
      </div>
    </main>
  );
}
