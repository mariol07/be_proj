import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Post />
    </div>
  );
}

export default App;
