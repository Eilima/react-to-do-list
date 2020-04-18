import React from "react";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
