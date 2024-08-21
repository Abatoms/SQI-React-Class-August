import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("John");
  const incrementCount = () => {
    setCount((curr) => curr + 1);
  };

  const decrementCount = () => {
    if (count == 0) {
      return;
    }
    setCount((curr) => curr - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleDarkModeSettings = () => {
    setIsDarkMode((curr) => !curr);
  };

  const changeName = (newName) => {
    setName(newName);
  };

  document.title = "React Class";
  console.log("Count is: ", count);
  console.log("Dark mode is: ", isDarkMode);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Nav />
      <button
        onClick={handleDarkModeSettings}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "red",
          color: "#fff",
          marginTop: "20px",
        }}
      >
        {isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      <Heading
        title="Welcome to React Class"
        content={"Lalalalala"}
        btnText={"Click me"}
      />
      <br />
      <div>
        <p>Count: {count}</p>
      </div>
      <button onClick={incrementCount}>Increment COunt</button>
      <button onClick={decrementCount}>Decrement COunt</button>
      <button onClick={resetCount}>Reset COunt</button>
      <br /> <br />
      <div>
        <p>{name}</p>
        <button
          onClick={() => {
            changeName("Yusuf");
          }}
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default App;
