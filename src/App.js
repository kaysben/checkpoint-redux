import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import FilterTask from "./Components/FilterTask";
import ListTasks from "./Components/ListTasks";

function App() {
  const [filterAll, setFilterAll] = useState(false);
  const [status, setStatus] = useState();

  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTask />
      <FilterTask setFilterAll={setFilterAll} setStatus={setStatus} />
      <ListTasks filterAll={filterAll} status={status} />
    </div>
  );
}

export default App;
