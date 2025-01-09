

function App() {
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        To-Do List
      </h1>

      {/* Add Task Section */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add
        </button>
      </div>

      {/* Tasks Section */}
      <ul className="space-y-3">
        <li className="flex items-center justify-between bg-gray-99 rounded-lg px-4 py-2 shadow">
          <span className="text-gray-800">Learn React</span>
          <button className="text-red-500 hover:text-red-700 transition">
            ✖
          </button>
        </li>
        <li className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 shadow">
          <span className="text-gray-800">Build a To-Do List</span>
          <button className="text-red-500 hover:text-red-700 transition">
            ✖
          </button>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default App
