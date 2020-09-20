/** @format */

import React, { useState } from "react";

import "./App.css";
import Button from "./Button";
import useColorSwitch from "./useColorSwitch";

function App() {
	const [color, handleButton1] = useColorSwitch();
	const [color2, handleButton2] = useColorSwitch("#0000ff", "#ff00ff");

	return <div></div>;
}

export default App;
