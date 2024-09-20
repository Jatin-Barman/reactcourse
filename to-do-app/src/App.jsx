import { useState } from "react";
import "./App.css";
import ToDoPage from "./components/ToDoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoPage />
    </>
  );
}

export default App;
