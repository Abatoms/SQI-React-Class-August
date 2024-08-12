import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";

function App() {
  document.title = "React Class";
  return (
    <React.Fragment>
      <Nav />
      <Heading
        title="Welcome to React Class"
        content={"Lalalalala"}
        btnText={"Click me"}
      />
      <Heading
        title="React.js is fun"
        content={"Lolololo"}
        btnText={"Submit"}
      />
      <Heading
        title="I am loving this"
        content={"tatatatata"}
        btnText={"Press me"}
      />
      <Heading
        title="Software Developer in the making"
        content={"Babababababa"}
        btnText={"Send"}
      />
    </React.Fragment>
  );
}

export default App;
