import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";
function App() {
  // let counter = 10;
  const [counter, setcounter] = useState(15);
  const addValue = () => {
    setcounter(counter + 1);
    console.log("value is added!", counter);
  };

  const removeValue = () => {
    setcounter(counter - 1);
    console.log("value is removed", counter);
  };
  return (
    <>
      <h1 className="bg-green-500 px-4 py-5 border text-black rounded-2xl">
        Counter Game
      </h1>
      <h2>counter is : {counter}</h2>
      <br></br>
      <button onClick={addValue}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={removeValue}> -</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Tailwind concepts</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card username="Tarun Namdev" action="hit me " />
      <Card username="Aryan Namdev" />
      <Card username="Hitesh Namdev" action="visit me" />
    </>
  );
}

export default App;
