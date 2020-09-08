import React, { useState } from "react";

import "./App.css";
import Button from "./Button";
import useColorSwitch from "./useColorSwitch";

function App() {
  const [color, handleButton1] = useColorSwitch();
  const [color2, handleButton2] = useColorSwitch("#0000ff", "#ff00ff");

  return (
    <div className="App">
      <p style={{ color: color }}>this is a text</p>
      <Button width="120px" onClick={handleButton1} label=" click me"></Button>
      <p style={{ color: color2 }}>this is a text</p>
      <Button onClick={handleButton2} label=" click me"></Button>
    </div>
  );
}

export default App;
