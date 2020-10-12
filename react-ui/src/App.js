/** @format */

import ChatApp from "components/ChatApp";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ChatApp />
		</ThemeProvider>
	);
}

export default App;
