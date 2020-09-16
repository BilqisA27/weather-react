import React from "react";
import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather city="Paris" />
    </div>
  );
}

export default App;
