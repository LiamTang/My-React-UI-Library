/** @format */

import React from "react";
import Radio from ".";

export default {
	title: "UI Component/Radio",
	component: Radio,
};

export const Default = () => <Radio>Selection</Radio>;

export const RadioGroup = () => (
	<Radio.Group label="Please Selection">
		<Radio name="option">option1</Radio>
		<Radio name="option">option2</Radio>
		<Radio name="option">option3</Radio>
	</Radio.Group>
);
