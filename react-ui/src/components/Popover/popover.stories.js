/** @format */

import Button from "components/Button";
import React from "react";
import Popover from ".";

export default {
	title: "UI Component /Popover",
	component: Popover,
};

export const Default = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "50vh",
		}}
	>
		<Popover content="Hello!">
			<Button shape="rect">Click Me</Button>
		</Popover>
	</div>
);

export const WithOffset = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "50vh",
		}}
	>
		<Popover content="Hello!" offset={{ x: "-25%" }}>
			<Button shape="rect">Click Me</Button>
		</Popover>
	</div>
);
