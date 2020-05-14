import React from "react";
import "./App.css";
import JobsList from "./components/JobsList";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <h1>GitHub Job Hunter</h1>
      <JobsList />
      <Jobs />
    </div>
  );
}

export default App;
